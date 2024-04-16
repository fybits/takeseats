import GameObject from "../GameObject";

export default interface IStackable {
    stack: (GameObject & IStackable) | null;
    getItems(): (GameObject & IStackable)[];
    onStack(item: IStackable): void;
    onTakeFromStack(item: GameObject & IStackable): GameObject | null;
}

export const isIStackable = (object: any): object is IStackable => {
    return (object as IStackable).onStack !== undefined;
}
