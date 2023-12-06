import React from "react";
import css from "./Canvas.module.css";
import { useAppDispatch, useAppSelector } from "../../data/hooks";
import { sessionState, setSelectedBlock } from "../../data/sessionReducer";
import getRGBA from "../../utils/getRGBA";
import BlockContainer from "../BlockContainer/BlockContainer";
import SelectedBorder from "../SelectedBorder/SelectedBorder";

function Canvas() {
    const state = useAppSelector(sessionState);
    const canvasId = state.session.template.canvas.id;
    const canvas = state.session.template.canvas;
    const selectedBlocks = state.session.selectedBlocks;
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
            className={css.canvas}
            style={styleCanvas}
            id={canvas.id}
            onMouseDown={onMouseDownHandler}
        >
            {selectedBlocks.includes(canvas.id) && <SelectedBorder />}
            {state.session.template.blocks.map((block) => {
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
