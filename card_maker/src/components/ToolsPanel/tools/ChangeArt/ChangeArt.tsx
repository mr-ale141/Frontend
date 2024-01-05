import React from "react";
import css from "../../ToolsPanel.module.css";
import { useAppDispatch } from "../../../../data/hooks";
import { Select } from "@gravity-ui/uikit";
import options from "./getArtOptions";

function ChangeArt() {
    const { changeArt } = useAppDispatch();
    function changeArtHandler(newValue: string[]) {
        const num = parseInt(newValue[0], 10);
        changeArt(num);
    }
    return (
        <>
            <div className={css.tool}>
                <Select
                    label="Art"
                    width={75}
                    className={css.select}
                    onUpdate={(newValue) => changeArtHandler(newValue)}
                    options={options}
                />
            </div>
            <div className={css.line} />
        </>
    );
}

export default ChangeArt;
