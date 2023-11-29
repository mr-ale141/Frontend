import React, { useEffect, useRef, useState } from "react";
import css from "./TextBlock.module.css";
import commonCss from "../../common/Common.module.css";
import { Position, TextBlockType } from "../../type/type";
import GetRGBA from "../../utils/getRGBA";
import { useAppDispatch } from "../../data/hooks";
import { changeText, setSelectedBlock } from "../../data/sessionReducer";
import { useDnd } from "../../hooks/useDnd";

type textBlockProps = {
    textBlock: TextBlockType;
    isSelected: boolean;
};

function TextBlock({ textBlock, isSelected }: textBlockProps) {
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
    }, [textBlock.position, registerDndItem]);
    const [isEdit, setIsEdit] = useState(false);
    function endEditNew(e: React.KeyboardEvent) {
        if (e.key === "Enter") {
            const target = e.target as HTMLInputElement;
            const text = target.value ? target.value : "Insert text here...";
            dispatch(changeText(text));
            setIsEdit(false);
        }
    }
    function onMouseDownHandler(e: React.MouseEvent) {
        if (!e.isDefaultPrevented()) {
            dispatch(
                setSelectedBlock({ id: textBlock.id, withCtrl: e.ctrlKey }),
            );
            e.preventDefault();
        }
    }
    function onDoubleClickHandler(e: React.MouseEvent) {
        if (!e.isDefaultPrevented()) {
            setIsEdit(true);
            e.preventDefault();
        }
    }
    const position: Position = {
        top: textBlock.position.top + offset.top,
        left: textBlock.position.left + offset.left,
    };
    return (
        <div
            ref={ref}
            className={css.text + " " + classNameList}
            id={textBlock.id}
            style={{
                ...textBlock.size,
                ...position,
                ...textBlock.positionText,
                backgroundColor: GetRGBA(textBlock.bgColor),
            }}
            onMouseDown={onMouseDownHandler}
        >
            {!isEdit && (
                <p
                    style={{
                        ...textBlock.text,
                        color: GetRGBA(textBlock.text.color),
                    }}
                    onDoubleClick={onDoubleClickHandler}
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
                    id="new-text"
                    onKeyDown={(e) => endEditNew(e)}
                    onClick={(e) => e.preventDefault()}
                    onBlur={() => setIsEdit(false)}
                    defaultValue={textBlock.text.value}
                />
            )}
        </div>
    );
}
export default TextBlock;
