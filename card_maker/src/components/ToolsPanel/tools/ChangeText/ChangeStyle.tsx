import React from "react";
import commonCss from "../../../../common/Common.module.css";
import { useAppDispatch } from "../../../../data/hooks";
import bold from "./icon/bold.png";
import italic from "./icon/italic.png";
import underline from "./icon/underline.png";
function ChangeStyle() {
    const { changeStyleText } = useAppDispatch();
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
        </div>
    );
}

export default ChangeStyle;
