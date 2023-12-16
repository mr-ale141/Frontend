import React from "react";
import commonCss from "../../../../common/Common.module.css";
import GetColor from "../../../../utils/getColor";
import { useAppDispatch } from "../../../../data/hooks";

type ChangeColorProps = {
    currentColor: {
        hexColor: string;
        opacity: number;
    };
    currentBGColor: {
        hexColor: string;
        opacity: number;
    };
};

function ChangeColor({ currentColor, currentBGColor }: ChangeColorProps) {
    const { setBGColor, setColor } = useAppDispatch();
    function changeColor(event: React.ChangeEvent<HTMLInputElement>) {
        const color = GetColor(event.target.value);
        color.a = currentColor.opacity;
        setColor(color);
    }
    function changeOpacity(event: React.ChangeEvent<HTMLInputElement>) {
        const color = GetColor(currentColor.hexColor);
        color.a = Number(event.target.value);
        setColor(color);
    }
    function changeBGColor(event: React.ChangeEvent<HTMLInputElement>) {
        const color = GetColor(event.target.value);
        color.a = currentBGColor.opacity;
        setBGColor(color);
    }
    function changeBGOpacity(event: React.ChangeEvent<HTMLInputElement>) {
        const color = GetColor(currentBGColor.hexColor);
        color.a = Number(event.target.value);
        setBGColor(color);
    }
    return (
        <>
            <div className={commonCss.tool}>
                <label htmlFor="bg-color">Change color</label>
                <input
                    id="bg-color"
                    type="color"
                    defaultValue={currentColor.hexColor}
                    onChange={(event) => changeColor(event)}
                />
                <label htmlFor="bg-opacity">Change opacity</label>
                <input
                    id="bg-opacity"
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    defaultValue={currentColor.opacity}
                    onChange={(event) => changeOpacity(event)}
                />
            </div>
            <div className={commonCss.tool}>
                <label htmlFor="bg-color">Change BG color</label>
                <input
                    id="bg-color"
                    type="color"
                    defaultValue={currentBGColor.hexColor}
                    onChange={(event) => changeBGColor(event)}
                />
                <label htmlFor="bg-opacity">Change BG opacity</label>
                <input
                    id="bg-opacity"
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    defaultValue={currentBGColor.opacity}
                    onChange={(event) => changeBGOpacity(event)}
                />
            </div>
        </>
    );
}

export default ChangeColor;
