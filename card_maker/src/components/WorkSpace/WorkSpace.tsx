import css from "./WorkSpace.module.css";
import React from "react";
import Canvas from "../Canvas/Canvas";
import changeSelected from "../../utils/changeSelected";
import { useAppDispatch } from "../../data/hooks";

function WorkSpace() {
    const dispatch = useAppDispatch();
    return (
        <div
            className={css.workspace}
            onClick={(event) => changeSelected(event, dispatch)}
        >
            <Canvas />
        </div>
    );
}
export default WorkSpace;
