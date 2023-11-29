import React from "react";
import commonCss from "../../../../common/Common.module.css";
import GetColor from "../../../../utils/getColor";
import { setBGColor, setColor } from "../../../../data/sessionReducer";
import { useAppDispatch } from "../../../../data/hooks";

function ChangeColor() {
    const dispatch = useAppDispatch();
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
                    onChange={(event) => changeColor(event)}
                />
                <label htmlFor="bg-opacity">Change opacity</label>
                <input
                    id="bg-opacity"
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    onChange={(event) => changeColor(event)}
                />
            </div>
            <div className={commonCss.tool}>
                <label htmlFor="bg-color">Change BG color</label>
                <input
                    id="bg-color"
                    type="color"
                    onChange={(event) => changeBGColor(event)}
                />
                <label htmlFor="bg-opacity">Change BG opacity</label>
                <input
                    id="bg-opacity"
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    onChange={(event) => changeBGColor(event)}
                />
            </div>
        </>
    );
}

export default ChangeColor;
