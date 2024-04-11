import { Container, Graphics, NineSliceGeometry, NineSliceSprite, RoundedRectangle, Sprite, Texture } from "pixi.js";
import IDraggable from "./interfaces/IDraggable";
import { DropShadowFilter, OutlineFilter } from "pixi-filters";
import GameManager from "../GameManager";
import IStackable, { isIStackable } from "./interfaces/IStackable";
import Stack from "./Stack";
import GameObject from "./GameObject";
import IFlipable from "./interfaces/IFlipable";

export default class Card extends GameObject implements IDraggable, IStackable, IFlipable {
    face: Texture;
    back: Texture;
    currentGraphics: Sprite;

    constructor(face: Texture, back: Texture, label: string) {
        super();
        this.face = face;
        this.back = back;
        this.label = label;
        this.currentGraphics = new Sprite({ texture: face, width: 200, height: 280 });
        this.currentGraphics.anchor.x = 0.5;
        this.currentGraphics.anchor.y = 0.5;
        const mask = new Graphics().roundRect(-this.currentGraphics.width / 2, -this.currentGraphics.height / 2, this.currentGraphics.width, this.currentGraphics.height, 10).fill(0xfff);
        this.addChild(mask);
        this.currentGraphics.mask = mask;
        this.addChild(this.currentGraphics);

        this.eventMode = 'static';
        this.on('pointerdown', this.onDragStart);
        this.on('pointerup', () => {
            console.log('try stacking')
            if (gm.dragTarget && isIStackable(gm.dragTarget)) {
                this.onStack(gm.dragTarget);
            }
        });
        this.on('pointerover', () => {
            this.filters = new OutlineFilter({ thickness: 5, color: 'yellow' })
            this.cursor = "grab";
            gm.target = this;
        });
        this.on('pointerout', () => {
            this.filters = [];
            gm.target = null;
        });

    }

    flip(): void {
        console.log('flip')
        if (this.currentGraphics.texture === this.face) {
            this.currentGraphics.texture = this.back;
        } else {
            this.currentGraphics.texture = this.face;
        }
    }

    onStack(item: GameObject & IStackable): void {
        console.log('Stacking')
        const stack = new Stack([this, item])
        const parent = this.parent;
        this.removeFromParent();
        item.removeFromParent();
        parent.addChild(stack);
        stack.x = this.x;
        stack.y = this.y;
        stack.angle = this.angle;
    }

    onDragStart(): void {
        console.log(`Started dragging ${this.label}`);
        this.filters = [new DropShadowFilter({ blur: 2, offset: { x: 4, y: 20 }, pixelSize: { x: 1, y: 1 } })]
        gm.onDragStart(this);
    }

    onDrag(): void {
        console.log(`Dragging ${this.label}`);
    }

    onDragEnd(): void {
        console.log(`Stopped dragging ${this.label}`);
        this.filters = [];
    }
}