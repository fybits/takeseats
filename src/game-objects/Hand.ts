import { BackdropBlurFilter, DropShadowFilter } from "pixi-filters";
import { Container, Graphics, Rectangle, Text } from "pixi.js";
import Card from "./Card";
import Controls from "../Controls";
import IUpdatable from "./interfaces/IUpdatable";

export default class Hand extends Container implements IUpdatable {
    itemsContainer: Container;
    handWidth: number;
    handHeight: number;
    playerNameText: Text;
    hidden: boolean;
    player: string | null;

    constructor(x: number, y: number, width: number, height: number) {
        super();
        this.player = null;
        this.label = 'hand';
        this.cursor = "grab";
        this.handWidth = width;
        this.handHeight = height;
        this.hidden = false;
        this.pivot.x = this.handWidth / 2;
        this.eventMode = 'static';
        const g = new Graphics();
        g.roundRect(0, 0, this.handWidth, this.handHeight, 20).stroke({ color: 0x202020, width: 8 });
        this.addChild(g);
        this.playerNameText = new Text();
        this.playerNameText.text = "Take this Seat";
        this.addChild(this.playerNameText)
        this.playerNameText.anchor.x = 0.5;
        this.playerNameText.style.fontSize = 120;
        this.playerNameText.style.fill = 0xffffff;
        this.playerNameText.style.fontWeight = 'bold';
        this.playerNameText.x = this.handWidth / 2;
        this.playerNameText.y = this.handHeight / 2 - this.playerNameText.height / 2;

        this.x = x;
        this.y = y;
        this.hitArea = new Rectangle(0, 0, this.handWidth, this.handHeight)
        this.zIndex = 0;
        this.itemsContainer = new Container();
        this.itemsContainer.label = 'hand_container';
        this.itemsContainer.filters = [new DropShadowFilter({ blur: 16, offset: { x: 8, y: 40 }, pixelSize: { x: 1, y: 1 }, quality: 100 })];
        this.addChild(this.itemsContainer);

        this.interactiveChildren = true;
        this.playerNameText.eventMode = 'static';
        this.playerNameText.on('pointerdown', (event) => {
            this.setPlayer(gm.room.address());
        })

        this.on('pointerup', (event) => {
            if (gm.dragTarget && gm.dragTarget instanceof Card) {
                console.log(event)
                gm.dragTarget.canStack = false;
                const x = this.itemsContainer.toLocal(event.global).x;
                const clamp = (val, min, max) => Math.min(Math.max(val, min), max)
                const ratio = clamp(x + gm.dragTarget.width / 2, 0, this.itemsContainer.width) / this.itemsContainer.width;
                const index = Math.round(ratio * this.itemsContainer.children.length);
                console.log(x, this.itemsContainer.width, ratio, index)
                this.itemsContainer.addChild(gm.dragTarget);
                this.itemsContainer.setChildIndex(gm.dragTarget, index)
                gm.dragTarget.x = x;
                gm.dragTarget.y = this.handHeight / 2;
                gm.dragTarget.desiredPosition.y = this.handHeight / 2;
                gm.dragTarget.angle += -this.angle;
            }
        });
        this.on('pointerenter', () => {
            if (gm.dragTarget && gm.dragTarget instanceof Card) {
                gm.dragTarget.canStack = false;
                gm.dragTarget.angle = this.angle;
                if (this.hidden && gm.dragTarget.currentGraphics.texture !== gm.dragTarget.back) {
                    gm.dragTarget.currentGraphics.texture = gm.dragTarget.back;
                }
            }
        })
        this.on('pointerleave', () => {
            if (gm.dragTarget && gm.dragTarget instanceof Card) {
                gm.dragTarget.canStack = true;
                if (!gm.dragTarget.isFlipped) {
                    gm.dragTarget.currentGraphics.texture = gm.dragTarget.face;
                }
            }
        });
    }

    setPlayer(player: string | null) {
        if (player === null) {
            this.player = null;
            this.playerNameText.text = "Take this Seat";
            this.playerNameText.y = this.handHeight / 2 - this.playerNameText.height / 2;
            return;
        }
        gm.hands.forEach((hand) => {
            if (hand.player === player) {
                hand.setPlayer(null);
            }
        })
        this.player = player;
        this.playerNameText.text = player;
        this.playerNameText.y = this.handHeight + 50;
    }

    update(dt: number): void {
        this.hidden = this.player !== gm.room.address();
        const n = this.itemsContainer.children.length;
        for (let i = 0; i < n; i++) {
            const card: Card = this.itemsContainer.children[i] as Card;
            const wholeWidth = 0.8 * Math.min(this.handWidth, card.width * n) - card.width;
            card.desiredPosition.x = i / Math.max(1, n - 1) * wholeWidth;
            this.itemsContainer.x = this.handWidth / 2 - wholeWidth / 2;
            card.desiredPosition.y = this.handHeight / 2;
            if (this.hidden && card.currentGraphics.texture !== card.back) {
                card.currentGraphics.texture = card.back;
            }
            card.update(dt);
        }
    }


}