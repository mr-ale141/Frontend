import css from "./WorkSpace.module.css";
import React from "react";
import Canvas from "../Canvas/Canvas";
import { useAppDispatch } from "../../data/hooks";
import { setSelectedBlock } from "../../data/sessionReducer";

function WorkSpace() {
    const dispatch = useAppDispatch();
    function onMouseDownHandler(e: React.MouseEvent) {
        if (!e.isDefaultPrevented()) {
            dispatch(setSelectedBlock({ id: "", withCtrl: e.ctrlKey }));
        }
        e.preventDefault();
    }
    return (
        <div className={css.workspace} onMouseDown={onMouseDownHandler}>
            <Canvas />
        </div>
    );
}
export default WorkSpace;
