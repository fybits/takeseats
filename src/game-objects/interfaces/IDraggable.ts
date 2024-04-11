import GameManager from "../../GameManager";

export default interface IDraggable {
    onDragStart(): void;
    onDrag(): void;
    onDragEnd(): void;
}

export const isIDraggable = (object: any): object is IDraggable => {
    return (object as IDraggable).onDrag !== undefined;
}
