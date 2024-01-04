import css from "./ImageBlock.module.css";
import { ImageBlockType } from "../../type/type";

type ImageBlockProps = {
    block: ImageBlockType;
};

function ImageBlock({ block }: ImageBlockProps) {
    return (
        <div className={css.image} id={block.id}>
            <img src={block.bgImage.data} alt="img" />
        </div>
    );
}
export default ImageBlock;
