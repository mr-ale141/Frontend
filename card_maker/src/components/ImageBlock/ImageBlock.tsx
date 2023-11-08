import css from "./ImageBlock.module.css";
import commonCss from "../../common/Common.module.css";
import { ImageBlockType } from "../../type/type";
import React from "react";
import dragStartHandler from "../../utils/dragStartHandler";
import dragEndHandler from "../../utils/dragEndHandler";
import { useAppDispatch } from "../../data/hooks";

type imageBlockProps = {
    imageBlock: ImageBlockType;
    isSelected: boolean;
};
function ImageBlock({ imageBlock, isSelected }: imageBlockProps) {
    const dispatch = useAppDispatch();
    let classNameList = commonCss.border + " " + commonCss.draggable;
    if (isSelected) {
        classNameList += " " + commonCss.selected;
    }
    return (
        <div
            className={css.image + " " + classNameList}
            draggable
            onDragStart={(e) => dragStartHandler(e, dispatch)}
            onDragEnd={(e) => dragEndHandler(e, dispatch)}
            style={{ ...imageBlock.size, ...imageBlock.position }}
            id={imageBlock.id}
        >
            <img src={imageBlock.bgImage.data} alt="img" />
        </div>
    );
}
export default ImageBlock;
