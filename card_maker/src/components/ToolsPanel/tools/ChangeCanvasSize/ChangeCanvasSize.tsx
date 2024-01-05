import React from "react";
import css from "../../ToolsPanel.module.css";
import { useAppDispatch } from "../../../../data/hooks";
import { Size } from "../../../../type/type";
import { Icon } from "@gravity-ui/uikit";
import { Xmark } from "@gravity-ui/icons";

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
        <>
            <div className={css.tool}>
                <input
                    id="canvas-width"
                    type="number"
                    min="10"
                    max="800"
                    step="1"
                    defaultValue={currentSize.width}
                    onChange={(event) => changeSizeWidth(event)}
                />
                <Icon className={css.x} data={Xmark} />
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
            <div className={css.line} />
        </>
    );
}

export default ChangeCanvasSize;
