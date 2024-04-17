
export let currentID = 0;

export default () => {
    return currentID++;
}

export const resetUIDs = (value: number) => {
    currentID = value;
}