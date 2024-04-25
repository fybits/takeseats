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
        const screenPos = new Vector(-this.position.x + screenPosition.x, -this.position.y + screenPosition.y);
        const rotatedScreenPos = screenPos.rotate(-this.rotation);
        const pos = new Vector((this.pivot.x * this.zoom + rotatedScreenPos.x) / this.zoom, (this.pivot.y * this.zoom + rotatedScreenPos.y) / this.zoom);
        return pos;
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