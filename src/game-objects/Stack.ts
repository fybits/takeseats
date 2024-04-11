import { Graphics, Sprite } from "pixi.js";
import IStackable, { isIStackable } from "./interfaces/IStackable";
import IDraggable, { isIDraggable } from "./interfaces/IDraggable";
import GameObject from "./GameObject";
import { DropShadowFilter, OutlineFilter } from "pixi-filters";
import IFlipable, { isIFlipable } from "./interfaces/IFlipable";
import IRollable from "./interfaces/IRollable";

export default class Stack extends GameObject implements IDraggable, IStackable, IFlipable, IRollable {
    items: (GameObject & IStackable)[];
    mmask: Graphics;

    constructor(items: (GameObject & IStackable)[]) {
        super();
        this.items = items;
        this.eventMode = 'dynamic';
        this.addFilter('deck-details', new DropShadowFilter({ offset: { x: 0, y: this.items.length * 2 * gm.camera.scale.x }, color: 0xcccccc, blur: 0, alpha: 1 }));

        this.on('pointerdown', () => {
            this.onDragStart();
            gm.room.send({
                type: 'take-object-from-stack',
                message: {
                    target: this.uid,
                }
            })
        });
        this.on('pointerup', () => {
            if (gm.dragTarget && isIStackable(gm.dragTarget)) {
                this.onStack(gm.dragTarget);
                gm.room.send({
                    type: 'stack-object',
                    message: {
                        target: this.uid,
                        object_to_stack: gm.dragTarget.uid,
                    }
                })
            }
        });
        this.on('pointerover', () => {
            if ('length' in this.filters) {
                this.addFilter('outline', new OutlineFilter({ thickness: 5, color: 'yellow' }));
            }
            this.cursor = "grab"
            gm.target = this;

        });
        this.on('pointerout', () => {
            if ('length' in this.filters) {
                this.removeFilter('outline');
            }
            gm.target = null;
        });


        this.currentGraphics = new Sprite();
        this.currentGraphics.anchor.x = 0.5;
        this.currentGraphics.anchor.y = 0.5;
        this.addChild(this.currentGraphics);
        this.updateGraphics();
        this.mmask = new Graphics().roundRect(-this.currentGraphics.width / 2, -this.currentGraphics.height / 2, this.currentGraphics.width, this.currentGraphics.height, 10).fill(0xfff);
        this.addChild(this.mmask);
        this.currentGraphics.mask = this.mmask;
        this.updateGraphics();

    }

    roll(randSeeded: () => number): void {
        for (var i = this.items.length - 1; i > 0; i--) {
            var j = Math.floor(randSeeded() * (i + 1));
            var temp = this.items[i];
            this.items[i] = this.items[j];
            this.items[j] = temp;
        }
        this.updateGraphics();
    }

    flip(): void {
        this.items.forEach(i => { if (isIFlipable(i)) i.flip() });
        this.items.reverse();
        this.updateGraphics();
    }


    updateGraphics() {
        this.currentGraphics.texture = this.items[this.items.length - 1].currentGraphics.texture;
        this.currentGraphics.y = -this.items.length * 2;

        if (this.mmask) {
            this.mmask.y = -this.items.length * 2;
        }

        this.currentGraphics.width = this.items[this.items.length - 1].width;
        this.currentGraphics.height = this.items[this.items.length - 1].height;
        const deckFilter = this.filtersMap.get('deck-details');
        if (deckFilter) {
            (deckFilter as DropShadowFilter).offsetY = this.items.length * 2 * gm.camera.scale.x;
        }
    }

    onTakeFromStack(): GameObject | null {
        const top = this.items.pop();
        this.updateGraphics();

        if (top) {
            top.x = this.x;
            top.y = this.y;
            top.angle = this.angle;
            gm.camera.addChild(top);
        }
        if (this.items.length === 1) {
            const lastItem = this.items.pop()!;
            lastItem.x = this.x;
            lastItem.y = this.y;
            gm.camera.addChild(lastItem);
        }
        if (this.items.length === 0) {
            this.destroy();
        }
        return top || null;
    }

    onDragStart(): void {
        const item = this.onTakeFromStack()
        if (isIDraggable(item)) {
            item.onDragStart();
        }
    }
    onDrag(): void {
    }
    onDragEnd(): void {
    }
    onStack(item: (GameObject & IStackable)): void {
        this.items.push(item);
        this.updateGraphics();
        item.removeFromParent();
    }

}