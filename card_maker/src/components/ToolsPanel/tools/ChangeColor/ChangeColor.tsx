import React, { useRef } from "react";
import css from "../../ToolsPanel.module.css";
import GetColor from "../../../../utils/getColor";
import { useAppDispatch } from "../../../../data/hooks";
import { Button, Icon } from "@gravity-ui/uikit";
import { BucketPaint, Palette } from "@gravity-ui/icons";

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

    const refColor = useRef(null);
    return (
        <>
            <div className={css.tool}>
                <Button
                    view="outlined"
                    title="Color"
                    onClick={() => document.getElementById("color")?.click()}
                >
                    <Icon data={Palette} />
                </Button>
                <input
                    ref={refColor}
                    id="color"
                    type="color"
                    defaultValue={currentColor.hexColor}
                    onChange={(event) => changeColor(event)}
                />
                <input
                    id="opacity"
                    type="number"
                    min="0"
                    max="1"
                    step="0.1"
                    placeholder={`${currentColor.opacity}%`}
                    onChange={(event) => changeOpacity(event)}
                />
            </div>
            <div className={css.tool}>
                <Button
                    view="outlined"
                    title="Color"
                    onClick={() => document.getElementById("bg-color")?.click()}
                >
                    <Icon data={BucketPaint} />
                </Button>
                <input
                    id="bg-color"
                    type="color"
                    defaultValue={currentBGColor.hexColor}
                    onChange={(event) => changeBGColor(event)}
                />
                <input
                    id="bg-opacity"
                    type="number"
                    min="0"
                    max="1"
                    step="0.1"
                    placeholder={`${currentBGColor.opacity}%`}
                    onChange={(event) => changeBGOpacity(event)}
                />
            </div>
        </>
    );
}

export default ChangeColor;
