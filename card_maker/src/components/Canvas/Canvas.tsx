import React from "react";
import css from "./Canvas.module.css";
import TextBlk from "../TextBlock/TextBlock";
import ArtBlk from "../ArtBlock/ArtBlock";
import ImageBlk from "../ImageBlock/ImageBlock";
import { TextBlock, ImageBlock, ArtBlock, Size } from "../../type/type";
interface ITemplate {
    size: Size;
    imageBlocks: ImageBlock[];
    textBlocks: TextBlock[];
    artBlocks: ArtBlock[];
}
function Canvas({ size, imageBlocks, artBlocks, textBlocks }: ITemplate) {
    return (
        <div className={css.canvas} style={size}>
            {textBlocks[0] && <TextBlk textBlock={textBlocks[0]} />}
            {artBlocks[0] && <ArtBlk artBlock={artBlocks[0]} />}
            {imageBlocks[0] && <ImageBlk imageBlock={imageBlocks[0]} />}
        </div>
    );
}
export default Canvas;
