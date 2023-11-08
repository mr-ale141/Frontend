import React from "react";
import { ISession, setSelectedBlock } from "../data/sessionReducer";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";

function changeSelected(
    event: React.MouseEvent,
    dispatch: ThunkDispatch<{ session: ISession }, undefined, AnyAction>,
) {
    let targetElement = event.target as HTMLElement;
    while (targetElement.tagName !== "DIV")
        if (targetElement.parentElement)
            targetElement = targetElement.parentElement;
    let id: string = "canvas";
    if (targetElement.id) id = targetElement.id;
    const withCtrl = event.ctrlKey;
    dispatch(setSelectedBlock({ id, withCtrl }));
}

export default changeSelected;
