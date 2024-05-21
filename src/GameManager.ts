import { Application, Assets, Texture, Sprite, Container, FederatedPointerEvent, Spritesheet, SubtractBlend, GlRenderTargetAdaptor, Rectangle, v8_0_0, buildAdaptiveQuadratic, AnimatedSprite } from 'pixi.js';
import { DropShadowFilter, OutlineFilter } from "pixi-filters"
import Camera from './game-objects/Camera';
import { DataEventData, PeerRoom } from './PeerRoom';
import { isIUpdatable } from './game-objects/interfaces/IUpdatable';
import Controls, { KeyState } from './Controls';
import { Vector } from './utils/Vector';
import Card from './game-objects/Card';
import IDraggable, { isIDraggable } from './game-objects/interfaces/IDraggable';
import GameObject from './game-objects/GameObject';
import { isIFlipable } from './game-objects/interfaces/IFlipable';
import { isIRollable } from './game-objects/interfaces/IRollable';
import Stack from './game-objects/Stack';
import IStackable, { isIStackable } from './game-objects/interfaces/IStackable';
import rand from './utils/random';
import { currentID, resetUIDs } from './utils/uniqueID';
import { GetTexture } from './app';
import Ping from './effects/Ping';
import Hand from './game-objects/Hand';
import Dice from './game-objects/Dice';

interface Player {
    position: Vector;
    hand: Hand | null;
}

export type SerializedObject = {
    id: number;
    x: number;
    y: number;
    angle: number;
} & ({
    type: 'card';
    face: string;
    back: string;
    isFlipped: boolean;
    inStack: boolean;
    width: number;
    height: number;
} | {
    type: 'stack';
    items: number[],
} | {
    type: 'dice';
    size: number;
    value: number,
})

const colors = [0xEE4B2B, 0x0096FF, 0xF0C05A, 0xffffff, 0xB163A3, 0x7F00FF]

export default class GameManager {
    app: Application;
    camera: Camera;
    room: PeerRoom;

    gameObjects: Map<number, GameObject>;

    players: Map<string, Player>;

    isHost: boolean;

    peekView: Sprite;
    peekViewZoom: number = 0.5;
    hands: Hand[];

    playersListElement: HTMLDivElement;

    constructor(app: Application, camera: Camera, room: PeerRoom, isHost: boolean) {
        this.app = app;
        this.camera = camera;
        this.room = room;
        this.players = new Map<string, Player>();
        this.gameObjects = new Map<number, GameObject>();
        this.isHost = isHost;
        this.playersListElement = document.querySelector('#players-list')!;
        const element = document.createElement('div');
        element.textContent = room.address();
        element.setAttribute('address', this.room.address());
        this.playersListElement.appendChild(element);
        console.log('isHost', isHost)
        room.on("message", (address, { type, message }) => {
            if (address !== room.address()) {
                console.log(type)
            }
            switch (type) {
                case 'announce':
                    if (address !== room.address()) {
                        const element = document.createElement('div');
                        element.textContent = address;
                        element.setAttribute('address', address);
                        this.playersListElement.appendChild(element);
                        console.log(address, 'connected!')
                        if (isHost) this.sync();
                    }
                    break;
                case 'player-disconnected':
                    if (address !== room.address()) {
                        const player = this.players.get(address);
                        if (player) {
                            player.hand?.setPlayer(null);
                            this.players.delete(address);
                        }
                        const playerElement = gm.playersListElement.querySelector<HTMLDivElement>(`div[address=${address}]`);
                        if (playerElement) playerElement.remove();
                        const cursor = camera.children.find((child) => child.label === address);
                        if (cursor) cursor.destroy();
                        console.log(address, 'disconnected!')
                    }
                    break;
                case 'sync-objects':
                    if (address !== room.address()) {
                        this.syncObjects(message);
                    }
                    break;
                case 'player-cursor':
                    if (address !== room.address()) {
                        this.onPlayerCursor(address, message);
                    }
                    break;
                case 'request-resource':
                    if (address !== room.address()) {
                        room.sendTo(address, {
                            type: 'sync-resources',
                            message: message.map((item): Extract<DataEventData, { type: 'sync-resources' }>['message'][0] => {
                                const spritesheetMatch = item.alias.match(/(.+)-sheet$/);
                                if (spritesheetMatch) {
                                    const spritesheet = Assets.get<Spritesheet>(item.alias);
                                    return {
                                        alias: spritesheetMatch[1],
                                        spritesheetData: spritesheet.data,
                                        src: spritesheet.textureSource.label,
                                    }
                                }
                                return {
                                    alias: item.alias,
                                    src: GetTexture(item.alias).source.label,
                                }
                            })
                        })
                    }
                    break;
                case 'sync-resources':
                    if (address !== room.address()) {
                        console.log('started syncing resources')
                        Promise.all(message.map(async ({ alias, src, spritesheetData }) => {
                            if (spritesheetData) {
                                Assets.add({ alias: alias, src: src });
                                await Assets.load<Texture>([alias]);
                                const texture = GetTexture(alias);
                                const spritesheet = new Spritesheet(texture, spritesheetData);
                                await spritesheet.parse();
                                Assets.cache.set(`${alias}-sheet`, spritesheet);
                            } else {
                                Assets.add({ alias, src })
                            }
                        })).then(() => {
                            Assets.load(message.map(ass => ass.alias)).then(() => {
                                this.gameObjects.forEach((go) => go.reloadTextures())
                            })
                        });
                    }
                    break;
                case 'ping-point':
                    if (address !== room.address()) {
                        this.camera.addChild(new Ping(GetTexture(message.texture), message.position.x, message.position.y, message.duration, message.tint, true));
                    }
                    break;
                case 'move-start-object':
                    if (address !== room.address()) {
                        const item = this.gameObjects.get(message.target);
                        if (item) {
                            this.onMoveStart(item as GameObject);
                        }
                    }
                    break;
                case 'move-object':
                    if (address !== room.address()) {
                        this.onObjectMove(address, message);
                    }
                    break;
                case 'move-end-object':
                    if (address !== room.address()) {
                        const item = this.gameObjects.get(message.target);
                        if (item) {
                            this.onMoveEnd(item as GameObject);
                        }
                    }
                    break;
                case 'rotate-object':
                    if (address !== room.address()) {
                        const item = this.gameObjects.get(message.target);
                        if (item) {
                            item.angle = message.angle;
                        }
                    }
                    break;
                case 'roll-object':
                    if (address !== room.address()) {
                        const item = this.gameObjects.get(message.target);
                        if (item && isIRollable(item)) {
                            item.roll(rand(message.seed));
                        }
                    }
                    break;
                case 'flip-object':
                    if (address !== room.address()) {
                        const item = this.gameObjects.get(message.target);
                        if (item && isIFlipable(item)) {
                            item.flip();
                        }
                    }
                    break;
                case 'stack-object':
                    if (address !== room.address()) {
                        this.onObjectStack(address, message);
                    }
                    break;
                case 'take-object-from-stack':
                    if (address !== room.address()) {
                        this.onTakeObjectFromStack(address, message);
                    }
                    break;
                case 'player-choose-hand':
                    if (address !== room.address()) {
                        if (this.players.has(address)) {
                            this.players.get(address)!.hand = this.hands[message.handIndex]
                            this.hands[message.handIndex].setPlayer(address);
                        }
                    }
                    break;
                case 'put-card-in-hand':
                    if (address !== room.address()) {
                        const card = this.gameObjects.get(message.card_id);
                        if (card && card instanceof Card) {
                            this.hands[message.handIndex].putCardAt(card, message.index);
                        }
                    }
                    break;
                case 'update-card-hidden':
                    if (address !== room.address()) {
                        const card = this.gameObjects.get(message.card_id);
                        if (card && card instanceof Card) {
                            this.hands[message.handIndex].updateCardHidden(card, message.state);
                        }
                    }

            }
        });
    };

    syncObjects(state: { gameObjects: SerializedObject[]; hands: { items: number[]; player: string | null; }[]; nextUID: number; }) {
        console.log('started syncing objects', state);
        this.gameObjects.forEach((i) => i.destroy({ children: true }));
        this.gameObjects.clear();
        resetUIDs(-100000);
        state.gameObjects.sort((a, b) => a.type.localeCompare(b.type));
        for (let obj of state.gameObjects) {
            if (obj.type === 'card') {
                const card = new Card(GetTexture(obj.face), GetTexture(obj.back), obj.width, obj.height);
                card.x = obj.x;
                card.y = obj.y;
                card.desiredPosition.x = obj.x;
                card.desiredPosition.y = obj.y;
                card.angle = obj.angle;
                this.gameObjects.delete(card.id);
                card.id = obj.id;
                this.gameObjects.set(card.id, card);
                if (obj.isFlipped) card.flip();
                if (!obj.inStack) this.camera.addChild(card);
            }
            if (obj.type === 'stack') {
                const cards = obj.items.map((i) => this.gameObjects.get(i)) as (GameObject & IStackable)[];
                const stack = new Stack(cards);
                stack.x = obj.x;
                stack.y = obj.y;
                stack.desiredPosition.x = obj.x;
                stack.desiredPosition.y = obj.y;
                stack.angle = obj.angle;
                this.gameObjects.delete(stack.id);
                stack.id = obj.id;
                this.gameObjects.set(stack.id, stack);
                stack.id = obj.id;
                this.camera.addChild(stack);
            }
            if (obj.type === 'dice') {
                const spritesheet = Assets.get<Spritesheet>('d20');
                const dice = new Dice(spritesheet);
                dice.x = obj.x;
                dice.y = obj.y;
                dice.desiredPosition.x = obj.x;
                dice.desiredPosition.y = obj.y;
                dice.angle = obj.angle;
                this.gameObjects.delete(dice.id);
                dice.id = obj.id;
                this.gameObjects.set(dice.id, dice);
                dice.id = obj.id;
                this.camera.addChild(dice);
                dice.value = obj.value;
            }
        }
        for (let i = 0; i < state.hands.length; i++) {
            const hand = state.hands[i];
            this.hands[i].setPlayer(hand.player);
            for (let cardIndex = 0; cardIndex < hand.items.length; cardIndex++) {
                const card = this.gameObjects.get(hand.items[cardIndex]);
                if (card && card instanceof Card)
                    this.hands[i].putCardAt(card, cardIndex);
            }
        }
        resetUIDs(state.nextUID);
    }

    sync() {
        const objectSerialized: SerializedObject[] = [];
        for (let obj of this.gameObjects.values()) {
            objectSerialized.push(obj.serialize());
        }
        this.room.send({
            type: 'sync-objects',
            message: {
                gameObjects: objectSerialized,
                hands: this.hands.map((hand) => ({ player: hand.player, items: hand.items.map(item => item.id) })),
                nextUID: currentID,
            }
        })
    }

    onPlayerCursor(address: string, data: Extract<DataEventData, { type: 'player-cursor' }>["message"]) {
        if (this.players.has(address)) {
            const player = this.players.get(address)!;
            player.position.x = data.position.x;
            player.position.y = data.position.y;
        } else {
            const player: Player = {
                position: data.position,
                hand: null,
            };
            this.players.set(address, player);
            const cursorSprite = new Sprite({ anchor: { x: 0.5, y: 0.5 }, texture: Texture.from('cursor'), width: 24, height: 24, x: player.position.x, y: player.position.y, zIndex: 1000 });
            cursorSprite.label = address;
            this.camera.addChild(cursorSprite)
        }
    }

    onObjectMove(address: string, data: Extract<DataEventData, { type: 'move-object' }>["message"]) {
        const item = this.gameObjects.get(data.target);
        if (item) {
            item.desiredPosition = data.position;
        }
    }

    onObjectStack(address: string, data: Extract<DataEventData, { type: 'stack-object' }>["message"]) {
        const target = this.gameObjects.get(data.target);
        const item = this.gameObjects.get(data.object_to_stack);
        if (isIStackable(target) && isIStackable(item)) {
            target.onStack(item);
        }
    }

    onTakeObjectFromStack(address: string, data: Extract<DataEventData, { type: 'take-object-from-stack' }>["message"]) {
        const object = this.gameObjects.get(data.object_from_stack);
        if (isIStackable(object)) {
            const target = object.stack;
            if (target && isIStackable(target)) {
                const item = target.onTakeFromStack(object, data.point);
                if (item)
                    this.onMoveStart(item);
            }

        }
    }

    dragTarget: (GameObject & IDraggable) | null;
    target: GameObject | null;

    onMoveStart(target: GameObject) {
        if (target.parent.label === 'hand_container' && isIStackable(target)) {
            target.canStack = false;
            const center = this.camera.toLocal(target.position, target.parent);
            target.x = center.x;
            target.y = center.y;
            target.desiredPosition.x = center.x;
            target.desiredPosition.y = center.y;
            target.angle += target.parent.parent.angle;
            this.camera.addChild(target);
        }
        if (target.parent !== this.camera) {
            this.camera.addChild(target);
            const mousePos = Controls.instance.mouse.position;
            const center = this.camera.screenToWorldPoint(new Vector(mousePos.x, mousePos.y));
            target.x = center.x;
            target.y = center.y;
        }
        if (target instanceof Card) {
            target.canStack = true;
        }
        target.eventMode = 'none';
        target.zIndex = 100;
        if (!target.parent) {
            this.camera.addChild(target);
        }
        target.addFilter('shadow', new DropShadowFilter({ blur: 2, offset: { x: 4, y: 20 }, pixelSize: { x: 1, y: 1 } }))

    }
    onMoveEnd(target: GameObject) {
        target.eventMode = 'static';
        target.zIndex = target.baseZindex;
        target.removeFilter('shadow');
    }

    onDragStart(item: GameObject & IDraggable) {
        this.dragTarget = item;
        this.onMoveStart(item)
        this.room.send({
            type: 'move-start-object', message: {
                target: this.dragTarget.id,
            }
        });
        this.app.stage.on('pointermove', this.onDragMove, this);
    }

    onDragMove(event: FederatedPointerEvent) {
        if (this.dragTarget) {
            if (this.dragTarget.parent) {
                const center = this.camera.screenToWorldPoint(new Vector(event.screen.x, event.screen.y));
                this.dragTarget.desiredPosition.x = center.x;
                this.dragTarget.desiredPosition.y = center.y;
            } else {
                this.onDragEnd();
            }
            this.dragTarget.onDrag()
            this.room.send({
                type: 'move-object', message: {
                    target: this.dragTarget.id,
                    position: new Vector(this.dragTarget.x, this.dragTarget.y),
                }
            })
        }
    }

    onDragEnd() {
        if (this.dragTarget) {
            if (!this.dragTarget.destroyed) {
                this.dragTarget.onDragEnd();
                this.onMoveEnd(this.dragTarget);
            }
            this.room.send({
                type: 'move-end-object', message: {
                    target: this.dragTarget.id,
                }
            });
            this.app.stage.off('pointermove', this.onDragMove, this);
            this.dragTarget = null;
        }
    }

    takeCardsToHand(amount: number) {
        const hand = this.hands.find((hand) => hand.player === this.room.address());
        if (hand) {
            if (this.target && this.target instanceof Card) {
                this.target.canStack = false;
                hand.putCardAt(this.target as Card, hand.items.length)
            }
            if (this.target && this.target instanceof Stack) {
                const mousePos = this.camera.screenToWorldPoint(Controls.instance.mouse.position);
                for (let i = 0; i < amount; i++) {
                    if (this.target.items.length > 1) {
                        const item = this.target.onTakeFromStack(this.target.items[this.target.items.length - 1], mousePos);
                        hand.putCardAt(item as Card, hand.items.length)
                    }
                }
            }
        }
    }

    async startGame() {
        this.hands = [];
        let hand = new Hand(1000, 1000, 1200, 400, colors[0]);
        this.hands.push(hand);

        hand = new Hand(-1000, 1000, 1200, 400, colors[1]);
        this.hands.push(hand);

        hand = new Hand(-1800, 0, 1200, 400, colors[2]);
        hand.angle = 90;
        this.hands.push(hand);

        hand = new Hand(-1000, -1000, 1200, 400, colors[3]);
        hand.angle = 180;
        this.hands.push(hand);

        hand = new Hand(1000, -1000, 1200, 400, colors[4]);
        hand.angle = 180;
        this.hands.push(hand);

        hand = new Hand(1800, 0, 1200, 400, colors[5]);
        hand.angle = 270;
        this.hands.push(hand);

        this.hands.forEach(hand => {
            this.camera.addChild(hand);
        });

        this.peekView = new Sprite();
        this.peekView.eventMode = 'none';
        this.peekView.zIndex = 1500;
        this.peekView.anchor = { x: 1, y: 0.5 };
        this.app.stage.addChild(this.peekView);

        this.app.stage.on('pointerup', this.onDragEnd, this);
        this.app.stage.on('pointerupoutside', this.onDragEnd, this);
        this.app.stage.on('wheel', (event) => {
            if (Controls.instance.keyboard.get('alt') === KeyState.HELD) {
                this.peekViewZoom = Math.min(Math.max(this.peekViewZoom - event.deltaY / 2000, 0.03), 6);
            } else {
                this.camera.desiredZoom = Math.min(Math.max(this.camera.desiredZoom - event.deltaY / 2000, 0.2), 2);
            }
        })

        this.app.stage.on('pointermove', () => {
            this.room.send({
                type: 'player-cursor', message: {
                    position: this.camera.screenToWorldPoint(Controls.instance.mouse.position),
                }
            })
        })

        this.app.stage.eventMode = 'dynamic';
        this.app.stage.hitArea = this.app.screen;

        const center = new Vector(this.app.screen.width / 2, this.app.screen.height / 2);
        this.camera.position.x = center.x
        this.camera.position.y = center.y

        window.addEventListener('resize', () => {
            const center = new Vector(this.app.screen.width / 2, this.app.screen.height / 2);
            this.camera.position.x = center.x
            this.camera.position.y = center.y
        })

        this.app.ticker.add((ticker) => {
            for (const child of this.app.stage.children) {
                if (isIUpdatable(child)) {
                    child.Update(ticker.deltaTime);
                }
            }
            for (const child of this.camera.children) {
                if (child.label && this.players.has(child.label)) {
                    const player = this.players.get(child.label)!;
                    child.x = player.position.x;
                    child.y = player.position.y;
                    child.scale.x = 0.08 / this.camera.scale.x
                    child.scale.y = 0.08 / this.camera.scale.y
                    if (player.hand) {
                        child.tint = player.hand.color;
                    }
                }
                if (isIUpdatable(child)) {
                    child.Update(ticker.deltaTime);
                }
            }
            const input: Vector = new Vector();
            if (Controls.instance.keyboard.get('w') === KeyState.HELD)
                input.y += -1;
            if (Controls.instance.keyboard.get('a') === KeyState.HELD)
                input.x += -1;
            if (Controls.instance.keyboard.get('s') === KeyState.HELD)
                input.y += 1;
            if (Controls.instance.keyboard.get('d') === KeyState.HELD)
                input.x += 1;

            const currentTarget = this.dragTarget || this.target;

            if (Controls.instance.keyboard.get('f') === KeyState.PRESSED) {
                if (currentTarget && isIFlipable(currentTarget)) {
                    currentTarget.flip();
                    this.room.send({
                        type: 'flip-object',
                        message: {
                            target: currentTarget.id,
                        }
                    })
                }
            }

            if (Controls.instance.keyboard.get('r') === KeyState.PRESSED) {
                const seed = Date.now();
                const randSeeded = rand(seed);

                if (currentTarget && isIRollable(currentTarget)) {
                    currentTarget.roll(randSeeded);
                    this.room.send({
                        type: 'roll-object',
                        message: {
                            target: currentTarget.id,
                            seed: seed,
                        }
                    })
                }
            }

            let angle = 0
            if (Controls.instance.keyboard.get('q') === KeyState.HELD)
                angle -= 1;
            if (Controls.instance.keyboard.get('e') === KeyState.HELD)
                angle += 1;

            if (Controls.instance.keyboard.get('alt') === KeyState.HELD) {
                if (currentTarget) {
                    this.peekView.texture = currentTarget.currentGraphics.texture;
                    this.peekView.width = currentTarget.currentGraphics.width / currentTarget.currentGraphics.height * this.app.screen.height / 2;
                    this.peekView.height = this.app.screen.height / 2;
                }
                this.peekView.scale.x = this.peekViewZoom;
                this.peekView.scale.y = this.peekViewZoom;
                this.peekView.x = this.app.screen.right - 100;
                this.peekView.y = this.app.screen.height / 2;
            } else {
                this.peekView.texture = null!;
            }

            if (Controls.instance.keyboard.get('tab') === KeyState.PRESSED) {
                const mousePos = this.camera.screenToWorldPoint(Controls.instance.mouse.position);
                const myHand = this.hands.find((hand) => hand.player === this.room.address());
                this.camera.addChild(new Ping(GetTexture('arrow'), mousePos.x, mousePos.y, 1500, myHand ? myHand.color : 0xffffff))
            }

            if (Controls.instance.keyboard.get('1') === KeyState.PRESSED) {
                this.takeCardsToHand(1);
            }
            if (Controls.instance.keyboard.get('2') === KeyState.PRESSED) {
                this.takeCardsToHand(2);
            }
            if (Controls.instance.keyboard.get('3') === KeyState.PRESSED) {
                this.takeCardsToHand(3);
            }
            if (Controls.instance.keyboard.get('4') === KeyState.PRESSED) {
                this.takeCardsToHand(4);
            }
            if (Controls.instance.keyboard.get('5') === KeyState.PRESSED) {
                this.takeCardsToHand(5);
            }
            if (Controls.instance.keyboard.get('6') === KeyState.PRESSED) {
                this.takeCardsToHand(6);
            }
            if (Controls.instance.keyboard.get('7') === KeyState.PRESSED) {
                this.takeCardsToHand(7);
            }
            if (Controls.instance.keyboard.get('8') === KeyState.PRESSED) {
                this.takeCardsToHand(8);
            }

            if (angle !== 0) {
                if (Controls.instance.keyboard.get(' ') === KeyState.HELD) {
                    this.camera.angle -= angle * ticker.deltaTime;
                } else {
                    if (currentTarget) {
                        currentTarget.angle += angle * ticker.deltaTime * 2;
                        this.room.send({
                            type: 'rotate-object',
                            message: {
                                target: currentTarget.id,
                                angle: currentTarget.angle,
                            }
                        });
                    }
                }
            }
            input.rotate(-this.camera.rotation);
            this.camera.desiredPosition.x += input.x * ticker.deltaTime * 20;
            this.camera.desiredPosition.y += input.y * ticker.deltaTime * 20;
            this.camera.Update(ticker.deltaTime);
        })
    }
};