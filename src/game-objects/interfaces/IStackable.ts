import { Vector } from "../../utils/Vector";
import GameObject from "../GameObject";
import Stack from "../Stack";

export default interface IStackable {
    canStack: boolean;
    stack: (GameObject & IStackable) | null;
    getItems(): (GameObject & IStackable)[];
    onStack(item: IStackable): Stack;
    onTakeFromStack(item: GameObject & IStackable, point: Vector): GameObject | null;
}

export const isIStackable = (object: any): object is IStackable => {
    return (object as IStackable).onStack !== undefined;
}
