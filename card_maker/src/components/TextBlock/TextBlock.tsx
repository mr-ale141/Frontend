import css from "./TextBlock.module.css";
import commonCss from "../../common/Common.module.css";
import { TextBlock } from "../../type/type";
import GetRGBA from "../../utils/getRGBA";

type textBlockProps = {
    textBlock: TextBlock;
    isSelected: boolean;
};
function TextBlk({ textBlock, isSelected }: textBlockProps) {
    let classNameList = commonCss.border;
    if (isSelected) {
        classNameList += " " + commonCss.selected;
    }
    return (
        <div
            className={css.text + " " + classNameList}
            id={textBlock.id}
            style={{
                ...textBlock.size,
                ...textBlock.position,
                backgroundColor: GetRGBA(textBlock.bgColor),
            }}
        >
            <p
                style={{
                    ...textBlock.text,
                    ...textBlock.positionText,
                    color: GetRGBA(textBlock.text.color),
                }}
            >
                {textBlock.text.value}
            </p>
        </div>
    );
}
export default TextBlk;
