import css from "./ArtBlock.module.css";
import commonCss from "../../common/Common.module.css";
import { ArtBlockType, ArtName } from "../../type/type";
import Quote from "../art/quote/Quote";
import Arrow from "../art/arrow/Arrow";
import Circle from "../art/circle/Circle";
import Like from "../art/like/Like";
import Line from "../art/line/Line";
import Rect from "../art/rectangle/Rect";
import Square from "../art/square/Square";
import React from "react";
import dragStartHandler from "../../utils/dragStartHandler";
import dragEndHandler from "../../utils/dragEndHandler";
import { useAppDispatch } from "../../data/hooks";

type ArtBlkProps = {
    artBlock: ArtBlockType;
    isSelected: boolean;
};

const artBlkSrc = {
    [ArtName.arrow]: Arrow,
    [ArtName.circle]: Circle,
    [ArtName.like]: Like,
    [ArtName.line]: Line,
    [ArtName.quote]: Quote,
    [ArtName.rect]: Rect,
    [ArtName.square]: Square,
};
function ArtBlock({ artBlock, isSelected }: ArtBlkProps) {
    const dispatch = useAppDispatch();
    let classNameList = commonCss.border + " " + commonCss.draggable;
    if (isSelected) {
        classNameList += " " + commonCss.selected;
    }
    return (
        <div
            className={css.art + " " + classNameList}
            draggable
            onDragStart={(e) => dragStartHandler(e, dispatch)}
            onDragEnd={(e) => dragEndHandler(e, dispatch)}
            style={{
                ...artBlock.position,
                ...artBlock.size,
            }}
            id={artBlock.id}
        >
            {artBlkSrc[artBlock.artName]({ artBlock })}
        </div>
    );
}
export default ArtBlock;
