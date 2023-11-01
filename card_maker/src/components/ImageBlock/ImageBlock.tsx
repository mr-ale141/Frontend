import css from "./ImageBlock.module.css";
import { ImageBlock } from "../../type/type";
import { useAppDispatch } from "../../data/hooks";
import { setSelectedBlock } from "../../data/sessionReducer";

interface IImageBlock {
    imageBlock: ImageBlock;
    selectedBlocks: Array<string>;
}
function ImageBlk({ imageBlock, selectedBlocks }: IImageBlock) {
    const dispatch = useAppDispatch();
    let classNameList = "border";
    if (selectedBlocks.includes(imageBlock.id)) {
        classNameList += " selected";
    }
    return (
        <div
            className={css.image}
            style={{ ...imageBlock.size, ...imageBlock.position }}
            onClick={(event) => {
                event.stopPropagation();
                dispatch(setSelectedBlock(imageBlock.id));
            }}
        >
            <div className={classNameList} />
            <img src={imageBlock.bgImage.data} alt="img" />
        </div>
    );
}
export default ImageBlk;
