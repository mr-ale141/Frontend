import css from "./TextBlock.module.css";
import { TextBlock } from "../../type/type";
interface ITextBlock {
    textBlock: TextBlock;
}
function TextBlk({ textBlock }: ITextBlock) {
    const textBlockWidth = textBlock.size.width;
    const textBlockHeight = textBlock.size.height;
    const posX = textBlock.position.x;
    const posY = textBlock.position.y;
    const text = textBlock.text.value;
    const textFontSize = textBlock.text.fontSize;
    const textFontFamily = textBlock.text.fontFamily;
    const textR = textBlock.text.color.r;
    const textB = textBlock.text.color.g;
    const textG = textBlock.text.color.b;
    const textA = textBlock.text.color.a;
    const bgR = textBlock.bgColor.r;
    const bgG = textBlock.bgColor.g;
    const bgB = textBlock.bgColor.b;
    const bgA = textBlock.bgColor.a;
    // const textBold = textBlocks[0].text.bold;
    // const textCursive = textBlocks[0].text.cursive;
    // const textUnderline = textBlocks[0].text.underline;
    return (
        <div
            className={css.text}
            style={{
                width: textBlockWidth,
                height: textBlockHeight,
                top: posY,
                left: posX,
            }}
        >
            <p
                style={{
                    fontSize: textFontSize,
                    fontFamily: textFontFamily,
                    color: `rgba(${textR.toString()}, 
                                 ${textB.toString()}, 
                                 ${textG.toString()}, 
                                 ${textA.toString()}
                            )`,
                    background: `rgba(${bgR.toString()}, 
                                      ${bgG.toString()}, 
                                      ${bgB.toString()}, 
                                      ${bgA.toString()}
                                 )`,
                }}
            >
                {text}
            </p>
        </div>
    );
}

export default TextBlk;
