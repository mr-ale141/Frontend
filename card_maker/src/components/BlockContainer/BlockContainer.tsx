import React, { useState } from "react";
import {
    ArtBlockType,
    ImageBlockType,
    Position,
    TextBlockType,
    TypeBlock,
} from "../../type/type";
import ArtBlock from "../ArtBlock/ArtBlock";
import TextBlock from "../TextBlock/TextBlock";
import ImageBlock from "../ImageBlock/ImageBlock";
import { useAppDispatch } from "../../data/hooks";
import { useDnd } from "../../hooks/useDnd";
import { setSelectedBlock } from "../../data/sessionReducer";
import commonCss from "../../common/Common.module.css";

type blockContainerProps = {
    block: ArtBlockType | TextBlockType | ImageBlockType;
    isSelected: boolean;
};
function BlockContainer({ block, isSelected }: blockContainerProps) {
    const dispatch = useAppDispatch();
    const offsetZero: Position = { top: 0, left: 0 };
    const [offset, setOffset] = useState(offsetZero);
    const registerDndItem = useDnd(setOffset, dispatch);
    function onMouseDownHandler(event: React.MouseEvent) {
        const inputNewText = document.getElementById("new-text");
        const targetClassName = (event.target as HTMLElement).classList;
        const isResize = targetClassName.contains(commonCss.resize);
        if (!inputNewText && !isResize) {
            if (!event.isDefaultPrevented()) {
                dispatch(
                    setSelectedBlock({ id: block.id, withCtrl: event.ctrlKey }),
                );
                registerDndItem(event);
                event.preventDefault();
            }
        } else if (isResize) {
            event.preventDefault();
        }
    }
    const position: Position = {
        top: block.position.top + offset.top,
        left: block.position.left + offset.left,
    };
    let classNameIfSelected = "";
    if (isSelected) {
        classNameIfSelected += commonCss.border;
    }
    return (
        <div
            className={commonCss.draggable + " " + classNameIfSelected}
            style={{
                ...position,
                ...block.size,
            }}
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
            {block.type === TypeBlock.art && <ArtBlock block={block} />}
            {block.type === TypeBlock.text && <TextBlock block={block} />}
            {block.type === TypeBlock.image && <ImageBlock block={block} />}
        </div>
    );
}
export default BlockContainer;
