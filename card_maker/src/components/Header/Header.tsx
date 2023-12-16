import css from "./Header.module.css";
import HeadButton from "./HeadButton/HeadButton";
import undoIcon from "./icons/undo.png";
import redoIcon from "./icons/redo.png";
import saveIcon from "./icons/save.png";
import html2canvas from "html2canvas";
import { useAppDispatch, useAppSelector } from "../../data/hooks";
import React from "react";

function Header() {
    const { setSelectedBlock } = useAppDispatch();
    const canvasId = useAppSelector((state) => state.template.canvas.id);
    function onMouseDownHandler(event: React.MouseEvent) {
        const inputNewText = document.getElementById("new-text");
        if (!inputNewText) {
            if (!event.isDefaultPrevented()) {
                setSelectedBlock("", event.ctrlKey);
                event.preventDefault();
            }
        }
    }
    function saveHandler() {
        setSelectedBlock("", false);
        const canvasDiv = document.getElementById(canvasId);
        html2canvas(canvasDiv as HTMLElement, {
            allowTaint: true,
            useCORS: true,
        }).then((canvas) => {
            const dataURL = canvas.toDataURL("image/jpeg");
            const link = document.createElement("a");
            link.href = dataURL;
            link.download = "card_maker_image.jpg";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }
    return (
        <div className={css.header} onMouseDown={onMouseDownHandler}>
            <div className={css.logo}>
                <span>Card Maker</span>
            </div>
            <HeadButton handler={saveHandler} icon={saveIcon} alt="save" />
            <HeadButton
                handler={() => console.log("not handler!!")}
                icon={undoIcon}
                alt="undo"
            />
            <HeadButton
                handler={() => console.log("not handler!!")}
                icon={redoIcon}
                alt="redo"
            />
        </div>
    );
}
export default Header;
