import React from "react";
import css from "./InputBGColor.module.css";
import GetColor from "../../../../utils/getColor";
import { setBGColor } from "../../../../data/sessionReducer";
import { useAppDispatch } from "../../../../data/hooks";
import { Color } from "../../../../type/type";
import getHexColor from "../../../../utils/getHexColor";
import getOpacity from "../../../../utils/getOpacity";

type InputBGColorProps = {
    bgColor: Color;
};
function InputBGColor({ bgColor }: InputBGColorProps) {
    const dispatch = useAppDispatch();
    const currentColor = getHexColor(bgColor);
    const currentOpacity = getOpacity(bgColor);
    function changeBGColor(event: React.ChangeEvent<HTMLInputElement>) {
        const color = GetColor(event.target.value);
        dispatch(setBGColor(color));
    }
    return (
        <div className={css.color}>
            <label htmlFor="bg-color">Set BG color</label>
            <input
                id="bg-color"
                type="color"
                defaultValue={currentColor}
                onChange={(event) => changeBGColor(event)}
            />
            <label htmlFor="bg-opacity">Set BG opacity</label>
            <input
                id="bg-opacity"
                type="range"
                min="0"
                max="1"
                step="0.1"
                defaultValue={currentOpacity}
                onChange={(event) => changeBGColor(event)}
            />
        </div>
    );
}

export default InputBGColor;
