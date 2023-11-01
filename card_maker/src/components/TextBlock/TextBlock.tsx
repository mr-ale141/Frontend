import css from "./TextBlock.module.css";
import { TextBlock } from "../../type/type";
import ConvertRGB from "../../function/convertRGB";
import { useAppDispatch } from "../../data/hooks";
import { setSelectedBlock } from "../../data/sessionReducer";

interface ITextBlock {
    textBlock: TextBlock;
    selectedBlocks: Array<string>;
}
function TextBlk({ textBlock, selectedBlocks }: ITextBlock) {
    const dispatch = useAppDispatch();
    let classNameList = "border";
    if (selectedBlocks.includes(textBlock.id)) {
        classNameList += " selected";
    }
    return (
        <div
            className={css.text}
            style={{
                ...textBlock.size,
                ...textBlock.position,
                backgroundColor: ConvertRGB(textBlock.bgColor),
            }}
            onClick={(event) => {
                event.stopPropagation();
                dispatch(setSelectedBlock(textBlock.id));
            }}
        >
            <div className={classNameList} />
            <p
                style={{
                    ...textBlock.text,
                    ...textBlock.positionText,
                    color: ConvertRGB(textBlock.text.color),
                }}
            >
                {textBlock.text.value}
            </p>
        </div>
    );
}
export default TextBlk;
