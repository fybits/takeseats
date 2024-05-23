import { Graphics, Sprite, generateUID, resetUids, uid } from "pixi.js";
import IStackable, { isIStackable } from "./interfaces/IStackable";
import IDraggable, { isIDraggable } from "./interfaces/IDraggable";
import GameObject from "./GameObject";
import { DropShadowFilter, OutlineFilter } from "pixi-filters";
import IFlipable, { isIFlipable } from "./interfaces/IFlipable";
import IRollable from "./interfaces/IRollable";
import Controls, { KeyState } from "../Controls";
import { SerializedObject } from "../GameManager";
import { GetTexture } from "../app";
import { Vector } from "../utils/Vector";

export default class Stack extends GameObject implements IDraggable, IStackable, IFlipable, IRollable {
    items: (GameObject & IStackable)[];
    mmask: Graphics;
    stack: (GameObject & IStackable) | null;
    isFlipped: boolean;
    canStack: boolean;

    constructor(items: (GameObject & IStackable)[]) {
        super();
        this.items = items;
        this.items.forEach((i) => {
            i.stack = this
        });
        this.eventMode = 'dynamic';
        this.addFilter('deck-details', new DropShadowFilter({ offset: { x: 0, y: this.items.length * 2 * gm.camera.scale.x }, color: 0xcccccc, blur: 0, alpha: 1 }));
        this.canStack = true;

        this.on('pointerdown', () => {
            this.onDragStart();
        });
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
            (deckFilter as DropShadowFilter)._offset.y = this.items.length * 2;
        }
    }

    onTakeFromStack(item: GameObject & IStackable, point: Vector): GameObject | null {
        const itemIndex = this.items.findIndex((i) => i.id === item.id);
        this.items.splice(itemIndex, 1);
        this.updateGraphics();
        item.stack = null;
        item.x = this.x;
        item.y = this.y - this.items.length * 2;
        item.desiredPosition.x = point.x;
        item.desiredPosition.y = point.y;
        item.angle = this.angle;
        gm.camera.addChild(item);
        if (this.items.length === 1) {
            const lastItem = this.items.pop()!;
            lastItem.stack = null;
            lastItem.x = this.x;
            lastItem.y = this.y;
            lastItem.desiredPosition.x = this.x;
            lastItem.desiredPosition.y = this.y;
            lastItem.angle = this.angle;
            gm.camera.addChild(lastItem);
        }
        if (this.items.length === 0) {
            this.destroy();
        }
        return item || null;
    }
    getItems(): (GameObject & IStackable)[] {
        return this.items;
    }

    onDragStart(): void {
        if (Controls.instance.keyboard.get('shift') === KeyState.HELD) {
            gm.onDragStart(this);
            return;
        }
        const top = this.items[this.items.length - 1];
        if (top) {
            const mouseWorldPos = gm.camera.screenToWorldPoint(Controls.instance.mouse.position);
            const item = this.onTakeFromStack(top, mouseWorldPos)
            if (item) {
                gm.room.send({
                    type: 'take-object-from-stack',
                    message: {
                        target: this.id,
                        object_from_stack: item?.id,
                        point: mouseWorldPos,
                    }
                })
            }
            if (isIDraggable(item)) {
                item.onDragStart();
            }
        }
    }
    onDrag(): void {
    }
    onDragEnd(): void {
    }
    onStack(item: (GameObject & IStackable)): void {
        const newItems = item.getItems()
        newItems.forEach(i => i.stack = this);
        this.items.push(...newItems);
        this.updateGraphics();
        item.removeFromParent();
        if (item instanceof Stack) {
            item.destroy();
        }
    }

    serialize(): SerializedObject {
        return {
            type: 'stack',
            id: this.id,
            x: this.x,
            y: this.y,
            angle: this.angle,
            items: this.items.map(i => i.id),
        }
    }

    toString(): string {
        return '' + this.items.length;
    }

    reloadTextures() {
        this.currentGraphics.texture = GetTexture(this.currentGraphics.texture.label!);
        this.currentGraphics.width = this.items[this.items.length - 1].width;
        this.currentGraphics.height = this.items[this.items.length - 1].height;
    }
}