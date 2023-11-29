import { Position } from "../type/type";
import { Dispatch, RefObject, SetStateAction } from "react";
import { ISession, setNewPosition } from "../data/sessionReducer";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { StateWithHistory } from "redux-undo";

type RegisterDndItemFn = (arg0: MouseEvent) => void;

type useDndFn = (
    arg1: RefObject<HTMLDivElement>,
    arg2: Position,
    arg3: Dispatch<SetStateAction<Position>>,
    arg4: ThunkDispatch<
        { session: StateWithHistory<ISession> },
        undefined,
        AnyAction
    >,
) => RegisterDndItemFn;

const useDnd: useDndFn = (elementRef, offset, setOffset, dispatch) => {
    const registerDndItem: RegisterDndItemFn = (mouseDownEvent) => {
        const onMouseMove = (dragEvent: MouseEvent) => {
            const newOffset = {
                top: dragEvent.clientY - mouseDownEvent.clientY,
                left: dragEvent.clientX - mouseDownEvent.clientX,
            };
            setOffset(newOffset);
        };
        const onMouseDrop = () => {
            console.log("offsetOnMouseDrop", offset);
            dispatch(setNewPosition({ top: offset.top, left: offset.left }));
            setOffset({ top: 0, left: 0 });
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseup", onMouseDrop);
        };
        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseDrop);
    };
    return registerDndItem;
};
export { useDnd };
