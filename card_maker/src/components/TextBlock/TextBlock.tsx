import css from "./TextBlock.module.css";
import commonCss from "../../common/Common.module.css";
import { TextBlock } from "../../type/type";
import ConvertRGB from "../../utils/convertRGB";
import { useAppDispatch } from "../../data/hooks";
import { setSelectedBlock } from "../../data/sessionReducer";

type textBlockProps = {
    textBlock: TextBlock;
    isSelected: boolean;
};
function TextBlk({ textBlock, isSelected }: textBlockProps) {
    const dispatch = useAppDispatch();
    let classNameList = commonCss.border;
    if (isSelected) {
        classNameList += " " + commonCss.selected;
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
                const withCtrl = event.ctrlKey;
                dispatch(setSelectedBlock({ id: textBlock.id, withCtrl }));
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
