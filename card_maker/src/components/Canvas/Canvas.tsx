import React from "react";
import css from "./Canvas.module.css";
import TextBlock from "../TextBlock/TextBlock";
import ArtBlock from "../ArtBlock/ArtBlock";
import ImageBlock from "../ImageBlock/ImageBlock";
import { useAppDispatch, useAppSelector } from "../../data/hooks";
import {
    sessionState,
    setNewPosition,
    setSelectedBlock,
} from "../../data/sessionReducer";
import commonCss from "../../common/Common.module.css";
import { useDnd } from "../../hooks/useDnd";
import { TypeBlock } from "../../type/type";

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
    const { registerDndItem } = useDnd({
        onChangePosition: (offset) => dispatch(setNewPosition(offset)),
    });
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
    return (
        <div
            className={css.canvas + " " + classNameList}
            style={canvas.size}
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
                                registerDndItem={registerDndItem}
                            />
                        );
                    case TypeBlock.text:
                        return (
                            <TextBlock
                                key={block.id}
                                textBlock={block}
                                isSelected={selectedBlocks.includes(block.id)}
                                registerDndItem={registerDndItem}
                            />
                        );
                    case TypeBlock.art:
                        return (
                            <ArtBlock
                                key={block.id}
                                artBlock={block}
                                isSelected={selectedBlocks.includes(block.id)}
                                registerDndItem={registerDndItem}
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
