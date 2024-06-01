export class Vector {
    public x: number;
    public y: number;


    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }

    rotate(angleRadians: number) {
        const newX = Math.cos(angleRadians) * this.x - Math.sin(angleRadians) * this.y;
        const newY = Math.sin(angleRadians) * this.x + Math.cos(angleRadians) * this.y;
        this.x = newX;
        this.y = newY;
        return this;
    }

    get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    get normalized(): Vector {
        const len = this.length;
        return new Vector(this.x / len, this.y / len);
    }
    static distance(a: Vector, b: Vector): number {
        return new Vector(b.x - a.x, b.y - a.y).length;
    }

    copy(): Vector {
        return new Vector(this.x, this.y);
    }
}
