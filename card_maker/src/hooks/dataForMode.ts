export enum mode {
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
    [mode.topLeft]: 1,
    [mode.topCenter]: 0,
    [mode.topRight]: 0,
    [mode.rightCenter]: 0,
    [mode.bottomRight]: 0,
    [mode.bottomCenter]: 0,
    [mode.bottomLeft]: 1,
    [mode.leftCenter]: 1,
    [mode.drag]: 1,
};
export const dyFlags = {
    [mode.topLeft]: 1,
    [mode.topCenter]: 1,
    [mode.topRight]: 1,
    [mode.rightCenter]: 0,
    [mode.bottomRight]: 0,
    [mode.bottomCenter]: 0,
    [mode.bottomLeft]: 0,
    [mode.leftCenter]: 0,
    [mode.drag]: 1,
};
export const dwFlags = {
    [mode.topLeft]: -1,
    [mode.topCenter]: 0,
    [mode.topRight]: 1,
    [mode.rightCenter]: 1,
    [mode.bottomRight]: 1,
    [mode.bottomCenter]: 0,
    [mode.bottomLeft]: -1,
    [mode.leftCenter]: -1,
    [mode.drag]: 0,
};
export const dhFlags = {
    [mode.topLeft]: -1,
    [mode.topCenter]: -1,
    [mode.topRight]: -1,
    [mode.rightCenter]: 0,
    [mode.bottomRight]: 1,
    [mode.bottomCenter]: 1,
    [mode.bottomLeft]: 1,
    [mode.leftCenter]: 0,
    [mode.drag]: 0,
};
