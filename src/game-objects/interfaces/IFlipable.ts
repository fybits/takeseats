export default interface IFlipable {
    isFlipped: boolean;
    flip(): void;
}

export const isIFlipable = (object: any): object is IFlipable => {
    return (object as IFlipable).flip !== undefined;
}
