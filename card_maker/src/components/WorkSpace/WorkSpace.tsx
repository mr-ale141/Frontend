import css from "./WorkSpace.module.css";
import Canvas from "../Canvas/Canvas";
import React from "react";
import { Template } from "../../type/type";

interface ITemplate {
    template: Template;
}
function WorkSpace({ template }: ITemplate) {
    const canvasWidth = template.canvas.size.width;
    const canvasHeight = template.canvas.size.height;
    const textBlocks = template.textBlocks;
    const artBlocks = template.artBlocks;
    const imageBlocks = template.imageBlocks;
    return (
        <div className={css.workspace}>
            <Canvas
                canvasWidth={canvasWidth}
                canvasHeight={canvasHeight}
                textBlocks={textBlocks}
                artBlocks={artBlocks}
                imageBlocks={imageBlocks}
            />
        </div>
    );
}
export default WorkSpace;
