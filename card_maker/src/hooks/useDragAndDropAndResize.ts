import React, { Dispatch, SetStateAction, useEffect } from "react";
import { Position, Size } from "../type/type";
import { useAppDispatch } from "../data/hooks";
import { dhFlags, dwFlags, dxFlags, dyFlags } from "./dataForMode";
import getModeDnD from "../utils/getModeDnD";

type RegisterItemFn = (arg0: MouseEvent) => void;

type useResizeFn = (
    arg0: React.RefObject<HTMLDivElement>,
    arg1: Dispatch<SetStateAction<Position>>,
    arg2: Dispatch<SetStateAction<Size>>,
) => void;

const useDragAndDropAndResize: useResizeFn = (
    ref,
    setOffsetPosition,
    setOffsetSize,
) => {
    const { setNewPosition, setNewSize, setSelectedBlock } = useAppDispatch();
    useEffect(() => {
        ref.current?.addEventListener("mousedown", (e) =>
            onMouseDownHandler(e),
        );
    }, []);
    const registerItem: RegisterItemFn = (mouseDownEvent: MouseEvent) => {
        const currentMode = getModeDnD(mouseDownEvent.target as HTMLElement);
        let offsetPosition: Position;
        let offsetSize: Size;
        const onMouseMove = (dragEvent: MouseEvent) => {
            const offsetMoveX = dragEvent.clientX - mouseDownEvent.clientX;
            const offsetMoveY = dragEvent.clientY - mouseDownEvent.clientY;
            offsetPosition = {
                top: dyFlags[currentMode] * offsetMoveY,
                left: dxFlags[currentMode] * offsetMoveX,
            };
            offsetSize = {
                width: dwFlags[currentMode] * offsetMoveX,
                height: dhFlags[currentMode] * offsetMoveY,
            };
            setOffsetPosition(offsetPosition);
            setOffsetSize(offsetSize);
        };
        const onMouseDrop = () => {
            if (offsetPosition) {
                setNewPosition(offsetPosition);
                setOffsetPosition({ top: 0, left: 0 });
            }
            if (offsetSize) {
                setNewSize(offsetSize);
                setOffsetSize({ width: 0, height: 0 });
            }
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseup", onMouseDrop);
        };
        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseDrop);
    };
    const onMouseDownHandler = (event: MouseEvent) => {
        const inputNewText = document.getElementById("new-text");
        if (!inputNewText && !event.defaultPrevented) {
            const id = (ref.current?.firstChild as HTMLDivElement).id;
            if (id) setSelectedBlock(id, event.ctrlKey);
            registerItem(event);
            event.preventDefault();
        }
    };
};
export default useDragAndDropAndResize;
