import React from "react";
import commonCss from "../../../../common/Common.module.css";
import GetColor from "../../../../utils/getColor";
import { setBGColor, setColor } from "../../../../data/sessionReducer";
import { useAppDispatch } from "../../../../data/hooks";
import { Color } from "../../../../type/type";
import getHexColor from "../../../../utils/getHexColor";
import getOpacity from "../../../../utils/getOpacity";

type InputColorProps = {
    color: Color;
    bgColor: Color;
};
function ChangeColor({ color, bgColor }: InputColorProps) {
    const dispatch = useAppDispatch();
    const currentColor = getHexColor(color);
    const currentOpacity = getOpacity(color);
    const currentBgColor = getHexColor(bgColor);
    const currentBgOpacity = getOpacity(bgColor);
    function changeColor(event: React.ChangeEvent<HTMLInputElement>) {
        const color = GetColor(event.target.value);
        dispatch(setColor(color));
    }
    function changeBGColor(event: React.ChangeEvent<HTMLInputElement>) {
        const color = GetColor(event.target.value);
        dispatch(setBGColor(color));
    }
    return (
        <>
            <div className={commonCss.tool}>
                <label htmlFor="bg-color">Change color</label>
                <input
                    id="bg-color"
                    type="color"
                    defaultValue={currentColor}
                    onChange={(event) => changeColor(event)}
                />
                <label htmlFor="bg-opacity">Change opacity</label>
                <input
                    id="bg-opacity"
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    defaultValue={currentOpacity}
                    onChange={(event) => changeColor(event)}
                />
            </div>
            <div className={commonCss.tool}>
                <label htmlFor="bg-color">Change BG color</label>
                <input
                    id="bg-color"
                    type="color"
                    defaultValue={currentBgColor}
                    onChange={(event) => changeBGColor(event)}
                />
                <label htmlFor="bg-opacity">Change BG opacity</label>
                <input
                    id="bg-opacity"
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    defaultValue={currentBgOpacity}
                    onChange={(event) => changeBGColor(event)}
                />
            </div>
        </>
    );
}

export default ChangeColor;
