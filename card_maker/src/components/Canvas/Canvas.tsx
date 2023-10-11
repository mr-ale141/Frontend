import React from "react";
import css from "./Canvas.module.css";
import TextBlk from "../TextBlock/TextBlock";
import ArtBlk from "../ArtBlock/ArtBlock";
import ImageBlk from "../ImageBlock/ImageBlock";
import { TextBlock, ImageBlock, ArtBlock } from "../../type/type";
interface ITemplate {
    canvasWidth: number;
    canvasHeight: number;
    imageBlocks: ImageBlock[];
    textBlocks: TextBlock[];
    artBlocks: ArtBlock[];
}
function Canvas({
    canvasWidth,
    canvasHeight,
    imageBlocks,
    artBlocks,
    textBlocks,
}: ITemplate) {
    return (
        <div
            className={css.canvas}
            style={{
                width: canvasWidth,
                height: canvasHeight,
            }}
        >
            <TextBlk textBlock={textBlocks[0]} />
            <ArtBlk artBlock={artBlocks[0]} />
            <ImageBlk imageBlock={imageBlocks[0]} />
        </div>
    );
}

export default Canvas;
