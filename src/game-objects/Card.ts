import { Graphics, Sprite, Texture } from "pixi.js";
import IDraggable from "./interfaces/IDraggable";
import { OutlineFilter } from "pixi-filters";
import IStackable, { isIStackable } from "./interfaces/IStackable";
import Stack from "./Stack";
import GameObject from "./GameObject";
import IFlipable from "./interfaces/IFlipable";
import { SerializedObject } from "../GameManager";
import { GetTexture } from "../app";

export default class Card extends GameObject implements IDraggable, IStackable, IFlipable {
    face: Texture;
    back: Texture;
    currentGraphics: Sprite;
    stack: (GameObject & IStackable) | null;
    isFlipped: boolean;
    canStack: boolean;
    cardWidth: number;
    cardHeight: number;
    cardBorderRadius: number;

    constructor(face: Texture, back: Texture, width = 200, height = 280, borderRadius = 10) {
        super();
        this.face = face;
        this.back = back;
        this.stack = null;
        this.cardWidth = width;
        this.cardHeight = height;
        this.cardBorderRadius = borderRadius;
        if (this.cardWidth === -1 && this.cardHeight === -1) {
            this.currentGraphics = new Sprite({ texture: face, width: this.face.width, height: this.face.height });
        } else {
            this.currentGraphics = new Sprite({ texture: face, width: this.cardWidth, height: this.cardHeight });
        }
        this.currentGraphics.anchor.x = 0.5;
        this.currentGraphics.anchor.y = 0.5;
        this.canStack = true;
        const mask = new Graphics().roundRect(-this.currentGraphics.width / 2, -this.currentGraphics.height / 2, this.currentGraphics.width, this.currentGraphics.height, this.cardBorderRadius).fill(0xfff);
        this.addChild(mask);
        this.currentGraphics.mask = mask;
        this.addChild(this.currentGraphics);

        this.eventMode = 'static';
        this.on('pointerdown', this.onDragStart);
        this.on('pointerup', () => {
            if (this.canStack && gm.dragTarget && isIStackable(gm.dragTarget)) {
                this.onStack(gm.dragTarget);
                gm.room.send({
                    type: 'stack-object',
                    message: {
                        target: this.id,
                        object_to_stack: gm.dragTarget.id,
                    }
                })
            }
        });
        this.on('pointerover', () => {
            this.addFilter('outline', new OutlineFilter({ thickness: 5, color: 'yellow' }));
            this.cursor = "grab";
            gm.target = this;
        });
        this.on('pointerout', () => {
            this.removeFilter('outline');
            gm.target = null;
        });
    }
    onTakeFromStack(): GameObject | null {
        throw new Error("Method not implemented.");
    }

    hide(): void {
        if (this.currentGraphics.texture !== this.back) {
            this.currentGraphics.texture = this.back;
            if (this.cardWidth === -1 && this.cardHeight === -1) {
                this.currentGraphics.width = this.currentGraphics.texture.width;
                this.currentGraphics.height = this.currentGraphics.texture.height;
            } else {
                this.currentGraphics.width = this.cardWidth;
                this.currentGraphics.height = this.cardHeight;
            }
            const mask = this.currentGraphics.mask as Graphics;
            mask.clear().roundRect(-this.currentGraphics.width / 2, -this.currentGraphics.height / 2, this.currentGraphics.width, this.currentGraphics.height, this.cardBorderRadius).fill(0xfff);;
        }
    }

    show(): void {
        if (!this.isFlipped) {
            this.currentGraphics.texture = this.face;

            if (this.cardWidth === -1 && this.cardHeight === -1) {
                this.currentGraphics.width = this.currentGraphics.texture.width;
                this.currentGraphics.height = this.currentGraphics.texture.height;
            } else {
                this.currentGraphics.width = this.cardWidth;
                this.currentGraphics.height = this.cardHeight;
            }
            const mask = this.currentGraphics.mask as Graphics;
            mask.clear().roundRect(-this.currentGraphics.width / 2, -this.currentGraphics.height / 2, this.currentGraphics.width, this.currentGraphics.height, this.cardBorderRadius).fill(0xfff);;
        }
    }

    flip(): void {
        if (this.isFlipped) {
            this.currentGraphics.texture = this.face;
            this.isFlipped = false;
        } else {
            this.currentGraphics.texture = this.back;
            this.isFlipped = true;
        }
        if (this.cardWidth === -1 && this.cardHeight === -1) {
            this.currentGraphics.width = this.currentGraphics.texture.width;
            this.currentGraphics.height = this.currentGraphics.texture.height;
        } else {
            this.currentGraphics.width = this.cardWidth;
            this.currentGraphics.height = this.cardHeight;
        }
        const mask = this.currentGraphics.mask as Graphics;
        mask.clear().roundRect(-this.currentGraphics.width / 2, -this.currentGraphics.height / 2, this.currentGraphics.width, this.currentGraphics.height, this.cardBorderRadius).fill(0xfff);;
    }

    getItems(): (GameObject & IStackable)[] {
        return [this];
    }

    onStack(item: GameObject & IStackable): void {
        const stack = new Stack([this, ...item.getItems()])
        const parent = this.parent;
        this.removeFromParent();
        item.removeFromParent();
        if (item instanceof Stack) {
            item.destroy();
        }
        parent.addChild(stack);
        stack.x = this.x;
        stack.y = this.y;
        stack.desiredPosition.x = this.x;
        stack.desiredPosition.y = this.y;
        stack.angle = this.angle;
    }

    onDragStart(): void {
        gm.onDragStart(this);
    }

    onDrag(): void {
    }

    onDragEnd(): void {
    }

    serialize(): SerializedObject {
        return {
            type: 'card',
            id: this.id,
            face: this.face.label!,
            back: this.back.label!,
            isFlipped: this.isFlipped,
            x: this.x,
            y: this.y,
            angle: this.angle,
            inStack: this.stack !== null,
            width: this.cardWidth,
            height: this.cardHeight,
        }
    }

    reloadTextures() {
        this.face = GetTexture(this.face.label!);
        this.back = GetTexture(this.back.label!);
        this.currentGraphics.texture = GetTexture(this.currentGraphics.texture.label!);
        if (this.cardWidth === -1) {
            this.currentGraphics.width = this.currentGraphics.texture.width;
        } else {
            this.currentGraphics.width = this.cardWidth;
        }
        if (this.cardHeight === -1) {
            this.currentGraphics.height = this.currentGraphics.texture.height;
        } else {
            this.currentGraphics.height = this.cardHeight;
        }
    }
}