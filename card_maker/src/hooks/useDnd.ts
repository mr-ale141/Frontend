import { Position } from "../type/type";
import { RefObject, useCallback } from "react";

type OnDragStartFn = (args: {
    onDrag: (event: MouseEvent) => void;
    onDrop: (event: MouseEvent) => void;
}) => void;

type RegisterDndItemFn = (arg: RefObject<HTMLDivElement>) => {
    onDragStart: OnDragStartFn;
};

type useDndParams = {
    onChangePosition: (offset: Position) => void;
};

function useDnd({ onChangePosition }: useDndParams) {
    const registerDndItem = useCallback(
        (elementRef: RefObject<HTMLDivElement>) => {
            const onDragStart: OnDragStartFn = ({ onDrag, onDrop }) => {
                const startPositionPage = {
                    top: elementRef.current!.getBoundingClientRect().top,
                    left: elementRef.current!.getBoundingClientRect().left,
                };
                const onMouseUp = (event: MouseEvent) => {
                    const offset: Position = { top: 0, left: 0 };
                    const endPositionPage = {
                        top: elementRef.current!.getBoundingClientRect().top,
                        left: elementRef.current!.getBoundingClientRect().left,
                    };
                    offset.top = endPositionPage.top - startPositionPage.top;
                    offset.left = endPositionPage.left - startPositionPage.left;
                    onChangePosition(offset);
                    onDrop(event);
                    elementRef.current!.removeEventListener(
                        "mousemove",
                        onDrag,
                    );
                    elementRef.current!.removeEventListener(
                        "mouseup",
                        onMouseUp,
                    );
                };
                elementRef.current!.addEventListener("mousemove", onDrag);
                elementRef.current!.addEventListener("mouseup", onMouseUp);
            };
            return {
                onDragStart,
            };
        },
        [onChangePosition],
    );
    return {
        registerDndItem,
    };
}

export { useDnd };
export type { RegisterDndItemFn };
