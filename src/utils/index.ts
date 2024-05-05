
export const sortedClamp = (value: number, a: number, b: number): number => {
    if (a > b) {
        return Math.min(Math.max(value, b), a)
    }
    return Math.min(Math.max(value, a), b)
};


export const colorToHexString = (dColor) => {
    return '#' + ("000000" + dColor.toString(16)).slice(-6);
}