import { Container, Filter, Sprite } from "pixi.js";

export default class GameObject extends Container {
    currentGraphics: Sprite;
    filters: Filter[];
    filtersMap: Map<string, Filter>;

    constructor() {
        super();
        this.filters = [];
        this.filtersMap = new Map<string, Filter>();
    }

    addFilter(key: string, filter: Filter) {
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
}