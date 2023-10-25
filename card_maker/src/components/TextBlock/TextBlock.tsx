import css from "./TextBlock.module.css";
import { TextBlock } from "../../type/type";
import ConvertRGB from "../../function/convertRGB";
interface ITextBlock {
    textBlock: TextBlock;
    selectedBlocks: Array<string>;
}
function TextBlk({ textBlock, selectedBlocks }: ITextBlock) {
    let classNameList = css.text;
    if (selectedBlocks.includes(textBlock.id)) {
        classNameList += " selected";
    }
    return (
        <div
            className={classNameList}
            style={{
                ...textBlock.size,
                ...textBlock.position,
                backgroundColor: ConvertRGB(textBlock.bgColor),
            }}
        >
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
