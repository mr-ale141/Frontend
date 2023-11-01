import css from "./WorkSpace.module.css";
import React from "react";
import Canvas from "../Canvas/Canvas";

function WorkSpace() {
    return (
        <div className={css.workspace}>
            <Canvas />
        </div>
    );
}
export default WorkSpace;
