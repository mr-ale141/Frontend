import React from "react";
import css from "./TextBlock.module.css";
import { TextBlockType } from "../../data/type/type";
import GetRGBA from "../../utils/getRGBA";
import { useAppDispatch } from "../../data/hooks";
import stylesForRotate, { StylesArrayKeyType } from "./stylesForRotate";

type TextBlockProps = {
    block: TextBlockType;
};

function TextBlock({ block }: TextBlockProps) {
    const { changeText, setSelectedBlock } = useAppDispatch();
    function onMouseDownHandler(e: React.MouseEvent) {
        setSelectedBlock(block.id, e.ctrlKey);
        const target = e.target as HTMLDivElement;
        target.contentEditable = "true";
        target.focus();
        target.id = "new-text";
    }
    function onBlurHandler(e: React.FocusEvent) {
        const target = e.target as HTMLDivElement;
        const newText = target.innerText;
        changeText(newText);
        target.removeAttribute("id");
        target.removeAttribute("contenteditable");
        setSelectedBlock("", false);
    }
    const rotate = block.rotate.toString() as StylesArrayKeyType;
    const s = stylesForRotate[rotate];
    const textAlign = block.positionText.justifyContent;
    return (
        <div
            className={css.text}
            id={block.id}
            style={{
                ...block.positionText,
                textAlign,
                backgroundColor: GetRGBA(block.bgColor),
                lineHeight: "normal",
                ...s,
            }}
            onBlur={onBlurHandler}
        >
            <div
                style={{
                    ...block.text,
                    color: GetRGBA(block.text.color),
                    transform: `scale(${block.scale.x}, ${block.scale.y})`,
                }}
                onMouseDown={onMouseDownHandler}
            >
                <pre style={{ fontFamily: "inherit" }}>{block.text.value}</pre>
            </div>
        </div>
    );
}
export default TextBlock;
