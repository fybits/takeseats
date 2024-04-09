import { Application, NineSliceSprite, Assets, Texture, Sprite, Container, } from 'pixi.js';
import { OutlineFilter } from "pixi-filters"
import Camera from './game-objects/Camera';
import { DataEventData, PeerRoom } from './PeerRoom';
import { isIUpdatable } from './game-objects/IUpdate';
import Controls, { KeyState } from './Controls';
import { Vector } from './utils/Vector';

interface Player {
    position: Vector;
}

export default class GameManager {
    private app: Application;
    private camera: Camera;
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

    dragTarget: Container | null

    onDragStart(item: Container) {
        this.dragTarget = item;
        this.app.stage.on('pointermove', (evt) => this.onDragMove(evt));
    }
    onDragMove(event) {
        if (this.dragTarget) {
            this.dragTarget.parent.toLocal({ x: event.global.x - this.dragTarget.width / 2, y: event.global.y - this.dragTarget.height / 2 }, undefined, this.dragTarget.position);
        }
    }
    onDragEnd() {
        if (this.dragTarget) {
            this.app.stage.off('pointermove', (evt) => this.onDragMove(evt));
            this.dragTarget = null;
        }
    }

    createCard(label): Container {
        const card = new NineSliceSprite({ texture: Texture.from("card"), width: 140, height: 200, leftWidth: 16, rightWidth: 16, topHeight: 16, bottomHeight: 16 });
        card.interactive = true;
        card.label = label;

        card.eventMode = 'static';
        card.addEventListener('mouseover', () => {
            card.filters = new OutlineFilter({ thickness: 5, color: 'yellow' })
            card.cursor = "grab"
        });
        card.addEventListener('mouseout', () => {
            card.filters = []
        });
        card.on('pointerdown', () => this.onDragStart(card));
        return card;
    }

    async startGame() {
        Assets.add({ alias: "card", src: "assets/card.png" });
        Assets.add({ alias: "cursor", src: "assets/cursor.png" });
        await Assets.load(['card', 'cursor']);

        this.app.stage.on('pointerup', () => this.onDragEnd());
        this.app.stage.on('pointerupoutside', () => this.onDragEnd());

        this.app.stage.eventMode = 'static';
        this.app.stage.hitArea = this.app.screen;

        this.camera.addChild(this.createCard("Card1"));
        this.camera.addChild(this.createCard("Card2"));
        this.camera.addChild(this.createCard("Card3"));

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
                console.log(this.dragTarget.x, this.dragTarget.y)

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

            this.room.send({
                type: 'player-cursor', message: {
                    position: this.camera.screenToWorldPoint(Controls.instance.mouse.position),
                }
            })
            this.camera.desiredPosition.x -= input.x * ticker.deltaTime * 10;
            this.camera.desiredPosition.y -= input.y * ticker.deltaTime * 10;
            this.camera.update(ticker.deltaTime);
        })
    }
};