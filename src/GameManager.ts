import { Application, NineSliceSprite, Assets, Texture, Sprite, Container, FederatedPointerEvent, Spritesheet, } from 'pixi.js';
import { OutlineFilter } from "pixi-filters"
import Camera from './game-objects/Camera';
import { DataEventData, PeerRoom } from './PeerRoom';
import { isIUpdatable } from './game-objects/interfaces/IUpdatable';
import Controls, { KeyState } from './Controls';
import { Vector } from './utils/Vector';
import Card from './game-objects/Card';
import IDraggable from './game-objects/interfaces/IDraggable';
import GameObject from './game-objects/GameObject';
import { isIFlipable } from './game-objects/interfaces/IFlipable';
import { isIRollable } from './game-objects/interfaces/IRollable';
import Stack from './game-objects/Stack';

interface Player {
    position: Vector;
}

export default class GameManager {
    app: Application;
    camera: Camera;
    private room: PeerRoom;

    players: Map<string, Player>;

    constructor(app: Application, camera: Camera, room: PeerRoom) {
        this.app = app;
        this.camera = camera;
        this.room = room;
        this.players = new Map<string, Player>();
    };


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
            const cursorSprite = new Sprite({ texture: Texture.from('cursor'), width: 24, height: 24, x: player.position.x, y: player.position.y });
            cursorSprite.label = address;
            this.camera.addChild(cursorSprite)
        }
    }
    onObjectMove(address: string, data: Extract<DataEventData, { type: 'move-object' }>["message"]) {
        const item = this.camera.children.find((item) => item.label === data.label);
        if (item) {
            item.position = data.position;
        }
    }

    dragTarget: (GameObject & IDraggable) | null;
    target: GameObject | null;

    onDragStart(item: GameObject & IDraggable) {
        this.dragTarget = item;
        this.dragTarget.eventMode = 'none';
        this.dragTarget.zIndex = 100;
        this.app.stage.on('pointermove', this.onDragMove, this);
    }

    onDragMove(event: FederatedPointerEvent) {
        if (this.dragTarget) {
            this.dragTarget.onDrag()
            if (this.dragTarget.parent) {
                const center = this.camera.screenToWorldPoint(new Vector(event.screen.x, event.screen.y));
                console.log(this.camera.pivot.x, this.camera.pivot.y)
                this.dragTarget.x = center.x;
                this.dragTarget.y = center.y;
                // this.dragTarget.parent.toLocal(center, undefined, this.dragTarget.position);
            } else {
                this.onDragEnd();
            }
        }
    }

    onDragEnd() {
        if (this.dragTarget) {
            this.dragTarget.onDragEnd()
            this.dragTarget.eventMode = 'static';
            this.dragTarget.zIndex = 0;
            this.app.stage.off('pointermove', this.onDragMove, this);
            this.dragTarget = null;
        }
    }

    createCard(label: string): Container {
        const card = new Card(Texture.from("card-face"), Texture.from("card"), label);

        return card;
    }

    async startGame() {
        Assets.add({ alias: "card", src: "assets/card.png" });
        Assets.add({ alias: "card-face", src: "assets/card-face.png" });
        Assets.add({ alias: "cursor", src: "assets/cursor.png" });
        Assets.add({ alias: 'cards-sheet', src: "assets/spritesheet.json" })
        await Assets.load(['card', 'cursor', 'card-face', 'cards-sheet']);

        const spritesheet = Assets.get<Spritesheet>('cards-sheet');

        const cards: Card[] = [];

        for (let i = 0; i < Object.keys(spritesheet.textures).length - 1; i++) {
            const card = new Card(spritesheet.textures[`card${i + 1}`], spritesheet.textures[`card20`], `Card${i + 1}`);
            cards.push(card);
        }
        this.camera.addChild(new Stack(cards));



        // const spritesheet = new Spritesheet(Texture.from('cards-sheet'));

        this.app.stage.on('pointerup', this.onDragEnd, this);
        this.app.stage.on('pointerupoutside', this.onDragEnd, this);
        this.app.stage.on('wheel', (event) => {
            this.camera.desiredZoom = Math.min(Math.max(this.camera.desiredZoom - event.deltaY / 2000, 0.3), 6);
        })

        this.app.stage.eventMode = 'dynamic';
        this.app.stage.hitArea = this.app.screen;

        // this.camera.addChild(this.createCard("Card1"));
        // this.camera.addChild(this.createCard("Card2"));
        // this.camera.addChild(this.createCard("Card3"));

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
            if (this.dragTarget) {
                this.room.send({
                    type: 'move-object', message: {
                        label: this.dragTarget.label,
                        position: new Vector(this.dragTarget.x, this.dragTarget.y),
                    }
                })
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

            let angle = 0
            if (Controls.instance.keyboard.get('q') === KeyState.HELD)
                angle -= 1;
            if (Controls.instance.keyboard.get('e') === KeyState.HELD)
                angle += 1;

            if (Controls.instance.keyboard.get('f') === KeyState.PRESSED) {
                if (this.dragTarget && isIFlipable(this.dragTarget)) {
                    this.dragTarget.flip();
                } else if (this.target && isIFlipable(this.target)) {
                    this.target.flip();
                }
            }

            if (Controls.instance.keyboard.get('r') === KeyState.PRESSED) {
                if (this.dragTarget && isIRollable(this.dragTarget)) {
                    this.dragTarget.roll();
                } else if (this.target && isIRollable(this.target)) {
                    this.target.roll();
                }
            }

            if (this.dragTarget) {
                this.dragTarget.angle += angle;
            } else if (this.target) {
                this.target.angle += angle;
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