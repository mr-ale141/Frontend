import css from "./ImageBlock.module.css";
import commonCss from "../../common/Common.module.css";
import { ImageBlock } from "../../type/type";

type imageBlockProps = {
    imageBlock: ImageBlock;
    isSelected: boolean;
};
function ImageBlk({ imageBlock, isSelected }: imageBlockProps) {
    let classNameList = commonCss.border;
    if (isSelected) {
        classNameList += " " + commonCss.selected;
    }
    return (
        <div
            className={css.image + " " + classNameList}
            style={{ ...imageBlock.size, ...imageBlock.position }}
            id={imageBlock.id}
        >
            <img src={imageBlock.bgImage.data} alt="img" />
        </div>
    );
}
export default ImageBlk;
