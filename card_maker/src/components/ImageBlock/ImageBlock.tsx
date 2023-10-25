import css from "./ImageBlock.module.css";
import { ImageBlock } from "../../type/type";
interface IImageBlock {
    imageBlock: ImageBlock;
    selectedBlocks: Array<string>;
}
function ImageBlk({ imageBlock, selectedBlocks }: IImageBlock) {
    let classNameList = "border";
    if (selectedBlocks.includes(imageBlock.id)) {
        classNameList += " selected";
    }
    return (
        <div
            className={css.image}
            style={{ ...imageBlock.size, ...imageBlock.position }}
        >
            <div className={classNameList} />
            <img src={imageBlock.bgImage.data} alt="img" />
        </div>
    );
}
export default ImageBlk;
