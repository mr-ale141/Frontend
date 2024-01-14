import React from "react";
import css from "../../../ToolsPanel/ToolsPanel.module.css";
import { useAppDispatch } from "../../../../data/hooks";
import { Button, Icon, Select } from "@gravity-ui/uikit";
import { Bold, Italic, Underline } from "@gravity-ui/icons";
import { optionsFamily, optionsSize } from "./getTextStyleOptions";
type ChangeSizeProps = {
    currentSize: number;
    currentFontFamily: string;
};
function ChangeStyle({ currentSize, currentFontFamily }: ChangeSizeProps) {
    const { changeStyleText, changeFontFamilyText, changeSizeText } =
        useAppDispatch();
    return (
        <>
            <div className={css.tool}>
                <Button
                    view="outlined"
                    onClick={() => changeStyleText("bold")}
                    title="Left"
                >
                    <Icon data={Bold} />
                </Button>
                <Button
                    view="outlined"
                    onClick={() => changeStyleText("italic")}
                    title="Center"
                >
                    <Icon data={Italic} />
                </Button>
                <Button
                    view="outlined"
                    onClick={() => changeStyleText("underline")}
                    title="Right"
                >
                    <Icon data={Underline} />
                </Button>
            </div>
            <div className={css.tool}>
                <Select
                    label="Size:"
                    width={95}
                    className={css.select}
                    defaultValue={[currentSize.toString()]}
                    onUpdate={(newValue) =>
                        changeSizeText(parseInt(newValue[0], 10))
                    }
                    options={optionsSize}
                />
            </div>
            <div className={css.tool}>
                <Select
                    label="Family:"
                    width={125}
                    className={css.select}
                    defaultValue={[currentFontFamily]}
                    onUpdate={(newValue) => changeFontFamilyText(newValue[0])}
                    options={optionsFamily}
                />
            </div>
        </>
    );
}

export default ChangeStyle;
