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
import SelectedBorder from "../SelectedBorder/SelectedBorder";

type blockContainerProps = {
    block: ArtBlockType | TextBlockType | ImageBlockType;
    isSelected: boolean;
};
// const blockSource = {
//     [TypeBlock.art]: ArtBlock,
//     [TypeBlock.text]: TextBlock,
//     [TypeBlock.image]: ImageBlock,
// };
function BlockContainer({ block, isSelected }: blockContainerProps) {
    const dispatch = useAppDispatch();
    const offsetZero: Position = { top: 0, left: 0 };
    const [offset, setOffset] = useState(offsetZero);
    const registerDndItem = useDnd(setOffset, dispatch);
    function onMouseDownHandler(event: React.MouseEvent) {
        if (!event.isDefaultPrevented()) {
            dispatch(
                setSelectedBlock({ id: block.id, withCtrl: event.ctrlKey }),
            );
            registerDndItem(event);
            event.preventDefault();
        }
    }
    const position: Position = {
        top: block.position.top + offset.top,
        left: block.position.left + offset.left,
    };
    return (
        <div
            className={commonCss.draggable}
            style={{
                ...position,
                ...block.size,
            }}
            id={block.id}
            onMouseDown={onMouseDownHandler}
        >
            {isSelected && <SelectedBorder />}
            {/* {blockSource[block.type]({ block })} */}
            {block.type === TypeBlock.art && <ArtBlock block={block} />}
            {block.type === TypeBlock.text && <TextBlock block={block} />}
            {block.type === TypeBlock.image && <ImageBlock block={block} />}
        </div>
    );
}
export default BlockContainer;
