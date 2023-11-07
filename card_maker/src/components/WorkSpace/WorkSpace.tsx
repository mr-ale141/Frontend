import css from "./WorkSpace.module.css";
import React from "react";
import Canvas from "../Canvas/Canvas";
import { useAppDispatch } from "../../data/hooks";
import { setSelectedBlock } from "../../data/sessionReducer";

function WorkSpace() {
    const dispatch = useAppDispatch();
    function changeSelected(event: React.MouseEvent) {
        const targetElement = event.target as HTMLElement;
        const targetTagName = targetElement.tagName;
        let parentDiv = targetElement;
        while (parentDiv.tagName !== "DIV")
            if (parentDiv.parentElement) parentDiv = parentDiv.parentElement;
        let id: string;
        parentDiv.id === "" ? (id = "canvas") : (id = parentDiv.id);
        const withCtrl = event.ctrlKey;
        dispatch(setSelectedBlock({ id, withCtrl, targetTagName }));
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
