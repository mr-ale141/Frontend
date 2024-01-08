import React, { useEffect } from "react";
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
    const saveNewColor = () => {
        const inputColor = document.getElementById("color") as HTMLInputElement;
        const newColor = GetColor(inputColor?.value);
        newColor.a = currentColor.opacity;
        setColor(newColor, selectedBlocks);
    };
    const previewNewColor = () => {
        const inputColor = document.getElementById("color") as HTMLInputElement;
        const newColor = GetColor(inputColor?.value);
        newColor.a = currentColor.opacity;
        selectedBlocks.forEach((id) => {
            const block = document.getElementById(id);
            if (block?.className.includes("Text")) {
                (block?.firstChild as HTMLElement).style.setProperty(
                    "color",
                    GetRGBA(newColor),
                );
            } else if (block?.className.includes("Art")) {
                (block?.firstChild as HTMLElement).setAttribute(
                    "fill",
                    GetRGBA(newColor),
                );
            }
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
            const newColor = GetColor(inputBGColor.value);
            newColor.a = currentBGColor.opacity;
            setBGColor(newColor, selectedBlocks);
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
        const inputColor = document.getElementById("color") as HTMLInputElement;
        const inputBGColor = document.getElementById(
            "bg-color",
        ) as HTMLInputElement;
        const inputOpacity = document.getElementById(
            "opacity",
        ) as HTMLInputElement;
        const inputBGOpacity = document.getElementById(
            "bg-opacity",
        ) as HTMLInputElement;
        inputBGColor.value = currentBGColor.hexColor;
        inputColor.value = currentColor.hexColor;
        inputOpacity.value = "";
        inputBGOpacity.value = "";
        document.addEventListener("mousedown", () => inputColor?.blur());
        document.addEventListener("mousedown", () => inputBGColor?.blur());
        inputColor.addEventListener("blur", saveNewColor, true);
        inputBGColor.addEventListener("blur", saveNewBGColor, true);
        return () => {
            inputColor.blur();
            inputBGColor.blur();
            inputOpacity.blur();
            inputBGOpacity.blur();
            inputColor.removeEventListener("blur", saveNewColor, true);
            inputBGColor.removeEventListener("blur", saveNewBGColor, true);
            document.removeEventListener("mousedown", () => inputColor?.blur());
            document.removeEventListener(
                "mousedown",
                () => inputBGColor?.blur(),
            );
        };
    }, [
        currentBGColor.hexColor,
        currentBGColor.opacity,
        currentColor.hexColor,
        currentColor.opacity,
    ]);
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
                        inputColor?.click();
                        inputColor?.focus();
                    }}
                >
                    <Icon data={Palette} />
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
                    onFocus={(e) =>
                        (e.target.value = currentColor.opacity.toString())
                    }
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
                        inputBGColor?.click();
                        inputBGColor?.focus();
                    }}
                >
                    <Icon data={BucketPaint} />
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
                    onFocus={(e) =>
                        (e.target.value = currentBGColor.opacity.toString())
                    }
                />
            </div>
        </>
    );
}

export default ChangeColor;
