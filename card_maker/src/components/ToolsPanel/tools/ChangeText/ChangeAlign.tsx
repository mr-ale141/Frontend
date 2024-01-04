import React from "react";
import commonCss from "../../../../common/Common.module.css";
import { useAppDispatch } from "../../../../data/hooks";
import left from "./icon/left.png";
import center from "./icon/center.png";
import right from "./icon/right.png";
import centerSmall from "./icon/center_small.png";
function ChangeAlign() {
    const { setTextAlignItems, setTextJustifyContent } = useAppDispatch();
    function setHorizontal(e: React.MouseEvent) {
        let targetNode = e.target as ChildNode;
        while (targetNode.nodeName !== "DIV")
            if (targetNode.parentElement) targetNode = targetNode.parentElement;
        let i = 0;
        while (targetNode.previousSibling) {
            targetNode = targetNode.previousSibling;
            if (targetNode.nodeType === 1) i++;
        }
        switch (i) {
            case 0:
                setTextJustifyContent("start");
                break;
            case 1:
                setTextJustifyContent("center");
                break;
            case 2:
                setTextJustifyContent("end");
                break;
            default:
                break;
        }
    }
    function setVertical(e: React.MouseEvent) {
        let targetNode = e.target as ChildNode;
        while (targetNode.nodeName !== "DIV")
            if (targetNode.parentElement) targetNode = targetNode.parentElement;
        let i = 0;
        while (targetNode.previousSibling) {
            targetNode = targetNode.previousSibling;
            if (targetNode.nodeType === 1) i++;
        }
        switch (i) {
            case 0:
                setTextAlignItems("start");
                break;
            case 1:
                setTextAlignItems("center");
                break;
            case 2:
                setTextAlignItems("end");
                break;
            default:
                break;
        }
    }
    return (
        <div className={commonCss.tool}>
            <div className={commonCss.text} onClick={(e) => setHorizontal(e)}>
                <div>
                    <img src={left} alt="left" />
                </div>
                <div>
                    <img src={center} alt="center" />
                </div>
                <div>
                    <img src={right} alt="right" />
                </div>
            </div>
            <div className={commonCss.text} onClick={(e) => setVertical(e)}>
                <div>
                    <img src={centerSmall} alt="top" />
                </div>
                <div>
                    <img
                        src={centerSmall}
                        style={{ marginTop: 10 }}
                        alt="center"
                    />
                </div>
                <div>
                    <img
                        src={centerSmall}
                        style={{ marginTop: 16 }}
                        alt="bottom"
                    />
                </div>
            </div>
        </div>
    );
}

export default ChangeAlign;
