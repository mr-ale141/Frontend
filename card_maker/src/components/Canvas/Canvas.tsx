import React from "react";
import css from "./Canvas.module.css";
import { useAppDispatch, useAppSelector } from "../../data/hooks";
import { sessionState, setSelectedBlock } from "../../data/sessionReducer";
import getRGBA from "../../utils/getRGBA";
import BlockContainer from "../BlockContainer/BlockContainer";
import commonCss from "../../common/Common.module.css";

function Canvas() {
    const state = useAppSelector(sessionState);
    const canvasId = state.session.template.canvas.id;
    const canvas = state.session.template.canvas;
    const selectedBlocks = state.session.selectedBlocks;
    const isSelected = selectedBlocks.includes(canvas.id);
    const dispatch = useAppDispatch();
    function onMouseDownHandler(event: React.MouseEvent) {
        const inputNewText = document.getElementById("new-text");
        const targetClassName = (event.target as HTMLElement).classList;
        const isResize = targetClassName.contains(commonCss.resize);
        if (!inputNewText && !isResize) {
            if (!event.isDefaultPrevented()) {
                dispatch(
                    setSelectedBlock({
                        id: canvasId,
                        withCtrl: event.ctrlKey,
                    }),
                );
                event.preventDefault();
            }
        } else if (isResize) {
            event.preventDefault();
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
    let classNameIfSelected = "";
    if (isSelected) {
        classNameIfSelected += commonCss.border;
    }
    return (
        <div
            className={css.canvas + " " + classNameIfSelected}
            style={styleCanvas}
            id={canvas.id}
            onMouseDown={onMouseDownHandler}
        >
            {isSelected && (
                <>
                    <div
                        className={
                            commonCss["top-left"] + " " + commonCss.resize
                        }
                    />
                    <div
                        className={
                            commonCss["top-center"] + " " + commonCss.resize
                        }
                    />
                    <div
                        className={
                            commonCss["top-right"] + " " + commonCss.resize
                        }
                    />
                    <div
                        className={
                            commonCss["right-center"] + " " + commonCss.resize
                        }
                    />
                    <div
                        className={
                            commonCss["bottom-right"] + " " + commonCss.resize
                        }
                    />
                    <div
                        className={
                            commonCss["bottom-center"] + " " + commonCss.resize
                        }
                    />
                    <div
                        className={
                            commonCss["bottom-left"] + " " + commonCss.resize
                        }
                    />
                    <div
                        className={
                            commonCss["left-center"] + " " + commonCss.resize
                        }
                    />
                </>
            )}
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
