import css from "./ArtBlock.module.css";
import commonCss from "../../common/Common.module.css";
import { ArtBlockType, ArtName, Position } from "../../type/type";
import Quote from "../art/quote/Quote";
import Arrow from "../art/arrow/Arrow";
import Circle from "../art/circle/Circle";
import Like from "../art/like/Like";
import Line from "../art/line/Line";
import Rect from "../art/rectangle/Rect";
import Square from "../art/square/Square";
import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch } from "../../data/hooks";
import { setSelectedBlock } from "../../data/sessionReducer";
import { useDnd } from "../../hooks/useDnd";

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
    let classNameList = commonCss.border + " " + commonCss.draggable;
    if (isSelected) {
        classNameList += " " + commonCss.selected;
    }
    const offsetZero: Position = { top: 0, left: 0 };
    const [offset, setOffset] = useState(offsetZero);
    const dispatch = useAppDispatch();
    const ref = useRef<HTMLDivElement>(null);
    const registerDndItem = useDnd(ref, offset, setOffset, dispatch);
    useEffect(() => {
        ref.current!.addEventListener("mousedown", registerDndItem);
        return () =>
            ref.current!.removeEventListener("mousedown", registerDndItem);
    }, []);
    function onMouseDownHandler(e: React.MouseEvent) {
        if (!e.isDefaultPrevented()) {
            dispatch(
                setSelectedBlock({ id: artBlock.id, withCtrl: e.ctrlKey }),
            );
            e.preventDefault();
        }
    }
    const position: Position = {
        top: artBlock.position.top + offset.top,
        left: artBlock.position.left + offset.left,
    };
    return (
        <div
            ref={ref}
            className={css.art + " " + classNameList}
            style={{
                ...position,
                ...artBlock.size,
            }}
            id={artBlock.id}
            onMouseDown={onMouseDownHandler}
        >
            {artBlkSrc[artBlock.artName]({ artBlock })}
        </div>
    );
}
export default ArtBlock;
