import { Container, Sprite } from "pixi.js";

export default class GameObject extends Container {
    currentGraphics: Sprite;
    constructor() {
        super();
    }
}