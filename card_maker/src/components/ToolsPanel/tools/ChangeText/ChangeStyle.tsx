import React from "react";
import commonCss from "../../../../common/Common.module.css";
import { useAppDispatch } from "../../../../data/hooks";
import bold from "./icon/bold.png";
import italic from "./icon/italic.png";
import underline from "./icon/underline.png";
type ChangeSizeProps = {
    currentSize: number;
    currentFontFamily: string;
};
function ChangeStyle({ currentSize, currentFontFamily }: ChangeSizeProps) {
    const { changeStyleText, changeFontFamilyText, changeSizeText } =
        useAppDispatch();
    function changeFontHandler(event: React.ChangeEvent<HTMLSelectElement>) {
        const newFamily = event.target.value;
        changeFontFamilyText(newFamily);
    }
    function changeSizeHandler(event: React.ChangeEvent<HTMLSelectElement>) {
        const strNum = event.target.value;
        const num = parseInt(strNum, 10);
        changeSizeText(num);
    }
    function setStyle(e: React.MouseEvent) {
        let targetNode = e.target as ChildNode;
        while (targetNode.nodeName !== "DIV")
            if (targetNode.parentElement) targetNode = targetNode.parentElement;
        let i = 0;
        while (targetNode.previousSibling) {
            targetNode = targetNode.previousSibling;
            targetNode.nodeType === 1 && i++;
        }
        switch (i) {
            case 0:
                changeStyleText("bold");
                break;
            case 1:
                changeStyleText("italic");
                break;
            case 2:
                changeStyleText("underline");
                break;
            default:
                break;
        }
    }
    return (
        <div className={commonCss.tool}>
            <div className={commonCss.text} onClick={(e) => setStyle(e)}>
                <div>
                    <img src={bold} alt="bolt" />
                </div>
                <div>
                    <img src={italic} alt="italic" />
                </div>
                <div>
                    <img src={underline} alt="underline" />
                </div>
            </div>
            <div>
                <select
                    id="new-art"
                    defaultValue={currentSize}
                    onChange={(event) => changeSizeHandler(event)}
                >
                    <option value="10">10</option>
                    <option value="12">12</option>
                    <option value="14">14</option>
                    <option value="16">16</option>
                    <option value="18">18</option>
                    <option value="20">20</option>
                    <option value="22">22</option>
                </select>
                <select
                    id="new-art"
                    defaultValue={currentFontFamily}
                    onChange={(event) => changeFontHandler(event)}
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
        </div>
    );
}

export default ChangeStyle;
