import css from "./ImageBlock.module.css";
import commonCss from "../../common/Common.module.css";
import { ImageBlockType, Position } from "../../type/type";
import React, { useEffect, useRef, useState } from "react";
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
    const [offset, setOffset] = useState({ top: 0, left: 0 });
    const dispatch = useAppDispatch();
    const registerDndItem = useDnd();
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const { onDragStart } = registerDndItem(ref, offset, setOffset);
        const control = ref.current!;
        control.addEventListener("mousedown", onDragStart);
        return () => control.removeEventListener("mousedown", onDragStart);
    }, []);
    function onMouseDownHandler(e: React.MouseEvent) {
        if (!e.isDefaultPrevented()) {
            dispatch(
                setSelectedBlock({
                    id: imageBlock.id,
                    withCtrl: e.ctrlKey,
                }),
            );
            e.preventDefault();
        }
    }
    const position: Position = {
        top: imageBlock.position.top + offset.top,
        left: imageBlock.position.left + offset.left,
    };
    console.log("offset", offset);
    console.log("position", position);
    console.log("imageBlock.position", imageBlock.position);

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
