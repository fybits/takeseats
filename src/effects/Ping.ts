import { Graphics, Sprite, Texture } from "pixi.js";
import { Vector } from "../utils/Vector";

export default class Ping extends Sprite {

    constructor(texture: Texture, x: number, y: number, durationMS: number = 1000, silent = false) {
        super(texture);
        this.x = x;
        this.y = y;
        this.zIndex = 1000;
        this.width = 40;
        this.height = 40;
        this.anchor.x = 0.5;
        this.anchor.y = 0.5;
        if (!silent) {
            gm.room.send({
                type: 'ping-point',
                message: {
                    position: new Vector(this.x, this.y),
                    texture: texture.label!,
                    duration: durationMS,
                }
            })
        }
        setTimeout(() => this.destroy(), durationMS);
    }

}