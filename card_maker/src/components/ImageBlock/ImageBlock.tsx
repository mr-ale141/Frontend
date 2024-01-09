import css from "./ImageBlock.module.css";
import { ImageBlockType } from "../../data/type/type";

type ImageBlockProps = {
    block: ImageBlockType;
};

function ImageBlock({ block }: ImageBlockProps) {
    return (
        <div
            className={css.image}
            id={block.id}
            style={{ transform: `rotate(${block.rotate}deg)` }}
        >
            <img
                src={block.bgImage.data}
                alt="img"
                style={{
                    transform: `scale(${block.scale.x}, ${block.scale.y})`,
                }}
            />
        </div>
    );
}
export default ImageBlock;
