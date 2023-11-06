import css from "./ImageBlock.module.css";
import commonCss from "../../common/Common.module.css";
import { ImageBlock } from "../../type/type";
import { useAppDispatch } from "../../data/hooks";
import { setSelectedBlock } from "../../data/sessionReducer";

type imageBlockProps = {
    imageBlock: ImageBlock;
    isSelected: boolean;
};
function ImageBlk({ imageBlock, isSelected }: imageBlockProps) {
    const dispatch = useAppDispatch();
    let classNameList = commonCss.border;
    if (isSelected) {
        classNameList += " " + commonCss.selected;
    }
    return (
        <div
            className={css.image}
            style={{ ...imageBlock.size, ...imageBlock.position }}
            onClick={(event) => {
                event.stopPropagation();
                const withCtrl = event.ctrlKey;
                dispatch(setSelectedBlock({ id: imageBlock.id, withCtrl }));
            }}
        >
            <div className={classNameList} />
            <img src={imageBlock.bgImage.data} alt="img" />
        </div>
    );
}
export default ImageBlk;
