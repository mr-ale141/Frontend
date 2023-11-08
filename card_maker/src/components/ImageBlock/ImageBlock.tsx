import css from "./ImageBlock.module.css";
import commonCss from "../../common/Common.module.css";
import { ImageBlock, Position } from "../../type/type";
import React from "react";
import { setPosition } from "../../data/sessionReducer";
import { useAppDispatch } from "../../data/hooks";

type imageBlockProps = {
    imageBlock: ImageBlock;
    isSelected: boolean;
};
function ImageBlk({ imageBlock, isSelected }: imageBlockProps) {
    const dispatch = useAppDispatch();
    let classNameList = commonCss.border + " " + commonCss.draggable;
    if (isSelected) {
        classNameList += " " + commonCss.selected;
    }
    const newPosition: Position = { left: 0, top: 0 };
    function dragStartHandler(e: React.DragEvent) {
        newPosition.left = e.pageX;
        newPosition.top = e.pageY;
    }
    function dragEndHandler(e: React.DragEvent) {
        newPosition.left =
            imageBlock.position.left + e.pageX - newPosition.left;
        newPosition.top = imageBlock.position.top + e.pageY - newPosition.top;
        dispatch(setPosition({ id: imageBlock.id, newPosition }));
    }
    return (
        <div
            className={css.image + " " + classNameList}
            draggable
            onDragStart={(e) => dragStartHandler(e)}
            onDragEnd={(e) => dragEndHandler(e)}
            style={{ ...imageBlock.size, ...imageBlock.position }}
            id={imageBlock.id}
        >
            <img src={imageBlock.bgImage.data} alt="img" />
        </div>
    );
}
export default ImageBlk;
