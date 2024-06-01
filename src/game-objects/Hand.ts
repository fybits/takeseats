import { DropShadowFilter } from "pixi-filters";
import { Container, Graphics, Rectangle, Text } from "pixi.js";
import Card from "./Card";
import IUpdatable from "./interfaces/IUpdatable";
import { colorToHexString } from "../utils";

export default class Hand extends Container implements IUpdatable {
    itemsContainer: Container;
    handWidth: number;
    handHeight: number;
    playerNameText: Text;
    hidden: boolean;
    player: string | null;
    color: number;

    get items(): Card[] {
        return this.itemsContainer.children as Card[];
    }

    constructor(x: number, y: number, width: number, height: number, color: number = 0xffffff) {
        super();
        this.player = null;
        this.label = 'hand';
        this.cursor = "grab";
        this.handWidth = width;
        this.handHeight = height;
        this.hidden = false;
        this.pivot.x = this.handWidth / 2;
        this.eventMode = 'static';
        this.color = color;
        const g = new Graphics();
        g.roundRect(0, 0, this.handWidth, this.handHeight, 20).stroke({ color: 0x202020, width: 8 });
        this.addChild(g);
        this.playerNameText = new Text();
        this.playerNameText.text = "Take this Seat";
        this.addChild(this.playerNameText)
        this.playerNameText.anchor.x = 0.5;
        this.playerNameText.style.fontSize = 120;
        this.playerNameText.style.fill = color;
        this.playerNameText.style.fontWeight = 'bold';
        this.playerNameText.x = this.handWidth / 2;
        this.playerNameText.y = this.handHeight / 2 - this.playerNameText.height / 2;

        this.x = x;
        this.y = y;
        this.hitArea = new Rectangle(0, 0, this.handWidth, this.handHeight)
        this.zIndex = 0;
        this.itemsContainer = new Container();
        this.itemsContainer.label = 'hand_container';
        const dropShadowFilter = new DropShadowFilter({ blur: 16, offset: { x: 6, y: 32 }, pixelSize: { x: 1, y: 1 }, quality: 8 });
        dropShadowFilter.antialias = 'on';
        this.itemsContainer.filters = [dropShadowFilter];
        this.addChild(this.itemsContainer);

        this.interactiveChildren = true;
        this.playerNameText.eventMode = 'static';
        this.playerNameText.on('pointerdown', (event) => {
            this.setPlayer(gm.room.address());
            gm.room.send({
                type: 'player-choose-hand', message: {
                    handIndex: gm.hands.findIndex((hand) => hand === this)
                }
            })
        })

        const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max)

        this.on('pointerup', (event) => {
            if (gm.targets[0] && gm.targets[0] instanceof Card) {
                const x = this.itemsContainer.toLocal(event.global).x;
                const ratio = clamp(x + gm.targets[0].width / 2, 0, this.itemsContainer.width) / this.itemsContainer.width;
                const index = Math.round(ratio * this.itemsContainer.children.length);
                this.putCardAt(gm.targets[0], index);
                gm.room.send({
                    type: 'put-card-in-hand', message: {
                        card_id: gm.targets[0].id,
                        index,
                        handIndex: gm.hands.findIndex((hand) => hand === this)
                    }
                })
            }
        });
        this.on('pointerenter', () => {
            if (gm.targets[0] && gm.targets[0] instanceof Card) {
                this.updateCardHidden(gm.targets[0], 'enter')
                gm.room.send({
                    type: 'update-card-hidden', message: {
                        card_id: gm.targets[0].id,
                        state: 'enter',
                        handIndex: gm.hands.findIndex((hand) => hand === this)
                    }
                })
            }
        })
        this.on('pointerleave', () => {
            if (gm.targets[0] && gm.targets[0] instanceof Card) {
                this.updateCardHidden(gm.targets[0], 'leave')
                gm.room.send({
                    type: 'update-card-hidden', message: {
                        card_id: gm.targets[0].id,
                        state: 'leave',
                        handIndex: gm.hands.findIndex((hand) => hand === this)
                    }
                })
            }
        });
    }

    updateCardHidden(card: Card, state: 'enter' | 'leave') {
        if (state === 'enter') {
            card.canStack = false;
            card.angle = this.angle;
            if (this.hidden && card.currentGraphics.texture !== card.back) {
                card.hide()
            }
        } else {
            card.canStack = true;
            if (!card.isFlipped) {
                card.show();
            }
        }
    }

    putCardAt(card: Card, index: number) {
        card.canStack = false;
        this.itemsContainer.addChild(card);
        this.itemsContainer.setChildIndex(card, index)
        card.position = this.itemsContainer.toLocal(card, gm.camera);
        card.desiredPosition.y = this.handHeight / 2;
        card.angle += -this.angle;
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
        if (gm.players.has(player)) {
            gm.players.get(player)!.hand = this;
        }
        this.player = player;
        this.playerNameText.text = player;
        this.playerNameText.y = this.handHeight + 50;
        const playerElement = gm.playersListElement.querySelector<HTMLDivElement>(`div[address=${player}]`);
        if (playerElement)
            playerElement.style.color = colorToHexString(this.color);
    }

    Update(dt: number): void {
        this.hidden = this.player !== gm.room.address();
        const n = this.itemsContainer.children.length;
        for (let i = 0; i < n; i++) {
            const card: Card = this.itemsContainer.children[i] as Card;
            const wholeWidth = 0.8 * Math.min(this.handWidth, card.width * n) - card.width;
            card.desiredPosition.x = i / Math.max(1, n - 1) * wholeWidth;
            this.itemsContainer.x = this.handWidth / 2 - wholeWidth / 2;
            if (gm.dragInfo.isDragging === false && gm.hoverTarget === card) {
                card.desiredPosition.y = this.handHeight / 2 - 10;
            } else {
                card.desiredPosition.y = this.handHeight / 2;
            }
            if (this.hidden && card.currentGraphics.texture !== card.back) {
                card.hide()
            }
            card.Update(dt);
        }
    }


}