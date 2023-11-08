import React from "react";
import changeSelected from "./changeSelected";
import { Position } from "../type/type";
import { ISession, setStartPosition } from "../data/sessionReducer";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";

function dragStartHandler(
    e: React.DragEvent,
    dispatch: ThunkDispatch<{ session: ISession }, undefined, AnyAction>,
) {
    changeSelected(e, dispatch);
    const startPosition: Position = {
        left: e.pageX,
        top: e.pageY,
    };
    dispatch(setStartPosition(startPosition));
}

export default dragStartHandler;
