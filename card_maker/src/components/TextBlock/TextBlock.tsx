import css from "./TextBlock.module.css";
import { TextBlock } from "../../type/type";
import ConvertRGB from "../../function/convertRGB";
interface ITextBlock {
    textBlock: TextBlock;
}
function TextBlk({ textBlock }: ITextBlock) {
    const { width, height } = textBlock.size;
    const { marginLeft, marginTop } = textBlock.position;
    const { fontSize, fontFamily, fontStyle, fontWeight, textDecoration } =
        textBlock.text;
    return (
        <div
            className={css.text}
            style={{
                width,
                height,
                marginTop,
                marginLeft,
            }}
        >
            <p
                style={{
                    fontSize,
                    fontFamily,
                    fontStyle,
                    fontWeight,
                    textDecoration,
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
