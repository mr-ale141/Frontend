import React from "react";
import css from "./InputColor.module.css";
import GetColor from "../../../../utils/getColor";
import { setColor } from "../../../../data/sessionReducer";
import { useAppDispatch } from "../../../../data/hooks";

function InputBGColor() {
    const dispatch = useAppDispatch();
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
                onChange={(event) => changeColor(event)}
            />
            <label htmlFor="bg-opacity">Set color opacity</label>
            <input
                id="bg-opacity"
                type="range"
                min="0"
                max="1"
                step="0.1"
                onChange={(event) => changeColor(event)}
            />
        </div>
    );
}

export default InputBGColor;
