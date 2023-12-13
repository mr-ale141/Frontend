import { Position } from "../type/type";
import { ISession, setNewPosition } from "../data/sessionReducer";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { StateWithHistory } from "redux-undo";
import { Dispatch, SetStateAction } from "react";

type RegisterDndItemFn = (arg0: React.MouseEvent) => void;

type useDndFn = (
    arg0: Dispatch<SetStateAction<Position>>,
    arg1: ThunkDispatch<
        { session: StateWithHistory<ISession> },
        undefined,
        AnyAction
    >,
) => RegisterDndItemFn;

const useDnd: useDndFn = (setOffset, dispatch) => {
    const registerDndItem: RegisterDndItemFn = (
        mouseDownEvent: React.MouseEvent,
    ) => {
        let newOffset: Position;
        const onMouseMove = (dragEvent: MouseEvent) => {
            newOffset = {
                top: dragEvent.clientY - mouseDownEvent.clientY,
                left: dragEvent.clientX - mouseDownEvent.clientX,
            };
            setOffset(newOffset);
        };
        const onMouseDrop = () => {
            if (newOffset) {
                dispatch(setNewPosition(newOffset));
                setOffset({ top: 0, left: 0 });
            }
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseup", onMouseDrop);
        };
        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseDrop);
    };
    return registerDndItem;
};
export { useDnd };
