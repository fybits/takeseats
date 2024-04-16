import { Graphics, Sprite, Texture } from "pixi.js";
import IDraggable from "./interfaces/IDraggable";
import { OutlineFilter } from "pixi-filters";
import IStackable, { isIStackable } from "./interfaces/IStackable";
import Stack from "./Stack";
import GameObject from "./GameObject";
import IFlipable from "./interfaces/IFlipable";

export default class Card extends GameObject implements IDraggable, IStackable, IFlipable {
    face: Texture;
    back: Texture;
    currentGraphics: Sprite;
    stack: (GameObject & IStackable) | null;

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
        console.log(this.id)
    }
    onTakeFromStack(): GameObject | null {
        throw new Error("Method not implemented.");
    }

    flip(): void {
        if (this.currentGraphics.texture === this.face) {
            this.currentGraphics.texture = this.back;
        } else {
            this.currentGraphics.texture = this.face;
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
}