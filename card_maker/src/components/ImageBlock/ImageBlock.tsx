import css from "./ImageBlock.module.css";
import commonCss from "../../common/Common.module.css";
import { ImageBlockType, Position } from "../../type/type";
import React, { useRef, useState } from "react";
import { useDnd } from "../../hooks/useDnd";
import { useAppDispatch } from "../../data/hooks";
import { setSelectedBlock } from "../../data/sessionReducer";

type imageBlockProps = {
    imageBlock: ImageBlockType;
    isSelected: boolean;
};
function ImageBlock({ imageBlock, isSelected }: imageBlockProps) {
    let classNameList = commonCss.border + " " + commonCss.draggable;
    if (isSelected) {
        classNameList += " " + commonCss.selected;
    }
    const offsetZero: Position = { top: 0, left: 0 };
    const [offset, setOffset] = useState(offsetZero);
    const dispatch = useAppDispatch();
    const ref = useRef<HTMLDivElement>(null);
    const registerDndItem = useDnd(setOffset, dispatch);
    function onMouseDownHandler(event: React.MouseEvent) {
        if (!event.isDefaultPrevented()) {
            dispatch(
                setSelectedBlock({
                    id: imageBlock.id,
                    withCtrl: event.ctrlKey,
                }),
            );
            registerDndItem(event);
            event.preventDefault();
        }
    }
    const position: Position = {
        top: imageBlock.position.top + offset.top,
        left: imageBlock.position.left + offset.left,
    };
    return (
        <div
            ref={ref}
            className={css.image + " " + classNameList}
            style={{ ...imageBlock.size, ...position }}
            id={imageBlock.id}
            onMouseDown={onMouseDownHandler}
        >
            <img src={imageBlock.bgImage.data} alt="img" />
        </div>
    );
}
export default ImageBlock;
