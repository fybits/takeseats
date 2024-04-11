import { Container, Texture } from "pixi.js";
import { Vector } from "../utils/Vector";
import IUpdatable from "./interfaces/IUpdatable";


export default class Camera extends Container implements IUpdatable {
    private zoom: number;
    public desiredZoom: number;
    public desiredPosition: Vector;


    constructor() {
        super();
        this.desiredPosition = new Vector(0, 0);
        this.zoom = 1;
        this.desiredZoom = 1;
    }

    screenToWorldPoint(screenPosition: Vector) {
        return new Vector((this.pivot.x * this.zoom - this.position.x + screenPosition.x) / this.zoom, (this.pivot.y * this.zoom - this.position.y + screenPosition.y) / this.zoom);
    }

    update(dt: number) {
        const dZoom = this.desiredZoom - this.zoom;
        this.zoom = + this.zoom + dZoom * dt / 15
        this.scale.x = this.zoom;
        this.scale.y = this.zoom;
        const dPos = { x: this.desiredPosition.x - this.pivot.x, y: this.desiredPosition.y - this.pivot.y };
        this.pivot.x = this.pivot.x + dPos.x * dt / 15;
        this.pivot.y = this.pivot.y + dPos.y * dt / 15;
    }
}