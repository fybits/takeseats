import { Graphics, Sprite, Texture } from "pixi.js";
import { Vector } from "../utils/Vector";
import IUpdatable from "../game-objects/interfaces/IUpdatable";
import { sound } from "@pixi/sound";

export default class Ping extends Sprite implements IUpdatable {
    animCount: number = 0;

    constructor(texture: Texture, x: number, y: number, durationMS: number = 1500, tint: number = 0xffffff, silent = false) {
        super(texture);
        this.x = x;
        this.y = y;
        this.zIndex = 1000;
        this.width = 40;
        this.height = 40;
        this.anchor.x = 0.5;
        this.anchor.y = 1;
        this.tint = tint;

        this.scale.x = 0.08 / gm.camera.scale.x
        this.scale.y = 0.08 / gm.camera.scale.y;
        sound.play('ping');
        if (!silent) {
            gm.room.send({
                type: 'ping-point',
                message: {
                    position: new Vector(this.x, this.y),
                    texture: texture.label!,
                    tint: tint,
                    duration: durationMS,
                }
            })
        }
        setTimeout(() => this.destroy(), durationMS);
    }

    Update(dt: number): void {
        this.animCount += dt;
        const animShrink = (Math.sin(this.animCount / 10) + 1) / 2 + 0.5;

        this.scale.x = 0.08 / gm.camera.scale.x
        this.scale.y = 0.08 / gm.camera.scale.y * animShrink;
    }

}