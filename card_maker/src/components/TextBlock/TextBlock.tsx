import React from "react";
import css from "./TextBlock.module.css";
import commonCss from "../../common/Common.module.css";
import { Position, TextBlock } from "../../type/type";
import GetRGBA from "../../utils/getRGBA";
import { useAppDispatch } from "../../data/hooks";
import { setPosition } from "../../data/sessionReducer";

type textBlockProps = {
    textBlock: TextBlock;
    isSelected: boolean;
};
function TextBlk({ textBlock, isSelected }: textBlockProps) {
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
        newPosition.left = textBlock.position.left + e.pageX - newPosition.left;
        newPosition.top = textBlock.position.top + e.pageY - newPosition.top;
        dispatch(setPosition({ id: textBlock.id, newPosition }));
    }
    return (
        <div
            className={css.text + " " + classNameList}
            draggable
            onDragStart={(e) => dragStartHandler(e)}
            onDragEnd={(e) => dragEndHandler(e)}
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
export default TextBlk;
