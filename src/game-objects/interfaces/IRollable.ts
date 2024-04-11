export default interface IRollable {
    roll(randSeeded: () => number): void;
}

export const isIRollable = (object: any): object is IRollable => {
    return (object as IRollable).roll !== undefined;
}
