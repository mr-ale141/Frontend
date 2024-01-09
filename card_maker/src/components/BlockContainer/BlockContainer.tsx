import React, { useRef, useState } from "react";
import {
    ArtBlockType,
    ImageBlockType,
    Position,
    Size,
    TextBlockType,
    TypeBlock,
} from "../../data/type/type";
import ArtBlock from "../ArtBlock/ArtBlock";
import TextBlock from "../TextBlock/TextBlock";
import ImageBlock from "../ImageBlock/ImageBlock";
import commonCss from "../../common/Common.module.css";
import useDragAndDropAndResize from "../../hooks/useDragAndDropAndResize";
import BorderSelected from "./BorderSelected/BorderSelected";

type BlockContainerProps = {
    block: ArtBlockType | TextBlockType | ImageBlockType;
    isSelected: boolean;
};
function BlockContainer({ block, isSelected }: BlockContainerProps) {
    const offsetPositionZero: Position = { top: 0, left: 0 };
    const offsetSizeZero: Size = { width: 0, height: 0 };
    const [offsetPosition, setOffsetPosition] = useState(offsetPositionZero);
    const [offsetSize, setOffsetSize] = useState(offsetSizeZero);
    const ref = useRef(null);
    useDragAndDropAndResize(ref, setOffsetPosition, setOffsetSize);
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
            ref={ref}
            className={commonCss.draggable + " " + classNameIfSelected}
            style={{
                ...position,
                ...size,
            }}
        >
            {block.type === TypeBlock.art && <ArtBlock block={block} />}
            {block.type === TypeBlock.text && <TextBlock block={block} />}
            {block.type === TypeBlock.image && <ImageBlock block={block} />}
            {isSelected && <BorderSelected />}
        </div>
    );
}
export default BlockContainer;
