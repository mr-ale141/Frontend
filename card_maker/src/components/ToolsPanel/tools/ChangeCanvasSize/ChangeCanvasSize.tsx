import React from "react";
import commonCss from "../../../../common/Common.module.css";
import { useAppDispatch } from "../../../../data/hooks";
import { Size } from "../../../../type/type";

type ChangeCanvasSizeProps = {
    currentSize: Size;
};
function ChangeCanvasSize({ currentSize }: ChangeCanvasSizeProps) {
    const { changeCanvasSize } = useAppDispatch();
    function changeSizeWidth(event: React.ChangeEvent<HTMLInputElement>) {
        const newSize = currentSize;
        newSize.width = Number(event.target.value);
        changeCanvasSize(newSize);
    }
    function changeSizeHeight(event: React.ChangeEvent<HTMLInputElement>) {
        const newSize = currentSize;
        newSize.height = Number(event.target.value);
        changeCanvasSize(newSize);
    }
    return (
        <div className={commonCss.tool}>
            <div>Canvas</div>
            <input
                id="canvas-width"
                type="number"
                min="10"
                max="800"
                step="1"
                defaultValue={currentSize.width}
                onChange={(event) => changeSizeWidth(event)}
            />
            <div>X</div>
            <input
                id="canvas-height"
                type="number"
                min="10"
                max="500"
                step="1"
                defaultValue={currentSize.height}
                onChange={(event) => changeSizeHeight(event)}
            />
        </div>
    );
}

export default ChangeCanvasSize;
