import css from "./ArtBlock.module.css";
import commonCss from "../../common/Common.module.css";
import { ArtBlock, ArtName, Position } from "../../type/type";
import Quote from "../art/quote/Quote";
import Arrow from "../art/arrow/Arrow";
import Circle from "../art/circle/Circle";
import Like from "../art/like/Like";
import Line from "../art/line/Line";
import Rect from "../art/rectangle/Rect";
import Square from "../art/square/Square";
import React from "react";
import { setPosition } from "../../data/sessionReducer";
import { useAppDispatch } from "../../data/hooks";

type ArtBlkProps = {
    artBlock: ArtBlock;
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
function ArtBlk({ artBlock, isSelected }: ArtBlkProps) {
    const dispatch = useAppDispatch();
    let classNameList = commonCss.border + " " + commonCss.draggable;
    if (isSelected) {
        classNameList += " " + commonCss.selected;
    }
    const newPosition: Position = { left: 0, top: 0 };
    function dragStartHandler(e: React.DragEvent) {
        newPosition.left = e.pageX;
        newPosition.top = e.pageY;
    }
    function dragEndHandler(e: React.DragEvent) {
        newPosition.left = artBlock.position.left + e.pageX - newPosition.left;
        newPosition.top = artBlock.position.top + e.pageY - newPosition.top;
        dispatch(setPosition({ id: artBlock.id, newPosition }));
    }
    return (
        <div
            className={css.art + " " + classNameList}
            draggable
            onDragStart={(e) => dragStartHandler(e)}
            onDragEnd={(e) => dragEndHandler(e)}
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
export default ArtBlk;
