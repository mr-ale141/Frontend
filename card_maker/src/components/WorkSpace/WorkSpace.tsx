import css from "./WorkSpace.module.css";
import React from "react";
import Canvas from "../Canvas/Canvas";
import { useAppDispatch } from "../../data/hooks";

function WorkSpace() {
    const { setSelectedBlock } = useAppDispatch();
    function onMouseDownHandler(event: React.MouseEvent) {
        const inputNewText = document.getElementById("new-text");
        if (!inputNewText) {
            if (!event.isDefaultPrevented()) {
                setSelectedBlock("", event.ctrlKey);
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
