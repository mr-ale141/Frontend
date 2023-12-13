import React, { Dispatch, SetStateAction } from "react";
import {
    ArtBlockType,
    ImageBlockType,
    Position,
    Size,
    TextBlockType,
} from "../type/type";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { StateWithHistory } from "redux-undo";
import { ISession, setNewPosition, setNewSize } from "../data/sessionReducer";

type RegisterResizeItemFn = (arg0: React.MouseEvent) => void;

type useResizeFn = (
    arg0: ArtBlockType | TextBlockType | ImageBlockType,
    arg1: Dispatch<SetStateAction<Position>>,
    arg2: Dispatch<SetStateAction<Size>>,
    arg3: ThunkDispatch<
        { session: StateWithHistory<ISession> },
        undefined,
        AnyAction
    >,
) => RegisterResizeItemFn;

enum mode {
    topLeft,
    topCenter,
    topRight,
    rightCenter,
    bottomRight,
    bottomCenter,
    bottomLeft,
    leftCenter,
}

const useResize: useResizeFn = (
    block,
    setOffsetPosition,
    setOffsetSize,
    dispatch,
) => {
    const registerResizeItem: RegisterResizeItemFn = (
        mouseDownEvent: React.MouseEvent,
    ) => {
        let currentMode: mode;
        const targetClassName = (mouseDownEvent.target as HTMLElement)
            .className;
        if (targetClassName.includes("top-left")) {
            currentMode = mode.topLeft;
        } else if (targetClassName.includes("top-center")) {
            currentMode = mode.topCenter;
        } else if (targetClassName.includes("top-right")) {
            currentMode = mode.topRight;
        } else if (targetClassName.includes("right-center")) {
            currentMode = mode.rightCenter;
        } else if (targetClassName.includes("bottom-right")) {
            currentMode = mode.bottomRight;
        } else if (targetClassName.includes("bottom-center")) {
            currentMode = mode.bottomCenter;
        } else if (targetClassName.includes("bottom-left")) {
            currentMode = mode.bottomLeft;
        } else if (targetClassName.includes("left-center")) {
            currentMode = mode.leftCenter;
        }
        const dxFlags = {
            [mode.topLeft]: 1,
            [mode.topCenter]: 0,
            [mode.topRight]: 0,
            [mode.rightCenter]: 0,
            [mode.bottomRight]: 0,
            [mode.bottomCenter]: 0,
            [mode.bottomLeft]: 1,
            [mode.leftCenter]: 1,
        };
        const dyFlags = {
            [mode.topLeft]: 1,
            [mode.topCenter]: 1,
            [mode.topRight]: 1,
            [mode.rightCenter]: 0,
            [mode.bottomRight]: 0,
            [mode.bottomCenter]: 0,
            [mode.bottomLeft]: 0,
            [mode.leftCenter]: 0,
        };
        const dwFlags = {
            [mode.topLeft]: -1,
            [mode.topCenter]: 0,
            [mode.topRight]: 1,
            [mode.rightCenter]: 1,
            [mode.bottomRight]: 1,
            [mode.bottomCenter]: 0,
            [mode.bottomLeft]: -1,
            [mode.leftCenter]: -1,
        };
        const dhFlags = {
            [mode.topLeft]: -1,
            [mode.topCenter]: -1,
            [mode.topRight]: -1,
            [mode.rightCenter]: 0,
            [mode.bottomRight]: 1,
            [mode.bottomCenter]: 1,
            [mode.bottomLeft]: 1,
            [mode.leftCenter]: 0,
        };
        let offsetPosition: Position;
        let offsetSize: Size;
        const onMouseMove = (dragEvent: MouseEvent) => {
            const offsetMoveX = dragEvent.clientX - mouseDownEvent.clientX;
            const offsetMoveY = dragEvent.clientY - mouseDownEvent.clientY;
            offsetPosition = {
                top: dyFlags[currentMode] * offsetMoveY,
                left: dxFlags[currentMode] * offsetMoveX,
            };
            offsetSize = {
                width: dwFlags[currentMode] * offsetMoveX,
                height: dhFlags[currentMode] * offsetMoveY,
            };
            setOffsetPosition(offsetPosition);
            setOffsetSize(offsetSize);
        };
        const onMouseDrop = () => {
            if (offsetPosition) {
                dispatch(setNewPosition(offsetPosition));
                setOffsetPosition({ top: 0, left: 0 });
            }
            if (offsetSize) {
                dispatch(setNewSize(offsetSize));
                setOffsetSize({ width: 0, height: 0 });
            }
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseup", onMouseDrop);
        };
        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseDrop);
    };
    return registerResizeItem;
};
export { useResize };

// offsetMove = zeroOffset
// dX = zeroDX
// dY = zeroDY
// dW = zeroDW
// dH = zeroDH
// select_item_drop
//     top-left
//         update dX, dY
//         update dW, dH
//     top-center
//         update dY
//         update dH
//     top-right
//         update dY
//         update dW, dH
//     right-center
//         update dW
//     bottom-right
//         update dW, dH
//     bottom-center
//         update dH
//     bottom-left
//         update dX
//         update dW, dH
//     left-center
//         update dX
//         update dW
// dispatch newOffset
// dispatch newSize
// set zeroOffset
