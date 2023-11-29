import css from "./ImageBlock.module.css";
import commonCss from "../../common/Common.module.css";
import { ImageBlockType } from "../../type/type";
import React, { useEffect, useRef } from "react";
import { RegisterDndItemFn } from "../../hooks/useDnd";
import { useAppDispatch } from "../../data/hooks";
import { setSelectedBlock } from "../../data/sessionReducer";

type imageBlockProps = {
    imageBlock: ImageBlockType;
    isSelected: boolean;
    registerDndItem: RegisterDndItemFn;
};
function ImageBlock({
    imageBlock,
    isSelected,
    registerDndItem,
}: imageBlockProps) {
    let classNameList = commonCss.border + " " + commonCss.draggable;
    if (isSelected) {
        classNameList += " " + commonCss.selected;
    }
    const dispatch = useAppDispatch();
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const { onDragStart } = registerDndItem(ref);
        const onMouseDown = (mouseDownEvent: MouseEvent) => {
            mouseDownEvent.preventDefault();
            dispatch(
                setSelectedBlock({
                    id: imageBlock.id,
                    withCtrl: mouseDownEvent.ctrlKey,
                }),
            );
            onDragStart({
                onDrag: (dragEvent) => {
                    ref.current!.style.zIndex = "1";
                    ref.current!.style.top = `${
                        imageBlock.position.top +
                        dragEvent.clientY -
                        mouseDownEvent.clientY
                    }px`;
                    ref.current!.style.left = `${
                        imageBlock.position.left +
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
    }, [imageBlock.position, registerDndItem]);
    function onMouseDownHandler(e: React.MouseEvent) {
        if (!e.isDefaultPrevented()) {
            dispatch(
                setSelectedBlock({
                    id: imageBlock.id,
                    withCtrl: e.ctrlKey,
                }),
            );
            e.preventDefault();
        }
    }
    return (
        <div
            ref={ref}
            className={css.image + " " + classNameList}
            style={{ ...imageBlock.size, ...imageBlock.position }}
            id={imageBlock.id}
            onMouseDown={onMouseDownHandler}
        >
            <img src={imageBlock.bgImage.data} alt="img" />
        </div>
    );
}
export default ImageBlock;
