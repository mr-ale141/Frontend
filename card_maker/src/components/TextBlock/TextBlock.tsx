import React from "react";
import css from "./TextBlock.module.css";
import { TextBlockType } from "../../type/type";
import GetRGBA from "../../utils/getRGBA";
import { useAppDispatch } from "../../data/hooks";

type textBlockProps = {
    block: TextBlockType;
};

function TextBlock({ block }: textBlockProps) {
    const { changeText, setSelectedBlock } = useAppDispatch();
    function onMouseDownHandler(e: React.MouseEvent) {
        setSelectedBlock(block.id, e.ctrlKey);
        const target = e.target as HTMLDivElement;
        target.id = "new-text";
    }
    function onBlurHandler(e: React.FocusEvent) {
        const target = e.target as HTMLDivElement;
        const newText = target.innerText;
        changeText(newText);
        target.removeAttribute("id");
    }
    const textAlign = block.positionText.justifyContent;
    return (
        <div
            className={css.text}
            id={block.id}
            style={{
                ...block.positionText,
                textAlign,
                backgroundColor: GetRGBA(block.bgColor),
            }}
            onBlur={onBlurHandler}
        >
            <div
                style={{
                    ...block.text,
                    color: GetRGBA(block.text.color),
                }}
                contentEditable="true"
                onMouseDown={onMouseDownHandler}
            >
                {block.text.value}
            </div>
        </div>
    );
}
export default TextBlock;
