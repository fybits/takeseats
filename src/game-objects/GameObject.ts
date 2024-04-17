import { Container, DestroyOptions, Filter, Sprite, generateUID, uid } from "pixi.js";
import uniqueID from "../utils/uniqueID";
import { SerializedObject } from "../GameManager";

export default class GameObject extends Container {
    id: number;
    currentGraphics: Sprite;
    filters: Filter[];
    filtersMap: Map<string, Filter>;

    constructor() {
        super();
        this.id = uniqueID();

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

    serialize(): SerializedObject {
        throw new Error('member serialize() is abstract and should be implemented in derrived class');
    }
}