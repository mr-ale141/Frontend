import { Position } from "../type/type";
import { Dispatch, RefObject, SetStateAction } from "react";
import { setNewPosition } from "../data/sessionReducer";
import { useAppDispatch } from "../data/hooks";

type OnDragStartFn = (event: MouseEvent) => void;

type RegisterDndItemFn = (
    arg1: RefObject<HTMLDivElement>,
    arg2: Position,
    arg3: Dispatch<SetStateAction<{ top: number; left: number }>>,
) => {
    onDragStart: OnDragStartFn;
};

function useDnd() {
    const dispatch = useAppDispatch();
    const registerDndItem: RegisterDndItemFn = (
        elementRef: RefObject<HTMLDivElement>,
        offset,
        setOffset,
    ) => {
        const onDragStart: OnDragStartFn = (mouseDownEvent) => {
            const onMouseMove = (dragEvent: MouseEvent) => {
                const newOffset = {
                    top: dragEvent.clientY - mouseDownEvent.clientY,
                    left: dragEvent.clientX - mouseDownEvent.clientX,
                };
                setOffset(newOffset);
            };
            const onMouseDrop = () => {
                dispatch(setNewPosition(offset));
                // setOffset({ top: 0, left: 0 });
                elementRef.current!.removeEventListener(
                    "mousemove",
                    onMouseMove,
                );
                elementRef.current!.removeEventListener("mouseup", onMouseDrop);
            };
            elementRef.current!.addEventListener("mousemove", onMouseMove);
            elementRef.current!.addEventListener("mouseup", onMouseDrop);
        };
        return {
            onDragStart,
        };
    };
    return registerDndItem;
}

export { useDnd };
export type { RegisterDndItemFn };
