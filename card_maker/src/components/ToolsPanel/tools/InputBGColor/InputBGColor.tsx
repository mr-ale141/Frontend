import React from "react";
import css from "./InputBGColor.module.css";
import GetColor from "../../../../utils/getColor";
import { setBGColorBlock } from "../../../../data/sessionReducer";
import { useAppDispatch } from "../../../../data/hooks";

function InputBGColor() {
    const dispatch = useAppDispatch();
    function setColor(event: React.ChangeEvent<HTMLInputElement>) {
        console.log(event.target.value);
        const color = GetColor(event.target.value);
        console.log(color);
        dispatch(setBGColorBlock(color));
    }
    return (
        <div className={css.color}>
            <label htmlFor="bg-color">Set BG color</label>
            <input
                id="bg-color"
                type="color"
                onChange={(event) => setColor(event)}
            />
            <label htmlFor="bg-opacity">Set BG opacity</label>
            <input
                id="bg-opacity"
                type="range"
                min="0"
                max="1"
                step="0.1"
                onChange={(event) => setColor(event)}
            />
        </div>
    );
}

export default InputBGColor;
