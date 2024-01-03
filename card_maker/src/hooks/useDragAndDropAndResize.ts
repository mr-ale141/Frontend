import React, { Dispatch, SetStateAction, useEffect } from "react";
import { Position, Size } from "../type/type";
import { useAppDispatch } from "../data/hooks";
import { dhFlags, dwFlags, dxFlags, dyFlags, mode } from "./dataForMode";

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
        let currentMode: mode;
        const target = mouseDownEvent.target as HTMLElement;
        const targetClassName = target.className;
        if (target.tagName !== "DIV" || !targetClassName.includes("resize")) {
            currentMode = mode.drag;
        } else if (targetClassName.includes("top-left")) {
            currentMode = mode.topLeft;
        } else if (targetClassName.includes("top-center")) {
            currentMode = mode.topCenter;
        } else if (targetClassName.includes("top-right")) {
            currentMode = mode.topRight;
        } else if (targetClassName.includes("right-center")) {
            currentMode = mode.rightCenter;
        } else if (targetClassName.includes("bottom-right")) {
            currentMode = mode.bottomRight;
        } else if (targetClassName.includes("bottom-center")) {
            currentMode = mode.bottomCenter;
        } else if (targetClassName.includes("bottom-left")) {
            currentMode = mode.bottomLeft;
        } else if (targetClassName.includes("left-center")) {
            currentMode = mode.leftCenter;
        }
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
