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

    get value() {
        return this._value;
    }

    set value(value: number) {
        this._value = value;
        this.currentGraphics.texture = Object.values(this.spritesheet.textures)[value];
    }

    constructor(spritesheet: Spritesheet) {
        super();
        this.eventMode = 'static';
        this.on('pointerdown', this.onDragStart);
        this.currentGraphics = new AnimatedSprite(spritesheet.animations['roll']);
        this.spritesheet = spritesheet;
        this.value = 0;
        this.friction = 0.05;
        this.currentGraphics.animationSpeed = 0.16;
        this.currentGraphics.anchor.x = 0.5;
        this.currentGraphics.anchor.y = 0.5;
        this.baseZindex = 10;
        this.addChild(this.currentGraphics)

        this.on('pointerover', () => {
            this.addFilter('outline', new OutlineFilter({ thickness: 5, color: 'yellow' }));
            this.cursor = "grab";
            gm.target = this;
        });
        this.on('pointerout', () => {
            this.removeFilter('outline');
            gm.target = null;
        });
        this.addFilter('dice-shadow', new DropShadowFilter({ blur: 2, offset: { x: 4, y: 20 }, pixelSize: { x: 1, y: 1 } }));
    }

    roll(randSeeded: () => number): void {
        this.currentGraphics.play()
        setTimeout(() => {
            this.currentGraphics.stop();
            this.value = Math.floor(randSeeded() * 20);
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
            type: 'dice',
            id: this.id,
            x: this.x,
            y: this.y,
            angle: this.angle,
            size: 20,
            value: this.value,
        }
    }

    reloadTextures() {

    }
}