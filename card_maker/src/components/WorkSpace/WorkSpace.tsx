import css from "./WorkSpace.module.css";
import Canvas from "../Canvas/Canvas";
import React from "react";
import { Template } from "../../type/type";

interface ITemplate {
    template: Template;
    selectedBlocks: Array<string>;
}
function WorkSpace({ template, selectedBlocks }: ITemplate) {
    return (
        <div className={css.workspace}>
            <Canvas
                size={template.canvas.size}
                selectedBlocks={selectedBlocks}
                textBlocks={template.textBlocks}
                artBlocks={template.artBlocks}
                imageBlocks={template.imageBlocks}
            />
        </div>
    );
}
export default WorkSpace;
