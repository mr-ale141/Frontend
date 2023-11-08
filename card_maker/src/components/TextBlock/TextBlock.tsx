import React from "react";
import css from "./TextBlock.module.css";
import commonCss from "../../common/Common.module.css";
import { TextBlockType } from "../../type/type";
import GetRGBA from "../../utils/getRGBA";
import dragStartHandler from "../../utils/dragStartHandler";
import dragEndHandler from "../../utils/dragEndHandler";
import { useAppDispatch } from "../../data/hooks";

type textBlockProps = {
    textBlock: TextBlockType;
    isSelected: boolean;
};
function TextBlock({ textBlock, isSelected }: textBlockProps) {
    const dispatch = useAppDispatch();
    let classNameList = commonCss.border + " " + commonCss.draggable;
    if (isSelected) {
        classNameList += " " + commonCss.selected;
    }
    return (
        <div
            className={css.text + " " + classNameList}
            draggable
            onDragStart={(e) => dragStartHandler(e, dispatch)}
            onDragEnd={(e) => dragEndHandler(e, dispatch)}
            id={textBlock.id}
            style={{
                ...textBlock.size,
                ...textBlock.position,
                backgroundColor: GetRGBA(textBlock.bgColor),
            }}
        >
            <p
                style={{
                    ...textBlock.text,
                    ...textBlock.positionText,
                    color: GetRGBA(textBlock.text.color),
                }}
            >
                {textBlock.text.value}
            </p>
        </div>
    );
}
export default TextBlock;
