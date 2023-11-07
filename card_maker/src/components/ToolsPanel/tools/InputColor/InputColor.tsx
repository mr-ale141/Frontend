import React from "react";
import css from "./InputColor.module.css";
import GetColor from "../../../../utils/getColor";
import { setColor } from "../../../../data/sessionReducer";
import { useAppDispatch } from "../../../../data/hooks";
import { Color } from "../../../../type/type";
import getHexColor from "../../../../utils/getHexColor";
import getOpacity from "../../../../utils/getOpacity";

type InputColorProps = {
    color: Color;
};
function InputBGColor({ color }: InputColorProps) {
    const dispatch = useAppDispatch();
    const currentColor = getHexColor(color);
    const currentOpacity = getOpacity(color);
    function changeColor(event: React.ChangeEvent<HTMLInputElement>) {
        const color = GetColor(event.target.value);
        dispatch(setColor(color));
    }
    return (
        <div className={css.color}>
            <label htmlFor="bg-color">Set color</label>
            <input
                id="bg-color"
                type="color"
                defaultValue={currentColor}
                onChange={(event) => changeColor(event)}
            />
            <label htmlFor="bg-opacity">Set color opacity</label>
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
    );
}

export default InputBGColor;
