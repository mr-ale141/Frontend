import React from "react";
import css from "./Canvas.module.css";
import { useAppDispatch, useAppSelector } from "../../data/hooks";
import getRGBA from "../../utils/getRGBA";
import BlockContainer from "../BlockContainer/BlockContainer";
import commonCss from "../../common/Common.module.css";

function Canvas() {
    const canvasId = useAppSelector((state) => state.template.canvas.id);
    const blocks = useAppSelector((state) => state.template.blocks);
    const canvas = useAppSelector((state) => state.template.canvas);
    const selectedBlocks = useAppSelector((state) => state.selectedBlocks);
    const isSelected = selectedBlocks.includes(canvas.id);
    const { setSelectedBlock } = useAppDispatch();
    function onMouseDownHandler(event: React.MouseEvent) {
        const inputNewText = document.getElementById("new-text");
        const targetClassName = (event.target as HTMLElement).classList;
        const isResize = targetClassName.contains(commonCss.resize);
        if (!inputNewText && !isResize) {
            if (!event.isDefaultPrevented()) {
                setSelectedBlock(canvasId, event.ctrlKey);
                event.preventDefault();
            }
        }
    }
    const styleCanvas: React.CSSProperties = {
        ...canvas.size,
        backgroundColor: getRGBA(canvas.bgColor),
    };
    if (canvas.bgImage.data.length !== 0) {
        styleCanvas.backgroundImage = `url(${canvas.bgImage.data})`;
        styleCanvas.backgroundSize = "cover";
    }
    let classNameList = css.canvas;
    if (isSelected) {
        classNameList += " " + commonCss.border;
    }
    return (
        <div
            className={classNameList}
            style={styleCanvas}
            id={canvas.id}
            onMouseDown={onMouseDownHandler}
        >
            {blocks.map((block) => {
                return (
                    <BlockContainer
                        key={block.id}
                        block={block}
                        isSelected={selectedBlocks.includes(block.id)}
                    />
                );
            })}
        </div>
    );
}
export default Canvas;
