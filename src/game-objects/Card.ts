import { Graphics, Sprite, Texture } from "pixi.js";
import IDraggable from "./interfaces/IDraggable";
import { OutlineFilter } from "pixi-filters";
import IStackable, { isIStackable } from "./interfaces/IStackable";
import Stack from "./Stack";
import GameObject from "./GameObject";
import IFlipable from "./interfaces/IFlipable";
import { SerializedObject } from "../GameManager";

export default class Card extends GameObject implements IDraggable, IStackable, IFlipable {
    face: Texture;
    back: Texture;
    currentGraphics: Sprite;
    stack: (GameObject & IStackable) | null;
    isFlipped: boolean;

    constructor(face: Texture, back: Texture) {
        super();
        this.face = face;
        this.back = back;
        this.stack = null;
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
            if (gm.dragTarget && isIStackable(gm.dragTarget)) {
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

    flip(): void {
        if (this.currentGraphics.texture === this.face) {
            this.currentGraphics.texture = this.back;
            this.isFlipped = true;
        } else {
            this.currentGraphics.texture = this.face;
            this.isFlipped = false;
        }
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
        }
    }
}