export default interface IStackable {
    onStack(item: IStackable): void;
}

export const isIStackable = (object: any): object is IStackable => {
    return (object as IStackable).onStack !== undefined;
}
