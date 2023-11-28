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
import React, { useEffect, useRef } from "react";
import { RegisterDndItemFn } from "../../hooks/useDnd";
import { useAppDispatch } from "../../data/hooks";
import { setSelectedBlock } from "../../data/sessionReducer";

type ArtBlkProps = {
    artBlock: ArtBlockType;
    isSelected: boolean;
    registerDndItem: RegisterDndItemFn;
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
function ArtBlock({ artBlock, isSelected, registerDndItem }: ArtBlkProps) {
    let classNameList = commonCss.border + " " + commonCss.draggable;
    if (isSelected) {
        classNameList += " " + commonCss.selected;
    }
    const dispatch = useAppDispatch();
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const { onDragStart } = registerDndItem(ref);
        const onMouseDown = (mouseDownEvent: MouseEvent) => {
            dispatch(
                setSelectedBlock({
                    id: artBlock.id,
                    withCtrl: mouseDownEvent.ctrlKey,
                }),
            );
            onDragStart({
                onDrag: (dragEvent) => {
                    ref.current!.style.zIndex = "1";
                    ref.current!.style.top = `${
                        artBlock.position.top +
                        dragEvent.clientY -
                        mouseDownEvent.clientY
                    }px`;
                    ref.current!.style.left = `${
                        artBlock.position.left +
                        dragEvent.clientX -
                        mouseDownEvent.clientX
                    }px`;
                },
                onDrop: () => {
                    ref.current!.style.zIndex = "";
                },
            });
        };
        const control = ref.current!;
        control.addEventListener("mousedown", onMouseDown);
        return () => control.removeEventListener("mousedown", onMouseDown);
    }, [artBlock.position, registerDndItem]);
    function onMouseDownHandler(e: React.MouseEvent) {
        if (!e.isDefaultPrevented()) {
            dispatch(
                setSelectedBlock({ id: artBlock.id, withCtrl: e.ctrlKey }),
            );
        }
        e.preventDefault();
    }
    return (
        <div
            ref={ref}
            className={css.art + " " + classNameList}
            style={{
                ...artBlock.position,
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
