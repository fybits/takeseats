export default interface IFlipable {
    flip(): void;
}

export const isIFlipable = (object: any): object is IFlipable => {
    return (object as IFlipable).flip !== undefined;
}
