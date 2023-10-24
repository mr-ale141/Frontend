import css from "./WorkSpace.module.css";
import Canvas from "../Canvas/Canvas";
import React from "react";
import { Template } from "../../type/type";

interface ITemplate {
    template: Template;
}
function WorkSpace({ template }: ITemplate) {
    const size = { ...template.canvas.size };
    return (
        <div className={css.workspace}>
            <Canvas
                size={size}
                textBlocks={template.textBlocks}
                artBlocks={template.artBlocks}
                imageBlocks={template.imageBlocks}
            />
        </div>
    );
}
export default WorkSpace;
