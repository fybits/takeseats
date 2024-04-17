import { Application, Assets, Texture, Sprite, Container, FederatedPointerEvent, Spritesheet, SubtractBlend } from 'pixi.js';
import { DropShadowFilter } from "pixi-filters"
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
                case 'sync-resources':
                    if (address !== room?.address()) {
                        console.log('started syncing resources')
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
                        Assets.load(message.map(ass => ass.alias)).then(() => console.log(Assets.cache))
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
            item.position = data.position;
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
                const item = target.onTakeFromStack(object);
                if (item)
                    this.onMoveStart(item);
            }

        }
    }

    dragTarget: (GameObject & IDraggable) | null;
    target: GameObject | null;

    onMoveStart(target: GameObject) {
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
                this.dragTarget.x = center.x;
                this.dragTarget.y = center.y;
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

        // const spritesheet = Assets.get<Spritesheet>('cards-sheet');

        if (this.isHost) {
            // const cards: Card[] = [];

            // for (let i = 0; i < Object.keys(spritesheet.textures).length - 1; i++) {
            //     const card = new Card(spritesheet.textures[`card${i + 1}`], spritesheet.textures[`card20`]);
            //     cards.push(card);
            // }
            // this.camera.addChild(new Stack(cards));
        }

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
                this.camera.desiredZoom = Math.min(Math.max(this.camera.desiredZoom - event.deltaY / 2000, 0.3), 6);
            }
        })

        this.app.stage.eventMode = 'dynamic';
        this.app.stage.hitArea = this.app.screen;

        const center = new Vector(this.app.screen.width / 2, this.app.screen.height / 2);
        this.camera.position.x = center.x
        this.camera.position.y = center.y
        this.app.ticker.add((ticker) => {
            for (const child of this.camera.children) {
                if (child.label && this.players.has(child.label)) {
                    const player = this.players.get(child.label)!;
                    child.x = player.position.x;
                    child.y = player.position.y;
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

            if (angle !== 0) {
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
            this.room.send({
                type: 'player-cursor', message: {
                    position: this.camera.screenToWorldPoint(Controls.instance.mouse.position),
                }
            })

            this.camera.desiredPosition.x += input.x * ticker.deltaTime * 10;
            this.camera.desiredPosition.y += input.y * ticker.deltaTime * 10;
            this.camera.update(ticker.deltaTime);
        })
    }
};