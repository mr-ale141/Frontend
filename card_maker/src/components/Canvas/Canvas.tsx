import React from "react";
import css from "./Canvas.module.css";
import TextBlock from "../TextBlock/TextBlock";
import ArtBlock from "../ArtBlock/ArtBlock";
import ImageBlock from "../ImageBlock/ImageBlock";
import { useAppDispatch, useAppSelector } from "../../data/hooks";
import { sessionState, setSelectedBlock } from "../../data/sessionReducer";
import commonCss from "../../common/Common.module.css";
import { TypeBlock } from "../../type/type";
import getRGBA from "../../utils/getRGBA";

function Canvas() {
    const state = useAppSelector(sessionState);
    const canvasId = state.session.template.canvas.id;
    const canvas = state.session.template.canvas;
    const selectedBlocks = state.session.selectedBlocks;
    let classNameList = commonCss.border;
    if (selectedBlocks.includes(canvasId)) {
        classNameList += " " + commonCss.selected;
    }
    const dispatch = useAppDispatch();
    function onMouseDownHandler(e: React.MouseEvent) {
        if (!e.isDefaultPrevented()) {
            dispatch(
                setSelectedBlock({
                    id: canvasId,
                    withCtrl: e.ctrlKey,
                }),
            );
        }
        e.preventDefault();
    }
    const styleCanvas: React.CSSProperties = {
        ...canvas.size,
        backgroundColor: getRGBA(canvas.bgColor),
    };
    if (canvas.bgImage.data.length !== 0) {
        styleCanvas.backgroundImage = `url(${canvas.bgImage.data})`;
        styleCanvas.backgroundSize = "cover";
    }
    return (
        <div
            className={css.canvas + " " + classNameList}
            style={styleCanvas}
            id={canvas.id}
            onMouseDown={onMouseDownHandler}
        >
            {state.session.template.blocks.map((block) => {
                switch (block.type) {
                    case TypeBlock.image:
                        return (
                            <ImageBlock
                                key={block.id}
                                imageBlock={block}
                                isSelected={selectedBlocks.includes(block.id)}
                            />
                        );
                    case TypeBlock.text:
                        return (
                            <TextBlock
                                key={block.id}
                                textBlock={block}
                                isSelected={selectedBlocks.includes(block.id)}
                            />
                        );
                    case TypeBlock.art:
                        return (
                            <ArtBlock
                                key={block.id}
                                artBlock={block}
                                isSelected={selectedBlocks.includes(block.id)}
                            />
                        );
                    default:
                        return null;
                }
            })}
        </div>
    );
}
export default Canvas;
