import css from "./ImageBlock.module.css";
import { ImageBlock } from "../../type/type";
interface IImageBlock {
    imageBlock: ImageBlock;
    selectedBlocks: Array<string>;
}
function ImageBlk({ imageBlock, selectedBlocks }: IImageBlock) {
    let classNameList = css.image;
    if (selectedBlocks.includes(imageBlock.id)) {
        classNameList += " selected";
    }
    return (
        <div
            className={classNameList}
            style={{ ...imageBlock.size, ...imageBlock.position }}
        >
            <img src={imageBlock.bgImage.data} alt="img" />
        </div>
    );
}
export default ImageBlk;
