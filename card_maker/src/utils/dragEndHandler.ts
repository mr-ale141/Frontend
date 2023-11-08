import React from "react";
import { Position } from "../type/type";
import { ISession, setEndPosition } from "../data/sessionReducer";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";

function dragEndHandler(
    e: React.DragEvent,
    dispatch: ThunkDispatch<{ session: ISession }, undefined, AnyAction>,
) {
    const endPosition: Position = {
        left: e.pageX,
        top: e.pageY,
    };
    dispatch(setEndPosition(endPosition));
}

export default dragEndHandler;
