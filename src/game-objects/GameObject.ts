import { Container, DestroyOptions, Filter, Sprite, generateUID, uid } from "pixi.js";
import uniqueID from "../utils/uniqueID";
import { SerializedObject } from "../GameManager";
import { Vector } from "../utils/Vector";
import IUpdatable from "./interfaces/IUpdatable";

export default abstract class GameObject extends Container implements IUpdatable {
    id: number;
    currentGraphics: Sprite;
    filters: Filter[];
    filtersMap: Map<string, Filter>;
    desiredPosition: Vector;
    baseZindex: number;

    constructor() {
        super();
        this.id = uniqueID();
        this.desiredPosition = new Vector(this.x, this.y);
        this.baseZindex = 0;

        this.filters = [];
        this.filtersMap = new Map<string, Filter>();
        gm.gameObjects.set(this.id, this);
        this.on('destroyed', () => {
            gm.gameObjects.delete(this.id);
        })
    }



    addFilter(key: string, filter: Filter) {
        filter.antialias = 'on';
        if (!this.filtersMap.has(key)) {
            this.filtersMap.set(key, filter)
            this.filters = [...this.filters, filter];
        }
    }

    removeFilter(key: string) {
        const filter = this.filtersMap.get(key);
        this.filters = [...this.filters.filter((f) => f !== filter)];
        this.filtersMap.delete(key);
    }

    Update(dt: number) {
        const dx = this.desiredPosition.x - this.x;
        const dy = this.desiredPosition.y - this.y;
        this.x += dx * dt / 2;
        this.y += dy * dt / 2;
    }

    abstract serialize(): SerializedObject;

    abstract reloadTextures(): void;
}