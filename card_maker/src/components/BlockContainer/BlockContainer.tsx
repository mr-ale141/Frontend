import React, { useState } from "react";
import {
    ArtBlockType,
    ImageBlockType,
    Position,
    Size,
    TextBlockType,
    TypeBlock,
} from "../../type/type";
import ArtBlock from "../ArtBlock/ArtBlock";
import TextBlock from "../TextBlock/TextBlock";
import ImageBlock from "../ImageBlock/ImageBlock";
import { useAppDispatch } from "../../data/hooks";
import { useDnd } from "../../hooks/useDnd";
import commonCss from "../../common/Common.module.css";
import { useResize } from "../../hooks/useResize";

type blockContainerProps = {
    block: ArtBlockType | TextBlockType | ImageBlockType;
    isSelected: boolean;
};
function BlockContainer({ block, isSelected }: blockContainerProps) {
    const { setSelectedBlock } = useAppDispatch();
    const offsetPositionZero: Position = { top: 0, left: 0 };
    const offsetSizeZero: Size = { width: 0, height: 0 };
    const [offsetPosition, setOffsetPosition] = useState(offsetPositionZero);
    const [offsetSize, setOffsetSize] = useState(offsetSizeZero);
    const registerDndItem = useDnd(setOffsetPosition);
    const registerResizeItem = useResize(setOffsetPosition, setOffsetSize);
    function onMouseDownHandler(event: React.MouseEvent) {
        const inputNewText = document.getElementById("new-text");
        const targetClassName = (event.target as HTMLElement).classList;
        const isResize = targetClassName.contains(commonCss.resize);
        if (!inputNewText && !isResize) {
            if (!event.isDefaultPrevented()) {
                setSelectedBlock(block.id, event.ctrlKey);
                registerDndItem(event);
                event.preventDefault();
            }
        } else if (isResize) {
            registerResizeItem(event);
            event.preventDefault();
        }
    }
    const position: Position = {
        top: block.position.top + offsetPosition.top,
        left: block.position.left + offsetPosition.left,
    };
    const size: Size = {
        width: block.size.width + offsetSize.width,
        height: block.size.height + offsetSize.height,
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
                ...size,
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
