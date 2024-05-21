export default interface IUpdatable {
    Update(dt: number): void;
}

export const isIUpdatable = (object: any): object is IUpdatable => {
    return (object as IUpdatable).Update !== undefined;
}
