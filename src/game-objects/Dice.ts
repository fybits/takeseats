import { AnimatedSprite, Spritesheet } from "pixi.js";
import IDraggable from "./interfaces/IDraggable";
import { DropShadowFilter, OutlineFilter } from "pixi-filters";
import GameObject from "./GameObject";
import { SerializedObject } from "../GameManager";
import IRollable from "./interfaces/IRollable";

export default class Dice extends GameObject implements IDraggable, IRollable {
    currentGraphics: AnimatedSprite;
    spritesheet: Spritesheet;
    _value: number;
    size: number;

    get value() {
        return this._value;
    }

    set value(value: number) {
        this._value = value;
        console.log('hit')
        this.currentGraphics.texture = Object.values(this.spritesheet.textures)[value - 1];
    }

    constructor(spritesheet: Spritesheet, size: number) {
        super();
        this.eventMode = 'static';
        this.on('pointerdown', this.onDragStart);
        this.currentGraphics = new AnimatedSprite(spritesheet.animations['roll']);
        this.spritesheet = spritesheet;
        this.value = 1;
        this.friction = 0.1;
        this.currentGraphics.animationSpeed = 0.16;
        this.currentGraphics.anchor = { x: 0.5, y: 0.5 };
        this.baseZindex = 10;
        this.addChild(this.currentGraphics)
        this.size = size;

        this.on('pointerover', () => {
            if (!this.locked) {
                this.addFilter('hover-outline', new OutlineFilter({ thickness: 5, color: 'yellow' }));
                this.cursor = "grab";
            }
            this.cursor = "grab";
            gm.hoverTarget = this;
        });
        this.on('pointerout', () => {
            this.removeFilter('hover-outline');
            gm.hoverTarget = null;
        });
        this.addFilter('dice-shadow', new DropShadowFilter({ blur: 2, offset: { x: 4, y: 20 }, pixelSize: { x: 1, y: 1 } }));
    }

    roll(randSeeded: () => number): void {
        this.currentGraphics.play()
        setTimeout(() => {
            this.currentGraphics.stop();
            this.value = Math.floor(randSeeded() * this.size) + 1;
            this.angle = randSeeded() * 360;
        }, 500)
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
            ...super.serialize(),
            type: 'dice',
            size: this.size,
            value: this.value,
        }
    }

    toString(): string {
        return '' + this.value;
    }

    reloadTextures() {

    }
}