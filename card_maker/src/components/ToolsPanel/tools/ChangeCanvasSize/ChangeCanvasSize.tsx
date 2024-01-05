import React from "react";
import css from "../../ToolsPanel.module.css";
import { useAppDispatch } from "../../../../data/hooks";
import { Size } from "../../../../type/type";
import { Icon } from "@gravity-ui/uikit";
import { Xmark } from "@gravity-ui/icons";

type ChangeCanvasSizeProps = {
    currentSize: Size;
};
const minWidth = 320;
const maxWidth = 800;
const minHeight = 220;
const maxHeight = 500;
function ChangeCanvasSize({ currentSize }: ChangeCanvasSizeProps) {
    const { changeCanvasSize } = useAppDispatch();
    function changeSizeWidth(event: React.ChangeEvent<HTMLInputElement>) {
        const newSize = currentSize;
        newSize.width = Number(event.target.value);
        if (newSize.width < minWidth) newSize.width = minWidth;
        if (newSize.width > maxWidth) newSize.width = maxWidth;
        changeCanvasSize(newSize);
    }
    function changeSizeHeight(event: React.ChangeEvent<HTMLInputElement>) {
        const newSize = currentSize;
        newSize.height = Number(event.target.value);
        if (newSize.height < minHeight) newSize.height = minHeight;
        if (newSize.height > maxHeight) newSize.height = maxHeight;
        changeCanvasSize(newSize);
    }
    return (
        <div className={css.tool}>
            <input
                id="canvas-width"
                type="number"
                min={minWidth}
                max={maxWidth}
                step="1"
                defaultValue={currentSize.width}
                onChange={(event) => changeSizeWidth(event)}
            />
            <Icon className={css.x} data={Xmark} />
            <input
                id="canvas-height"
                type="number"
                min={minHeight}
                max={maxHeight}
                step="1"
                defaultValue={currentSize.height}
                onChange={(event) => changeSizeHeight(event)}
            />
        </div>
    );
}

export default ChangeCanvasSize;
