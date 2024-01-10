export enum Mode {
    topLeft,
    topCenter,
    topRight,
    rightCenter,
    bottomRight,
    bottomCenter,
    bottomLeft,
    leftCenter,
    drag,
}

export const dxFlags = {
    [Mode.topLeft]: 1,
    [Mode.topCenter]: 0,
    [Mode.topRight]: 0,
    [Mode.rightCenter]: 0,
    [Mode.bottomRight]: 0,
    [Mode.bottomCenter]: 0,
    [Mode.bottomLeft]: 1,
    [Mode.leftCenter]: 1,
    [Mode.drag]: 1,
};
export const dyFlags = {
    [Mode.topLeft]: 1,
    [Mode.topCenter]: 1,
    [Mode.topRight]: 1,
    [Mode.rightCenter]: 0,
    [Mode.bottomRight]: 0,
    [Mode.bottomCenter]: 0,
    [Mode.bottomLeft]: 0,
    [Mode.leftCenter]: 0,
    [Mode.drag]: 1,
};
export const dwFlags = {
    [Mode.topLeft]: -1,
    [Mode.topCenter]: 0,
    [Mode.topRight]: 1,
    [Mode.rightCenter]: 1,
    [Mode.bottomRight]: 1,
    [Mode.bottomCenter]: 0,
    [Mode.bottomLeft]: -1,
    [Mode.leftCenter]: -1,
    [Mode.drag]: 0,
};
export const dhFlags = {
    [Mode.topLeft]: -1,
    [Mode.topCenter]: -1,
    [Mode.topRight]: -1,
    [Mode.rightCenter]: 0,
    [Mode.bottomRight]: 1,
    [Mode.bottomCenter]: 1,
    [Mode.bottomLeft]: 1,
    [Mode.leftCenter]: 0,
    [Mode.drag]: 0,
};
