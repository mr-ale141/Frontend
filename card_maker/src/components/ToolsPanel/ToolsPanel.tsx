import React from "react";
import css from "./ToolsPanel.module.css";
import { TypeBlock } from "../../data/type/type";
import { useAppSelector } from "../../data/hooks";
import ChangeColor from "./tools/ChangeColor/ChangeColor";
import ChangeImage from "./tools/ChangeImage/ChangeImage";
import ChangeAlign from "./tools/ChangeText/ChangeAlign";
import ChangeArt from "./tools/ChangeArt/ChangeArt";
import ChangeStyle from "./tools/ChangeText/ChangeStyle";
import ChangeCanvasSize from "./tools/ChangeCanvasSize/ChangeCanvasSize";
import ChangeTemplate from "./tools/ChangeTemplate/ChangeTemplate";
import ChangeRotateScale from "./tools/ChangeRotateScale/ChangeRotateScale";
import getNeedRender from "./tools/UtilsToolsPanel/getNeedRender";
import getCurrentParameters from "./tools/UtilsToolsPanel/getCurrentParameters";

function ToolsPanel() {
    const canvasId = useAppSelector(
        (state) => state.present.template.canvas.id,
    );
    const canvas = useAppSelector((state) => state.present.template.canvas);
    const blocks = useAppSelector((state) => state.present.template.blocks);
    const selectedBlocks = useAppSelector(
        (state) => state.present.selectedBlocks,
    );
    const activeTypes: Array<TypeBlock> = [];
    selectedBlocks.forEach((id) => {
        if (id === canvasId) {
            activeTypes.push(TypeBlock.canvas);
        } else {
            const block = blocks.find((block) => block.id === id);
            activeTypes.push(block!.type);
        }
    });
    const needRender = getNeedRender(activeTypes);
    const {
        currentColor,
        currentBGColor,
        currentTextSize,
        currentFontFamily,
        currentRotate,
        currentScale,
    } = getCurrentParameters({ selectedBlocks, canvas, blocks });
    return (
        <div className={css.tools}>
            {needRender.changeColor && (
                <ChangeColor
                    currentColor={currentColor}
                    currentBGColor={currentBGColor}
                    selectedBlocks={selectedBlocks}
                />
            )}
            {needRender.changeText && (
                <>
                    <ChangeAlign />
                    <ChangeStyle
                        currentSize={currentTextSize}
                        currentFontFamily={currentFontFamily}
                    />
                </>
            )}
            {needRender.changeImage && <ChangeImage />}
            {needRender.changeArt && <ChangeArt />}
            {needRender.changeCanvasSize && (
                <ChangeCanvasSize currentSize={canvas.size} />
            )}
            {needRender.changeRotateScale && (
                <ChangeRotateScale
                    currentRotate={currentRotate}
                    currentScale={currentScale}
                />
            )}
            {!activeTypes.length && <ChangeTemplate />}
        </div>
    );
}
export default ToolsPanel;
