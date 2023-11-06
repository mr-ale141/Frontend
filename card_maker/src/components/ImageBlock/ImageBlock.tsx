import css from "./ImageBlock.module.css";
import commonCss from "./common.module.css";
import { ImageBlock } from "../../type/type";
import { useAppDispatch } from "../../data/hooks";
import { setSelectedBlock } from "../../data/sessionReducer";

interface IImageBlock {
    imageBlock: ImageBlock;
    selectedBlocks: Array<string>;
    isSelected: boolean;
}
function ImageBlk({ imageBlock, isSelected }: IImageBlock) {
    const dispatch = useAppDispatch();
    let classNameList = "border";
    if (isSelected) {
        classNameList += " selected"; // use common css
    }
    return (
        <div
            className={css.image}
            style={{ ...imageBlock.size, ...imageBlock.position }}
            onClick={(event) => {
                event.stopPropagation();
                event.ctrlKey;
                dispatch(setSelectedBlock(imageBlock.id));
            }}
        >
            <div className={classNameList} />
            <img src={imageBlock.bgImage.data} alt="img" />
        </div>
    );
}
export default ImageBlk;
