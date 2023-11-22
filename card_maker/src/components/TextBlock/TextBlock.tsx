import React, { useEffect, useRef, useState } from "react";
import css from "./TextBlock.module.css";
import commonCss from "../../common/Common.module.css";
import { TextBlockType } from "../../type/type";
import GetRGBA from "../../utils/getRGBA";
import { useAppDispatch } from "../../data/hooks";
import { changeText, setSelectedBlock } from "../../data/sessionReducer";
import { RegisterDndItemFn } from "../../hooks/useDnd";

type textBlockProps = {
    textBlock: TextBlockType;
    isSelected: boolean;
    registerDndItem: RegisterDndItemFn;
};
function TextBlock({ textBlock, isSelected, registerDndItem }: textBlockProps) {
    let classNameList = commonCss.border + " " + commonCss.draggable;
    if (isSelected) {
        classNameList += " " + commonCss.selected;
    }
    const dispatch = useAppDispatch();
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const { onDragStart } = registerDndItem(ref);
        const onMouseDown = (mouseDownEvent: MouseEvent) => {
            dispatch(
                setSelectedBlock({
                    id: textBlock.id,
                    withCtrl: mouseDownEvent.ctrlKey,
                }),
            );
            onDragStart({
                onDrag: (dragEvent) => {
                    ref.current!.style.zIndex = "1";
                    ref.current!.style.top = `${
                        textBlock.position.top +
                        dragEvent.clientY -
                        mouseDownEvent.clientY
                    }px`;
                    ref.current!.style.left = `${
                        textBlock.position.left +
                        dragEvent.clientX -
                        mouseDownEvent.clientX
                    }px`;
                },
                onDrop: () => {
                    ref.current!.style.zIndex = "";
                },
            });
        };
        const control = ref.current!;
        control.addEventListener("mousedown", onMouseDown);
        return () => control.removeEventListener("mousedown", onMouseDown);
    }, [textBlock.position, registerDndItem]);
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
            ref={ref}
            className={css.text + " " + classNameList}
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
                    id="new-text"
                    onKeyDown={(e) => endEditNew(e)}
                    onBlur={() => setIsEdit(false)}
                    defaultValue={textBlock.text.value}
                />
            )}
        </div>
    );
}
export default TextBlock;
