import React from "react";
import css from "./Canvas.module.css";
import TextBlk from "../TextBlock/TextBlock";
import ArtBlk from "../ArtBlock/ArtBlock";
import ImageBlk from "../ImageBlock/ImageBlock";
import { TextBlock, ImageBlock, ArtBlock, Size } from "../../type/type";
interface ITemplate {
    size: Size;
    selectedBlocks: Array<string>;
    imageBlocks: ImageBlock[];
    textBlocks: TextBlock[];
    artBlocks: ArtBlock[];
}
function Canvas({
    size,
    selectedBlocks,
    imageBlocks,
    artBlocks,
    textBlocks,
}: ITemplate) {
    return (
        <div className={css.canvas} style={size}>
            {textBlocks[0] && (
                <TextBlk
                    textBlock={textBlocks[0]}
                    selectedBlocks={selectedBlocks}
                />
            )}
            {artBlocks[0] && (
                <ArtBlk
                    artBlock={artBlocks[0]}
                    selectedBlocks={selectedBlocks}
                />
            )}
            {imageBlocks[0] && (
                <ImageBlk
                    imageBlock={imageBlocks[0]}
                    selectedBlocks={selectedBlocks}
                />
            )}
        </div>
    );
}
export default Canvas;
