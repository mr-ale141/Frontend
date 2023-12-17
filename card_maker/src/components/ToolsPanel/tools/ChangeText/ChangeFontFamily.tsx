import React from "react";
import commonCss from "../../../../common/Common.module.css";
import { useAppDispatch } from "../../../../data/hooks";
type ChangeSizeProps = {
    currentFontFamily: string;
};
function ChangeFontFamily({ currentFontFamily }: ChangeSizeProps) {
    const { changeFontFamilyText } = useAppDispatch();
    function changeSizeHandler(event: React.ChangeEvent<HTMLSelectElement>) {
        const newFamily = event.target.value;
        changeFontFamilyText(newFamily);
    }
    return (
        <div className={commonCss.tool}>
            <label htmlFor="new-art">Change font family</label>
            <select
                id="new-art"
                defaultValue={currentFontFamily}
                onChange={(event) => changeSizeHandler(event)}
            >
                <option value="Arial">Arial</option>
                <option value="Verdana">Verdana</option>
                <option value="Georgia">Georgia</option>
                <option value="Impact">Impact</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Courier New">Courier New</option>
                <option value="Trebuchet MS">Trebuchet MS</option>
                <option value="Arial Black">Arial Black</option>
                <option value="Comic Sans MS">Comic Sans MS</option>
            </select>
        </div>
    );
}
export default ChangeFontFamily;
