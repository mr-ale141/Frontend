import React, { useState } from "react";
import css from "./TextBlock.module.css";
import { TextBlockType } from "../../type/type";
import GetRGBA from "../../utils/getRGBA";
import { useAppDispatch } from "../../data/hooks";

type textBlockProps = {
    block: TextBlockType;
};

function TextBlock({ block }: textBlockProps) {
    const { changeText } = useAppDispatch();
    const [isEdit, setIsEdit] = useState(false);
    function endEditNew(e: React.KeyboardEvent) {
        if (e.key === "Enter") {
            const target = e.target as HTMLInputElement;
            const text = target.value ? target.value : "Insert text here...";
            changeText(text);
            setIsEdit(false);
        }
    }
    function onMouseDownHandler() {
        setIsEdit(true);
    }
    const textAlign = block.positionText.justifyContent;
    return (
        <div
            className={css.text}
            id={block.id}
            style={{
                ...block.positionText,
                backgroundColor: GetRGBA(block.bgColor),
            }}
        >
            {!isEdit && (
                <p
                    style={{
                        ...block.text,
                        textAlign,
                        color: GetRGBA(block.text.color),
                    }}
                    onMouseDown={onMouseDownHandler}
                >
                    {block.text.value}
                </p>
            )}
            {isEdit && (
                <input
                    type="text"
                    style={{
                        ...block.text,
                        color: GetRGBA(block.text.color),
                    }}
                    autoFocus
                    id="new-text"
                    onKeyDown={(e) => endEditNew(e)}
                    onBlur={() => setIsEdit(false)}
                    defaultValue={block.text.value}
                />
            )}
        </div>
    );
}
export default TextBlock;
