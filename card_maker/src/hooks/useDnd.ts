import { Position } from "../type/type";
import { Dispatch, SetStateAction } from "react";
import { useAppDispatch } from "../data/hooks";

type RegisterDndItemFn = (arg0: React.MouseEvent) => void;

type useDndFn = (arg0: Dispatch<SetStateAction<Position>>) => RegisterDndItemFn;

const useDnd: useDndFn = (setOffset) => {
    const { setNewPosition } = useAppDispatch();
    const registerDndItem: RegisterDndItemFn = (
        mouseDownEvent: React.MouseEvent,
    ) => {
        let newOffset: Position;
        const onMouseMove = (dragEvent: MouseEvent) => {
            newOffset = {
                top: dragEvent.clientY - mouseDownEvent.clientY,
                left: dragEvent.clientX - mouseDownEvent.clientX,
            };
            setOffset(newOffset);
        };
        const onMouseDrop = () => {
            if (newOffset) {
                setNewPosition(newOffset);
                setOffset({ top: 0, left: 0 });
            }
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseup", onMouseDrop);
        };
        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseDrop);
    };
    return registerDndItem;
};
export { useDnd };
