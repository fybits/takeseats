import { Application, Assets, Texture, Sprite, Container, FederatedPointerEvent, Spritesheet, SubtractBlend, GlRenderTargetAdaptor, Rectangle } from 'pixi.js';
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

interface Player {
    position: Vector;
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
} | {
    type: 'stack';
    items: number[],
})

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

    constructor(app: Application, camera: Camera, room: PeerRoom, isHost: boolean) {
        this.app = app;
        this.camera = camera;
        this.room = room;
        this.players = new Map<string, Player>();
        this.gameObjects = new Map<number, GameObject>();
        this.isHost = isHost;

        room.on("message", (address, { type, message }) => {
            switch (type) {
                case 'announce':
                    if (address !== room?.address()) {
                        console.log(address, 'connected!')
                        if (isHost) this.sync();
                    }
                    break;
                case 'sync-objects':
                    if (address !== room?.address()) {
                        console.log('started syncing objects')
                        this.gameObjects.forEach((i) => i.destroy({ children: true }));
                        this.gameObjects.clear();
                        message.gameObjects.sort((a, b) => a.type.localeCompare(b.type))
                        for (let obj of message.gameObjects) {
                            if (obj.type === 'card') {
                                const card = new Card(GetTexture(obj.face), GetTexture(obj.back));
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
                        }
                        resetUIDs(message.nextUID);
                    }
                    break;
                case 'player-cursor':
                    if (address !== room?.address()) {
                        this.onPlayerCursor(address, message);
                    }
                    break;
                case 'request-resource':
                    if (address !== room?.address()) {
                        room.send({
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
                    if (address !== room?.address()) {
                        console.log('started syncing resources')
                        console.log(message)
                        message.forEach(async ({ alias, src, spritesheetData }) => {
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
                        });
                        Assets.load(message.map(ass => ass.alias)).then(() => { console.log(Assets.cache); this.gameObjects.forEach((go) => go.reloadTextures()) })
                    }
                    break;
                case 'ping-point':
                    if (address !== room?.address()) {
                        this.camera.addChild(new Ping(GetTexture(message.texture), message.position.x, message.position.y, message.duration, true));
                    }
                    break;
                case 'move-start-object':
                    if (address !== room?.address()) {
                        const item = this.gameObjects.get(message.target);
                        if (item) {
                            this.onMoveStart(item as GameObject);
                        }
                    }
                    break;
                case 'move-object':
                    if (address !== room?.address()) {
                        this.onObjectMove(address, message);
                    }
                    break;
                case 'move-end-object':
                    if (address !== room?.address()) {
                        const item = this.gameObjects.get(message.target);
                        if (item) {
                            this.onMoveEnd(item as GameObject);
                        }
                    }
                    break;
                case 'rotate-object':
                    if (address !== room?.address()) {
                        const item = this.gameObjects.get(message.target);
                        if (item) {
                            item.angle = message.angle;
                        }
                    }
                    break;
                case 'roll-object':
                    if (address !== room?.address()) {
                        const item = this.gameObjects.get(message.target);
                        if (item && isIRollable(item)) {
                            item.roll(rand(message.seed));
                        }
                    }
                    break;
                case 'flip-object':
                    if (address !== room?.address()) {
                        const item = this.gameObjects.get(message.target);
                        if (item && isIFlipable(item)) {
                            item.flip();
                        }
                    }
                    break;
                case 'stack-object':
                    if (address !== room?.address()) {
                        this.onObjectStack(address, message);
                    }
                    break;
                case 'take-object-from-stack':
                    if (address !== room?.address()) {
                        this.onTakeObjectFromStack(address, message);
                    }
                    break;

            }
        });
    };

    sync() {
        const objectSerialized: SerializedObject[] = [];
        for (let obj of this.gameObjects.values()) {
            objectSerialized.push(obj.serialize());
        }
        this.room.send({ type: 'sync-objects', message: { gameObjects: objectSerialized, nextUID: currentID } })
    }

    onPlayerCursor(address: string, data: Extract<DataEventData, { type: 'player-cursor' }>["message"]) {
        if (this.players.has(address)) {
            const player = this.players.get(address)!;
            player.position.x = data.position.x;
            player.position.y = data.position.y;
        } else {
            const player: Player = {
                position: data.position,
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
        target.zIndex = 0;
        target.removeFilter('shadow');
    }

    onDragStart(item: GameObject & IDraggable) {
        this.dragTarget = item;
        console.log('drag start')
        if (this.dragTarget.parent.label === 'hand_container' && isIStackable(this.dragTarget)) {
            this.dragTarget.canStack = false;
            const mousePos = Controls.instance.mouse.position;
            const center = this.camera.screenToWorldPoint(new Vector(mousePos.x, mousePos.y));
            this.dragTarget.x = center.x;
            this.dragTarget.y = center.y;
            this.dragTarget.desiredPosition.x = center.x;
            this.dragTarget.desiredPosition.y = center.y;
            this.dragTarget.angle += this.dragTarget.parent.parent.angle;
            this.camera.addChild(this.dragTarget);
            // this.app.stage.addChild(this.dragTarget);
            // this.dragTarget.x = Controls.instance.mouse.position.x;
            // this.dragTarget.y = Controls.instance.mouse.position.y;
            // this.dragTarget.desiredPosition.x = Controls.instance.mouse.position.x;
            // this.dragTarget.desiredPosition.y = Controls.instance.mouse.position.y;
        }
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

    async startGame() {

        const spritesheet = Assets.get<Spritesheet>('cards-sheet');

        if (this.isHost) {
            const cards: Card[] = [];

            for (let i = 0; i < Object.keys(spritesheet.textures).length - 1; i++) {
                const card = new Card(spritesheet.textures[`card${i + 1}`], spritesheet.textures[`card32`]);
                cards.push(card);
            }
            this.camera.addChild(new Stack(cards));
        }
        // this.hand = new Container({ cursor: "grab" });
        // this.hand.filters = [new DropShadowFilter({ blur: 16, offset: { x: 8, y: 40 }, pixelSize: { x: 1, y: 1 }, quality: 100 })];
        // this.hand.width = this.app.screen.width / 2;
        // this.hand.height = 100;
        // this.hand.pivot.x = this.app.screen.width / 4;
        // this.hand.pivot.y = 100;
        // this.hand.eventMode = 'static';
        // this.hand.x = this.app.screen.width / 2;
        // this.hand.y = this.app.screen.height + 100;
        // this.hand.zIndex = 0;
        // this.hand.on('pointerup', () => {
        //     if (this.dragTarget && this.dragTarget instanceof Card) {
        //         this.dragTarget.canStack = false;
        //         this.hand.addChild(this.dragTarget);
        //         // this.dragTarget.desiredPosition.x = 0;
        //         this.dragTarget.desiredPosition.y = 0;
        //         this.dragTarget.y = 0;
        //     }
        // });
        // this.hand.on('pointerover', () => {
        //     this.hand.y = this.app.screen.height - 10;
        //     if (this.dragTarget && this.dragTarget instanceof Card) {
        //         this.dragTarget.canStack = false;
        //         this.app.stage.addChild(this.dragTarget);
        //         this.dragTarget.x = Controls.instance.mouse.position.x;
        //         this.dragTarget.y = Controls.instance.mouse.position.y;
        //     }
        // });
        // this.hand.on('pointerout', () => {
        //     this.hand.y = this.app.screen.height + 100;
        //     if (this.dragTarget && this.dragTarget instanceof Card) {
        //         this.dragTarget.canStack = true;
        //         this.camera.addChild(this.dragTarget);
        //         // const mousePos = this.camera.screenToWorldPoint(Controls.instance.mouse.position);
        //         // this.dragTarget.x = mousePos.x;
        //         // this.dragTarget.y = mousePos.y;
        //     }
        // });
        // this.app.stage.addChild(this.hand);

        // 1000 1000 0
        //     - 1000 1000 0

        // 1000 - 1000 90
        // 1000 1000 90

        //     - 1000 - 1000 180
        // 1000 - 1000 180

        //     - 1000 1000 270
        //         - 1000 - 1000 270
        this.hands = [];
        let hand = new Hand(1000, 1000, 1200, 400);
        this.hands.push(hand);

        hand = new Hand(-1000, 1000, 1200, 400);
        this.hands.push(hand);

        hand = new Hand(-1800, 0, 1200, 400);
        hand.angle = 90;
        this.hands.push(hand);

        hand = new Hand(-1000, -1000, 1200, 400);
        hand.angle = 180;
        this.hands.push(hand);

        hand = new Hand(1000, -1000, 1200, 400);
        hand.angle = 180;
        this.hands.push(hand);

        hand = new Hand(1800, 0, 1200, 400);
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
                this.camera.desiredZoom = Math.min(Math.max(this.camera.desiredZoom - event.deltaY / 2000, 0.2), 6);
            }
        })

        this.app.stage.eventMode = 'dynamic';
        this.app.stage.hitArea = this.app.screen;

        const center = new Vector(this.app.screen.width / 2, this.app.screen.height / 2);
        this.camera.position.x = center.x
        this.camera.position.y = center.y

        this.app.ticker.add((ticker) => {
            for (const child of this.app.stage.children) {
                if (isIUpdatable(child)) {
                    child.update(ticker.deltaTime);
                }
            }
            for (const child of this.camera.children) {
                if (child.label && this.players.has(child.label)) {
                    const player = this.players.get(child.label)!;
                    child.x = player.position.x;
                    child.y = player.position.y;
                    child.scale.x = 0.08 / this.camera.scale.x
                    child.scale.y = 0.08 / this.camera.scale.y
                }
                if (isIUpdatable(child)) {
                    child.update(ticker.deltaTime);
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


            if (Controls.instance.keyboard.get('f') === KeyState.PRESSED) {
                if (this.dragTarget && isIFlipable(this.dragTarget)) {
                    this.dragTarget.flip();
                    this.room.send({
                        type: 'flip-object',
                        message: {
                            target: this.dragTarget.id,
                        }
                    })
                } else if (this.target && isIFlipable(this.target)) {
                    this.target.flip();
                    this.room.send({
                        type: 'flip-object',
                        message: {
                            target: this.target.id,
                        }
                    })
                }
            }

            if (Controls.instance.keyboard.get('r') === KeyState.PRESSED) {
                const seed = Date.now();
                const randSeeded = rand(seed);

                if (this.dragTarget && isIRollable(this.dragTarget)) {
                    this.dragTarget.roll(randSeeded);
                    this.room.send({
                        type: 'roll-object',
                        message: {
                            target: this.dragTarget.id,
                            seed: seed,
                        }
                    })
                } else if (this.target && isIRollable(this.target)) {
                    this.target.roll(randSeeded);
                    this.room.send({
                        type: 'roll-object',
                        message: {
                            target: this.target.id,
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
                if (this.dragTarget) {
                    this.peekView.texture = this.dragTarget.currentGraphics.texture;
                    this.peekView.width = this.dragTarget.currentGraphics.width / this.dragTarget.currentGraphics.height * this.app.screen.height / 2;
                    this.peekView.height = this.app.screen.height / 2;
                } else if (this.target) {
                    this.peekView.texture = this.target.currentGraphics.texture;
                    this.peekView.width = this.target.currentGraphics.width / this.target.currentGraphics.height * this.app.screen.height / 2;
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
                this.camera.addChild(new Ping(GetTexture('cursor'), mousePos.x, mousePos.y))
            }

            // if (Controls.instance.keyboard.get('1') === KeyState.PRESSED) {
            //     if (this.target && this.target instanceof Card) {
            //         this.target.canStack = false;
            //         this.hand.addChild(this.target);
            //         this.target.desiredPosition.y = 0;
            //     }
            // }

            if (angle !== 0) {
                if (Controls.instance.keyboard.get('shift') === KeyState.HELD) {
                    this.camera.angle -= angle * ticker.deltaTime;
                } else {
                    if (this.dragTarget) {
                        this.dragTarget.angle += angle * ticker.deltaTime * 2;
                        this.room.send({
                            type: 'rotate-object',
                            message: {
                                target: this.dragTarget.id,
                                angle: this.dragTarget.angle,
                            }
                        });
                    } else if (this.target) {
                        this.target.angle += angle * ticker.deltaTime * 2;
                        this.room.send({
                            type: 'rotate-object',
                            message: {
                                target: this.target.id,
                                angle: this.target.angle,
                            }
                        });
                    }
                }
            }
            this.room.send({
                type: 'player-cursor', message: {
                    position: this.camera.screenToWorldPoint(Controls.instance.mouse.position),
                }
            })

            input.rotate(-this.camera.rotation);
            this.camera.desiredPosition.x += input.x * ticker.deltaTime * 20;
            this.camera.desiredPosition.y += input.y * ticker.deltaTime * 20;
            this.camera.update(ticker.deltaTime);
        })
    }
};