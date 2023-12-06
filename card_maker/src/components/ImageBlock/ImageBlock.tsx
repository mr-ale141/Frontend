import css from "./ImageBlock.module.css";
import { ImageBlockType } from "../../type/type";
import React from "react";

type imageBlockProps = {
    block: ImageBlockType;
};
function ImageBlock({ block }: imageBlockProps) {
    return (
        <div className={css.image} id={block.id}>
            <img src={block.bgImage.data} alt="img" />
        </div>
    );
}
export default ImageBlock;
