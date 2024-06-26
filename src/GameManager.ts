import { Application, Assets, Texture, Sprite, FederatedPointerEvent, Spritesheet, Text, EventsTicker, Graphics } from 'pixi.js';
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
import TextDice from './game-objects/TextDice';
import { sound } from '@pixi/sound';

interface Player {
    position: Vector;
    hand: Hand | null;
}

export type SerializedObject = {
    id: number;
    x: number;
    y: number;
    angle: number;
    locked: boolean;
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
    type: 'dice' | 'text-dice';
    size: number;
    value: number,
} | { type: 'object' });

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

    constructor(app: Application, room: PeerRoom, isHost: boolean) {
        this.app = app;
        this.camera = new Camera();;
        this.app.stage.addChild(this.camera);
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
                            item.desiredPosition = message.position;
                            item.force = message.force;
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
                    break;
                case 'lock-object':
                    if (address !== room.address()) {
                        const object = this.gameObjects.get(message.target);
                        if (object) {
                            object.locked = message.locked;
                        }
                    }
                    break;
                case 'destroy-object':
                    if (address !== room.address()) {
                        const object = this.gameObjects.get(message.target);
                        if (object) {
                            object.destroy();
                        }
                    }
                    break;
                case 'clone-object':
                    if (address !== room.address()) {
                        const object = this.gameObjects.get(message.target);
                        if (object) {
                            this.duplicateObject(object);
                        }
                    }
                    break;

            }
        });
    };

    deserialize(object: SerializedObject): GameObject | null {
        let createdObject: GameObject | null = null;
        if (object.type === 'card') {
            const card = new Card(GetTexture(object.face), GetTexture(object.back), object.width, object.height);
            if (object.isFlipped) card.flip();
            if (!object.inStack) this.camera.addChild(card);
            createdObject = card;
        }
        if (object.type === 'stack') {
            const cards = object.items.map((i) => this.gameObjects.get(i)) as (GameObject & IStackable)[];
            const stack = new Stack(cards);
            this.camera.addChild(stack);
            createdObject = stack;
        }
        if (object.type === 'dice' || object.type === 'text-dice') {
            const spritesheet = Assets.get<Spritesheet>(`d${object.size}-sheet`);
            let dice: Dice;
            switch (object.type) {
                case 'dice':
                    dice = new Dice(spritesheet, object.size);
                    break;
                case 'text-dice':
                    dice = new TextDice(spritesheet, object.size);
                    break;
            }
            this.camera.addChild(dice);
            dice.value = object.value;
            createdObject = dice;
        }
        if (createdObject) {
            createdObject.x = object.x;
            createdObject.y = object.y;
            createdObject.desiredPosition.x = object.x;
            createdObject.desiredPosition.y = object.y;
            createdObject.angle = object.angle;
            createdObject.locked = object.locked;
        }
        return createdObject;
    }

    syncObjects(state: { gameObjects: SerializedObject[]; hands: { items: number[]; player: string | null; }[]; nextUID: number; }) {
        console.log('started syncing objects', state);
        this.gameObjects.forEach((i) => i.destroy({ children: true }));
        this.gameObjects.clear();
        resetUIDs(-100000);
        state.gameObjects.sort((a, b) => a.type.localeCompare(b.type));
        for (let obj of state.gameObjects) {
            const createdObject = this.deserialize(obj);
            if (createdObject) {
                this.gameObjects.delete(createdObject.id);
                createdObject.id = obj.id;
                this.gameObjects.set(createdObject.id, createdObject);
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

    dragInfo: { isDragging: boolean, offsets: Map<number, Vector> } = { isDragging: false, offsets: new Map() };
    targets: GameObject[] = [];
    hoverTarget: GameObject | null = null;
    tooltip: Text;

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
        sound.play('pick');
        target.addFilter('shadow', new DropShadowFilter({ blur: 4, offset: { x: 8, y: 30 }, pixelSize: { x: 1, y: 1 }, quality: 8 }))

    }
    onMoveEnd(target: GameObject) {
        target.eventMode = 'static';
        target.zIndex = target.baseZindex;
        sound.play('pick');
        target.removeFilter('shadow');
    }



    onDragStart(item: GameObject & IDraggable) {
        if (!this.targets.includes(item)) {
            this.targets.forEach((i) => !i.destroyed && i.removeFilter('outline'));
            this.targets.length = 0;
            item.addFilter('outline', new OutlineFilter({ thickness: 5, color: 'yellow' }));
            this.targets.push(item);
        }
        const itemOffset = this.camera.toLocal(item, item.parent);
        this.targets.forEach(target => {
            if (target.locked) return;
            if (isIDraggable(target)) {
                const targetWorld = this.camera.toLocal(target, target.parent);
                this.dragInfo.offsets.set(target.id, new Vector(targetWorld.x - itemOffset.x, targetWorld.y - itemOffset.y));
                this.onMoveStart(target)
                this.room.send({
                    type: 'move-start-object', message: {
                        target: target.id,
                    }
                });
            }
        })
        this.dragInfo.isDragging = true;
        this.app.stage.on('pointermove', this.onDragMove, this);
    }

    onDragMove(event: FederatedPointerEvent) {
        if (this.dragInfo.isDragging === false) return;
        this.targets.forEach(item => {
            if (isIDraggable(item) && !item.destroyed) {
                if (item.parent) {
                    const center = this.camera.screenToWorldPoint(new Vector(event.screen.x, event.screen.y));
                    const offset = this.dragInfo.offsets.get(item.id)!;
                    item.desiredPosition.x = center.x + offset.x;
                    item.desiredPosition.y = center.y + offset.y;
                } else {
                    this.onDragEnd(event);
                }
                item.onDrag()
                this.room.send({
                    type: 'move-object', message: {
                        target: item.id,
                        position: new Vector(item.x, item.y),
                    }
                })
            }
        })
    }

    onDragEnd(event) {
        if (this.dragInfo.isDragging === false) return;
        this.targets.forEach(item => {
            if (isIDraggable(item)) {
                if (!item.destroyed) {
                    item.onDragEnd();
                    const newDesiredPos = this.camera.screenToWorldPoint(new Vector(event.screen.x, event.screen.y));
                    const offset = this.dragInfo.offsets.get(item.id)!;
                    item.desiredPosition.x = newDesiredPos.x + offset.x;
                    item.desiredPosition.y = newDesiredPos.y + offset.y;
                    const force = new Vector();
                    const mouseMovement = Controls.instance.mouse.movement;
                    if (mouseMovement.length > 2) {
                        const dir = mouseMovement.normalized.rotate(-this.camera.rotation);
                        const len = Math.min(mouseMovement.length, 5);
                        force.x = dir.x * len * 10;
                        force.y = dir.y * len * 10;
                        item.force = force;
                        if (item instanceof Dice) {
                            const seed = Date.now() + item.id;
                            const randSeeded = rand(seed);
                            if (item && isIRollable(item)) {
                                item.roll(randSeeded);
                                this.room.send({
                                    type: 'roll-object',
                                    message: {
                                        target: item.id,
                                        seed: seed,
                                    }
                                })
                            }
                        }
                    }
                    this.onMoveEnd(item);
                    this.room.send({
                        type: 'move-end-object', message: {
                            target: item.id,
                            position: item.desiredPosition,
                            force: force,
                        }
                    });
                }
            }
        })
        this.app.stage.off('pointermove', this.onDragMove, this);
        if (this.targets.length === 1) this.targets.length = 0;
        this.dragInfo.isDragging = false;
    }

    takeCardsToHand(amount: number) {
        const hand = this.hands.find((hand) => hand.player === this.room.address());
        const currentTargets = [...this.targets];
        if (this.hoverTarget && !currentTargets.includes(this.hoverTarget)) currentTargets.push(this.hoverTarget);
        currentTargets.forEach((target) => {
            if (hand && target && !target.locked && hand.items.indexOf(target as Card) === -1) {
                if (target instanceof Card) {
                    target.canStack = false;
                    target.angle = hand.angle;
                    hand.putCardAt(target as Card, hand.items.length)
                }
                if (target instanceof Stack) {
                    const mousePos = this.camera.screenToWorldPoint(Controls.instance.mouse.position);
                    for (let i = 0; i < amount; i++) {
                        if (target.items.length > 1) {
                            const item = target.onTakeFromStack(target.items[target.items.length - 1], mousePos)!;
                            item.angle = hand.angle;
                            hand.putCardAt(item as Card, hand.items.length)
                        }
                    }
                }
            }
        })
    }

    duplicateObject(target: GameObject) {
        let duplicatedObject: GameObject | null = null;
        if (target instanceof Stack) {
            if (target.canStack) {
                const items: number[] = target.items.map((item) => {
                    return this.deserialize(item.serialize())!.id;
                });
                const serializedStack = target.serialize();
                if (serializedStack.type === 'stack') {
                    serializedStack.items = items;
                }
                duplicatedObject = this.deserialize(serializedStack);
            }
        } else {
            duplicatedObject = this.deserialize(target.serialize());
        }
        if (duplicatedObject) {
            duplicatedObject.desiredPosition.x += duplicatedObject.width + 10;
            duplicatedObject.desiredPosition.y += 10;
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

        this.tooltip = new Text();
        this.tooltip.zIndex = 1400;
        this.tooltip.eventMode = 'none';
        this.tooltip.style.fill = 0xffffff;
        this.tooltip.anchor = { x: 0.5, y: 1 };
        this.app.stage.addChild(this.tooltip);

        this.peekView = new Sprite();
        this.peekView.eventMode = 'none';
        this.peekView.zIndex = 1500;
        this.peekView.anchor = { x: 1, y: 0.5 };
        this.app.stage.addChild(this.peekView);

        const selectionBox = new Graphics();
        selectionBox.rect(0, 0, 10, 10).fill({ color: 0x000000, alpha: 0.1 });
        this.app.stage.addChild(selectionBox);

        let selectionFirstPoint: Vector | null = null;

        this.app.stage.on('pointerdown', (event) => {
            if (event.button === 0) {
                const local = event.global;
                selectionFirstPoint = new Vector(local.x, local.y);
            }
        });
        this.app.stage.on('pointerup', (event) => {
            selectionFirstPoint = null;
        });
        this.app.stage.on('pointerupoutside', () => {
            selectionFirstPoint = null;
        });

        this.app.stage.on('pointermove', (event) => {
            if (selectionFirstPoint !== null && !this.dragInfo.isDragging) {
                const local = event.global;
                const minX = Math.min(local.x, selectionFirstPoint.x);
                const minY = Math.min(local.y, selectionFirstPoint.y);
                const maxX = Math.max(local.x, selectionFirstPoint.x);
                const maxY = Math.max(local.y, selectionFirstPoint.y);
                selectionBox.x = minX;
                selectionBox.y = minY;
                selectionBox.width = maxX - minX;
                selectionBox.height = maxY - minY;
                const bounds = selectionBox.getBounds(true);
                this.targets.length = 0;
                this.gameObjects.forEach((go) => {
                    if (go.parent) {
                        const global = go.parent.toGlobal(go.position);
                        if (bounds.containsPoint(global.x, global.y)) {
                            go.addFilter('outline', new OutlineFilter({ thickness: 5, color: 'yellow' }));
                            this.targets.push(go);
                        } else {
                            go.removeFilter('outline');
                        }
                    }
                })
            } else {
                selectionBox.width = 1;
                selectionBox.height = 1;
            }
        });

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

        EventsTicker.interactionFrequency = 1
        this.app.stage.eventMode = 'dynamic';
        this.app.stage.hitArea = this.app.screen;

        const center = new Vector(this.app.screen.width / 2, this.app.screen.height / 2);
        this.camera.position.x = center.x
        this.camera.position.y = center.y

        window.addEventListener('resize', () => {
            requestAnimationFrame(() => {
                this.app.queueResize();
                const center = new Vector(this.app.screen.width / 2, this.app.screen.height / 2);
                this.camera.position.x = center.x
                this.camera.position.y = center.y
            })
            console.log('resize')
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
            if (Controls.instance.keyboard.get('control') !== KeyState.HELD) {
                if (Controls.instance.keyboard.get('w') === KeyState.HELD)
                    input.y += -1;
                if (Controls.instance.keyboard.get('a') === KeyState.HELD)
                    input.x += -1;
                if (Controls.instance.keyboard.get('s') === KeyState.HELD)
                    input.y += 1;
                if (Controls.instance.keyboard.get('d') === KeyState.HELD)
                    input.x += 1;
            }

            const currentTargets = [...this.targets];
            if (this.hoverTarget) {
                const hoverIndex = currentTargets.indexOf(this.hoverTarget);
                if (hoverIndex > -1) {
                    currentTargets.splice(hoverIndex, 1);
                }
                currentTargets.unshift(this.hoverTarget)
            };

            if (currentTargets.length > 0) {
                let total = 0;
                const values = currentTargets.map((item) => {
                    return +item.toString();
                });
                total = values.reduce((total, current) => total + current);

                if (currentTargets[0] && !currentTargets[0].destroyed) {
                    this.tooltip.position = this.app.stage.toLocal(currentTargets[0], currentTargets[0].parent);
                    this.tooltip.position.y = currentTargets[0].getBounds().top - 10;
                    if (currentTargets.length > 1 && currentTargets.every((item) => item instanceof Dice)) {
                        this.tooltip.text = `${values.join(' + ')} = ${total}`;
                    } else {
                        this.tooltip.text = currentTargets[0].toString();
                    }
                } else {
                    this.tooltip.text = '';
                }
            } else {
                this.tooltip.text = '';
            }

            if (Controls.instance.keyboard.get('l') === KeyState.PRESSED) {
                currentTargets.forEach((target) => {
                    if (target) {
                        target.locked = !target.locked;
                        this.room.send({
                            type: 'lock-object',
                            message: {
                                target: target.id,
                                locked: target.locked,
                            }
                        })
                    }
                })
            }

            if (Controls.instance.keyboard.get('f') === KeyState.PRESSED) {
                currentTargets.forEach((target) => {
                    if (target && !target.locked && isIFlipable(target)) {
                        target.flip();
                        this.room.send({
                            type: 'flip-object',
                            message: {
                                target: target.id,
                            }
                        })
                    }
                })
            }

            if (Controls.instance.keyboard.get('r') === KeyState.PRESSED) {
                currentTargets.forEach((target) => {
                    const seed = Date.now() + target.id;
                    const randSeeded = rand(seed);

                    if (target && !target.locked && isIRollable(target)) {
                        target.roll(randSeeded);
                        this.room.send({
                            type: 'roll-object',
                            message: {
                                target: target.id,
                                seed: seed,
                            }
                        })
                    }
                })
            }

            let angle = 0
            if (Controls.instance.keyboard.get('q') === KeyState.HELD)
                angle -= 1;
            if (Controls.instance.keyboard.get('e') === KeyState.HELD)
                angle += 1;

            if (Controls.instance.keyboard.get('delete') === KeyState.PRESSED) {
                currentTargets.forEach((target) => {
                    target.destroy();
                    gm.room.send({
                        type: 'destroy-object',
                        message: {
                            target: target.id,
                        },
                    });
                })
            }

            if (Controls.instance.keyboard.get('control') === KeyState.HELD && Controls.instance.keyboard.get('d') === KeyState.PRESSED) {
                this.targets.forEach((target) => {
                    this.duplicateObject(target);
                    this.room.send({
                        type: 'clone-object',
                        message: {
                            target: target.id,
                        },
                    })
                })
            }

            if (Controls.instance.keyboard.get('alt') === KeyState.HELD) {
                if (this.hoverTarget) {
                    this.peekView.texture = this.hoverTarget.currentGraphics.texture;
                    this.peekView.width = this.hoverTarget.currentGraphics.width / this.hoverTarget.currentGraphics.height * this.app.screen.height / 2;
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
                    currentTargets.forEach((target) => {
                        if (target && !target.locked) {
                            target.angle += angle * ticker.deltaTime * 2;
                            this.room.send({
                                type: 'rotate-object',
                                message: {
                                    target: target.id,
                                    angle: target.angle,
                                }
                            });
                        }
                    })
                }
            }
            input.rotate(-this.camera.rotation);
            this.camera.desiredPosition.x += input.x * ticker.deltaTime * 20;
            this.camera.desiredPosition.y += input.y * ticker.deltaTime * 20;
            this.camera.Update(ticker.deltaTime);
        })
    }
};