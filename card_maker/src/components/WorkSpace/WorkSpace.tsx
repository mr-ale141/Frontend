import css from "./WorkSpace.module.css";
import React from "react";
import Canvas from "../Canvas/Canvas";
import { useAppDispatch } from "../../data/hooks";
import { setSelectedBlock } from "../../data/sessionReducer";

function WorkSpace() {
    const dispatch = useAppDispatch();
    function changeSelected(event: React.MouseEvent) {
        let targetElement = event.target as HTMLElement;
        while (targetElement.tagName !== "DIV")
            if (targetElement.parentElement)
                targetElement = targetElement.parentElement;
        let id: string = "canvas";
        if (targetElement.id) id = targetElement.id;
        const withCtrl = event.ctrlKey;
        dispatch(setSelectedBlock({ id, withCtrl }));
    }
    return (
        <div
            className={css.workspace}
            onClick={(event) => changeSelected(event)}
        >
            <Canvas />
        </div>
    );
}
export default WorkSpace;
