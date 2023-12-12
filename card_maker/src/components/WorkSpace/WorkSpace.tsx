import css from "./WorkSpace.module.css";
import React from "react";
import Canvas from "../Canvas/Canvas";
import { useAppDispatch } from "../../data/hooks";
import { setSelectedBlock } from "../../data/sessionReducer";

function WorkSpace() {
    const dispatch = useAppDispatch();
    function onMouseDownHandler(event: React.MouseEvent) {
        const inputNewText = document.getElementById("new-text");
        if (!inputNewText) {
            if (!event.isDefaultPrevented()) {
                dispatch(setSelectedBlock({ id: "", withCtrl: event.ctrlKey }));
                event.preventDefault();
            }
        }
    }
    return (
        <div className={css.workspace} onMouseDown={onMouseDownHandler}>
            <Canvas />
        </div>
    );
}
export default WorkSpace;
