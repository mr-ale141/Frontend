import React from "react";
import commonCss from "../../../../common/Common.module.css";
import { useAppDispatch } from "../../../../data/hooks";
import {
    setTextAlignItems,
    setTextJustifyContent,
} from "../../../../data/sessionReducer";
import left from "./left.png";
import center from "./center.png";
import right from "./right.png";
import centerSmall from "./center_small.png";
function ChangeText() {
    const dispatch = useAppDispatch();
    function setHorizontal(e: React.MouseEvent) {
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
                dispatch(setTextJustifyContent("start"));
                break;
            case 1:
                dispatch(setTextJustifyContent("center"));
                break;
            case 2:
                dispatch(setTextJustifyContent("end"));
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
            targetNode.nodeType === 1 && i++;
        }
        switch (i) {
            case 0:
                dispatch(setTextAlignItems("start"));
                break;
            case 1:
                dispatch(setTextAlignItems("center"));
                break;
            case 2:
                dispatch(setTextAlignItems("end"));
                break;
            default:
                break;
        }
    }
    return (
        <div className={commonCss.tool}>
            <div
                className={commonCss.horizontal}
                onClick={(e) => setHorizontal(e)}
            >
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
            <div className={commonCss.vertical} onClick={(e) => setVertical(e)}>
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
export default ChangeText;
