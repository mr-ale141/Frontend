import React, { useState } from "react";
import css from "./TextBlock.module.css";
import commonCss from "../../common/Common.module.css";
import { TextBlockType } from "../../type/type";
import GetRGBA from "../../utils/getRGBA";
import dragStartHandler from "../../utils/dragStartHandler";
import dragEndHandler from "../../utils/dragEndHandler";
import { useAppDispatch } from "../../data/hooks";
import { changeText } from "../../data/sessionReducer";

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
    function endEditNew(e: React.KeyboardEvent) {
        if (e.key === "Enter") {
            const target = e.target as HTMLInputElement;
            const text = target.value ? target.value : "Insert text here...";
            dispatch(changeText(text));
            setIsEdit(false);
        }
    }
    const [isEdit, setIsEdit] = useState(false);
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
                ...textBlock.positionText,
                backgroundColor: GetRGBA(textBlock.bgColor),
            }}
        >
            {!isEdit && (
                <p
                    style={{
                        ...textBlock.text,
                        color: GetRGBA(textBlock.text.color),
                    }}
                    onDoubleClick={() => setIsEdit(true)}
                >
                    {textBlock.text.value}
                </p>
            )}
            {isEdit && (
                <input
                    type="text"
                    style={{
                        ...textBlock.text,
                        color: GetRGBA(textBlock.text.color),
                    }}
                    onKeyDown={(e) => endEditNew(e)}
                    onBlur={() => setIsEdit(false)}
                    defaultValue={textBlock.text.value}
                />
            )}
        </div>
    );
}
export default TextBlock;
