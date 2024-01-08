import React, { useEffect, useState } from "react";
import css from "../../ToolsPanel.module.css";
import GetColor from "../../../../utils/getColor";
import { useAppDispatch } from "../../../../data/hooks";
import { Button, Icon } from "@gravity-ui/uikit";
import { BucketPaint, Palette } from "@gravity-ui/icons";
import GetRGBA from "../../../../utils/getRGBA";

type ChangeColorProps = {
    currentColor: {
        hexColor: string;
        opacity: number;
    };
    currentBGColor: {
        hexColor: string;
        opacity: number;
    };
    selectedBlocks: Array<string>;
};

function ChangeColor({
    currentColor,
    currentBGColor,
    selectedBlocks,
}: ChangeColorProps) {
    const { setBGColor, setColor } = useAppDispatch();
    const [startColor, setStartColor] = useState(currentColor.hexColor);
    const [startBGColor, setStartBGColor] = useState(currentBGColor.hexColor);
    const saveNewColor = () => {
        const inputColor = document.getElementById("color") as HTMLInputElement;
        const newColor = GetColor(inputColor?.value);
        newColor.a = currentColor.opacity;
        setColor(newColor, selectedBlocks);
    };
    const previewNewColor = () => {
        const inputColor = document.getElementById("color") as HTMLInputElement;
        console.log(inputColor);
        selectedBlocks.forEach((id) => {
            console.log(document.getElementById(id));
        });
    };
    const saveNewOpacity = () => {
        const inputOpacity = document.getElementById(
            "opacity",
        ) as HTMLInputElement;
        const newColor = GetColor(currentColor.hexColor);
        newColor.a = Number(inputOpacity?.value);
        setColor(newColor, selectedBlocks);
    };
    const saveNewBGColor = () => {
        const inputBGColor = document.getElementById(
            "bg-color",
        ) as HTMLInputElement;
        if (currentBGColor.hexColor !== inputBGColor?.value) {
            setStartBGColor(inputBGColor.value);
            const newColor = GetColor(inputBGColor.value);
            newColor.a = currentBGColor.opacity;
            setBGColor(newColor, selectedBlocks);
            console.log("saveBG", newColor);
        }
    };
    const previewNewBGColor = () => {
        const inputBGColor = document.getElementById(
            "bg-color",
        ) as HTMLInputElement;
        const newColor = GetColor(inputBGColor?.value);
        newColor.a = currentBGColor.opacity;
        selectedBlocks.forEach((id) => {
            const block = document.getElementById(id);
            block?.style.setProperty("background-color", GetRGBA(newColor));
        });
    };
    const saveNewBGOpacity = () => {
        const inputBGColor = document.getElementById(
            "bg-opacity",
        ) as HTMLInputElement;
        const color = GetColor(currentBGColor.hexColor);
        color.a = Number(inputBGColor?.value);
        setBGColor(color, selectedBlocks);
    };
    useEffect(() => {
        console.log("mount");
        const inputColor = document.getElementById("color") as HTMLInputElement;
        const inputBGColor = document.getElementById(
            "bg-color",
        ) as HTMLInputElement;
        inputBGColor.value = currentBGColor.hexColor;
        setStartBGColor(currentBGColor.hexColor);
        document.addEventListener("mousedown", () => inputColor?.blur());
        document.addEventListener("mousedown", () => inputBGColor?.blur());
        inputColor.addEventListener("blur", saveNewColor, true);
        inputBGColor.addEventListener("blur", saveNewBGColor, true);
        return () => {
            console.log("unmount");
            inputColor?.blur();
            inputBGColor?.blur();
            inputColor.removeEventListener("blur", saveNewColor, true);
            inputBGColor.removeEventListener("blur", saveNewBGColor, true);
            document.removeEventListener("mousedown", () => inputColor?.blur());
            document.removeEventListener(
                "mousedown",
                () => inputBGColor?.blur(),
            );
        };
    }, [currentBGColor.hexColor, startBGColor]);
    return (
        <>
            <div className={css.tool}>
                <Button
                    view="outlined"
                    title="Color"
                    onClick={() => {
                        const inputColor = document.getElementById(
                            "color",
                        ) as HTMLInputElement;
                        setStartColor(inputColor.value);
                        inputColor?.click();
                        inputColor?.focus();
                    }}
                >
                    <Icon data={Palette} />
                    <span>{"Curr: " + currentColor.hexColor}</span>
                    <span>{"Start:" + startColor}</span>
                </Button>
                <input
                    id="color"
                    type="color"
                    defaultValue={currentColor.hexColor}
                    onChange={previewNewColor}
                />
                <input
                    id="opacity"
                    type="number"
                    min="0"
                    max="1"
                    step="0.1"
                    placeholder={`${currentColor.opacity}%`}
                    onChange={saveNewOpacity}
                />
            </div>
            <div className={css.tool}>
                <Button
                    view="outlined"
                    title="BG Color"
                    onClick={() => {
                        const inputBGColor = document.getElementById(
                            "bg-color",
                        ) as HTMLInputElement;
                        if (inputBGColor.value !== currentBGColor.hexColor) {
                            console.log(
                                "MOUNT: inputBGColor.value !== startBGColor",
                            );
                            inputBGColor.defaultValue = currentBGColor.hexColor;
                            setStartBGColor(currentBGColor.hexColor);
                        }
                        console.log("clickBG");
                        inputBGColor?.click();
                        inputBGColor?.focus();
                    }}
                >
                    <Icon data={BucketPaint} />
                    <span>{"CurrBG: " + currentBGColor.hexColor}</span>
                    <span>{" | StartBG:" + startBGColor}</span>
                </Button>
                <input
                    id="bg-color"
                    type="color"
                    defaultValue={currentBGColor.hexColor}
                    onChange={previewNewBGColor}
                />
                <input
                    id="bg-opacity"
                    type="number"
                    min="0"
                    max="1"
                    step="0.1"
                    placeholder={`${currentBGColor.opacity}%`}
                    onChange={saveNewBGOpacity}
                />
            </div>
        </>
    );
}

export default ChangeColor;
