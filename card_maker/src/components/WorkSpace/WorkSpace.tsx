import css from "./WorkSpace.module.css";
import React from "react";
import Canvas from "../Canvas/Canvas";
import { useAppDispatch } from "../../data/hooks";
import { setSelectedBlock } from "../../data/sessionReducer";

function WorkSpace() {
    const dispatch = useAppDispatch();
    function postSelected(event: React.MouseEvent) {
        let targetElement = event.target as HTMLElement;
        while (targetElement.tagName !== "DIV")
            if (targetElement.parentElement)
                targetElement = targetElement.parentElement;
        const withCtrl = event.ctrlKey;
        dispatch(setSelectedBlock({ id: targetElement.id, withCtrl }));
    }
    return (
        <div className={css.workspace} onClick={(event) => postSelected(event)}>
            <Canvas />
        </div>
    );
}
export default WorkSpace;
