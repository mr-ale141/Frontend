import React, { Dispatch, SetStateAction, useEffect } from "react";
import { Position, Size } from "../data/type/type";
import { useAppDispatch } from "../data/hooks";
import { dhFlags, dwFlags, dxFlags, dyFlags, Mode } from "./dataForModeResize";
import getModeDnD from "../utils/getModeDnD";

type RegisterItemFn = (arg0: MouseEvent) => void;

type UseResizeFn = (
    arg0: React.RefObject<HTMLDivElement>,
    arg1: Dispatch<SetStateAction<Position>>,
    arg2: Dispatch<SetStateAction<Size>>,
) => void;

const useDragAndDropAndResize: UseResizeFn = (
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
        const targetMove = mouseDownEvent.target as HTMLElement;
        const currentMode = getModeDnD(targetMove);
        let offsetPosition: Position;
        let offsetSize: Size;
        let ratio: number;
        if (currentMode === Mode.bottomRight) {
            const block = targetMove.parentNode as HTMLElement;
            const height = block.clientHeight;
            const width = block.clientWidth;
            ratio = width / height;
        }
        const onMouseMove = (dragEvent: MouseEvent) => {
            const offsetMoveX = dragEvent.clientX - mouseDownEvent.clientX;
            const offsetMoveY = dragEvent.clientY - mouseDownEvent.clientY;
            offsetPosition = {
                top: dyFlags[currentMode] * offsetMoveY,
                left: dxFlags[currentMode] * offsetMoveX,
            };
            if (
                dragEvent.ctrlKey &&
                currentMode === Mode.bottomRight &&
                offsetSize?.width
            ) {
                offsetSize = {
                    width: dwFlags[currentMode] * offsetMoveX,
                    height: offsetSize.width / ratio,
                };
            } else {
                offsetSize = {
                    width: dwFlags[currentMode] * offsetMoveX,
                    height: dhFlags[currentMode] * offsetMoveY,
                };
            }
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
