import { Container, Filter, Sprite } from "pixi.js";
import uniqueID from "../utils/uniqueID";
import { SerializedObject } from "../GameManager";
import { Vector } from "../utils/Vector";
import IUpdatable from "./interfaces/IUpdatable";
import { DropShadowFilter, OutlineFilter } from "pixi-filters";

export default abstract class GameObject extends Container implements IUpdatable {
    id: number;
    currentGraphics: Sprite;
    filters: Filter[];
    filtersMap: Map<string, Filter>;
    desiredPosition: Vector;
    baseZindex: number;
    force: Vector;
    friction: number;
    locked: boolean;

    constructor() {
        super();
        this.id = uniqueID();
        this.desiredPosition = new Vector(this.x, this.y);
        this.baseZindex = 0;
        this.force = new Vector();
        this.friction = 1;
        this.locked = false;

        this.filters = [];
        this.filtersMap = new Map<string, Filter>();
        gm.gameObjects.set(this.id, this);
        this.on('destroyed', () => {
            gm.gameObjects.delete(this.id);
        })

        this.on('pointerover', () => {
            if (!this.locked) {
                this.addFilter('outline', new OutlineFilter({ thickness: 5, color: 'yellow' }));
                this.cursor = "grab";
            }
            if (gm.hoverTarget && !gm.hoverTarget.destroyed && gm.hoverTarget !== this && !gm.targets.includes(gm.hoverTarget)) {
                gm.hoverTarget.removeFilter('outline');
            }
            gm.hoverTarget = this;
        });
        this.on('pointerout', () => {
            if (!gm.targets.includes(this)) {
                this.removeFilter('outline');
            }
            gm.hoverTarget = null;
        });
    }



    addFilter(key: string, filter: Filter) {
        filter.antialias = 'on';
        if (!this.filtersMap.has(key)) {
            this.filtersMap.set(key, filter)
            this.filters = [...this.filters, filter];

            if (filter instanceof DropShadowFilter) {
                filter._offset = new Vector(filter.offsetX, filter.offsetY);;
            }
        }
    }

    removeFilter(key: string) {
        const filter = this.filtersMap.get(key);
        this.filters = [...this.filters.filter((f) => f !== filter)];
        this.filtersMap.delete(key);
    }

    Update(dt: number) {
        this.force.x -= (this.force.x * this.friction) * dt;
        this.force.y -= (this.force.y * this.friction) * dt;
        this.desiredPosition.x = this.desiredPosition.x + this.force.x * dt * 2;
        this.desiredPosition.y = this.desiredPosition.y + this.force.y * dt * 2;
        const dx = this.desiredPosition.x - this.x;
        const dy = this.desiredPosition.y - this.y;
        this.x += dx * dt / 2;
        this.y += dy * dt / 2;
        this.filters.forEach((filter) => {
            if (filter instanceof DropShadowFilter) {
                filter.offsetX = filter._offset.x * gm.camera.scale.x;
                filter.offsetY = filter._offset.y * gm.camera.scale.y;
            }
        })
    }

    toString(): string {
        return '';
    }

    serialize(): SerializedObject {
        return {
            type: 'object',
            id: this.id,
            x: this.x,
            y: this.y,
            locked: this.locked,
            angle: this.angle,
        }
    }

    abstract reloadTextures(): void;
}