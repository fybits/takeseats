export default interface IRollable {
    roll(): void;
}

export const isIRollable = (object: any): object is IRollable => {
    return (object as IRollable).roll !== undefined;
}
