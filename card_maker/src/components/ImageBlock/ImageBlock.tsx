import css from "./ImageBlock.module.css";
import { ImageBlock } from "../../type/type";
interface IImageBlock {
    imageBlock: ImageBlock;
}
function ImageBlk({ imageBlock }: IImageBlock) {
    return (
        <div
            className={css.image}
            style={{ ...imageBlock.size, ...imageBlock.position }}
        >
            <img src={imageBlock.bgImage.data} alt="img" />
        </div>
    );
}
export default ImageBlk;
