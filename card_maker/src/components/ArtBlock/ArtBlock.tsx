import css from "./ArtBlock.module.css";
import { ArtBlockType, ArtName } from "../../type/type";
import Quote from "../art/quote/Quote";
import Arrow from "../art/arrow/Arrow";
import Circle from "../art/circle/Circle";
import Like from "../art/like/Like";
import Line from "../art/line/Line";
import Rect from "../art/rectangle/Rect";
import Square from "../art/square/Square";
import React from "react";

type ArtBlockProps = {
    block: ArtBlockType;
};

const artBlockSource = {
    [ArtName.arrow]: Arrow,
    [ArtName.circle]: Circle,
    [ArtName.like]: Like,
    [ArtName.line]: Line,
    [ArtName.quote]: Quote,
    [ArtName.rect]: Rect,
    [ArtName.square]: Square,
};
function ArtBlock({ block }: ArtBlockProps) {
    return (
        <div
            className={css.art}
            id={block.id}
            style={{ transform: `rotate(${block.rotate}deg)` }}
        >
            {artBlockSource[block.artName]({ block })}
        </div>
    );
}
export default ArtBlock;
