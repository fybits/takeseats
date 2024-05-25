import { AnimatedSprite, Spritesheet, Text } from "pixi.js";
import IDraggable from "./interfaces/IDraggable";
import { SerializedObject } from "../GameManager";
import IRollable from "./interfaces/IRollable";
import Dice from "./Dice";
import { sound } from "@pixi/sound";

export default class TextDice extends Dice implements IDraggable, IRollable {
    currentGraphics: AnimatedSprite;
    spritesheet: Spritesheet;
    _value: number;
    text: Text;

    get value() {
        return this._value;
    }

    set value(value: number) {
        this._value = value;
        if (this.text)
            this.text.text = value;
        this.currentGraphics.gotoAndStop(0);
    }

    constructor(spritesheet: Spritesheet, size: number) {
        super(spritesheet, size);
        this.text = new Text();
        this.text.style.fill = 0xffffff;
        this.text.anchor = { x: 0.5, y: 0.5 };
        if (size === 4 || size === 20) {
            this.text.anchor.y = 0.3;
        }
        this.currentGraphics.animationSpeed = 0.5;
        this.value = 1;
        this.addChild(this.text);
    }

    roll(randSeeded: () => number): void {
        this.currentGraphics.play()
        this.text.text = '';
        sound.play('roll');
        setTimeout(() => {
            this.value = Math.floor(randSeeded() * this.size) + 1;
            this.angle = randSeeded() * 360;
        }, 500)
    }

    serialize(): SerializedObject {
        return {
            ...super.serialize(),
            type: 'text-dice',
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