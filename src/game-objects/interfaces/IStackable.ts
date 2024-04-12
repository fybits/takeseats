import GameObject from "../GameObject";

export default interface IStackable {
    getItems(): (GameObject & IStackable)[];
    onStack(item: IStackable): void;
    onTakeFromStack(): GameObject | null;
}

export const isIStackable = (object: any): object is IStackable => {
    return (object as IStackable).onStack !== undefined;
}
