import css from "./TextBlock.module.css";
import { TextBlock } from "../../type/type";
import ConvertRGB from "../../function/convertRGB";
interface ITextBlock {
    textBlock: TextBlock;
}
function TextBlk({ textBlock }: ITextBlock) {
    return (
        <div
            className={css.text}
            style={{ ...textBlock.size, ...textBlock.position }}
        >
            <p
                style={{
                    ...textBlock.text,
                    color: ConvertRGB(textBlock.text.color),
                    background: ConvertRGB(textBlock.bgColor),
                }}
            >
                {textBlock.text.value}
            </p>
        </div>
    );
}
export default TextBlk;
