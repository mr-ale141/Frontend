import css from "./Header.module.css";
import { ActionCreators } from "redux-undo";
import HeadButton from "./HeadButton/HeadButton";
import undoIcon from "./icons/undo.png";
import redoIcon from "./icons/redo.png";
import saveIcon from "./icons/save.png";
import html2canvas from "html2canvas";
import { useAppDispatch, useAppSelector } from "../../data/hooks";
import { sessionState, setSelectedBlock } from "../../data/sessionReducer";
import React from "react";

function Header() {
    const dispatch = useAppDispatch();
    const state = useAppSelector(sessionState);
    const canvasId = state.session.template.canvas.id;
    function onMouseDownHandler(event: React.MouseEvent) {
        const inputNewText = document.getElementById("new-text");
        if (!inputNewText) {
            if (!event.isDefaultPrevented()) {
                dispatch(setSelectedBlock({ id: "", withCtrl: event.ctrlKey }));
                event.preventDefault();
            }
        }
    }
    function saveHandler() {
        dispatch(setSelectedBlock({ id: "", withCtrl: false }));
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
                handler={() => dispatch(ActionCreators.undo())}
                icon={undoIcon}
                alt="undo"
            />
            <HeadButton
                handler={() => dispatch(ActionCreators.redo())}
                icon={redoIcon}
                alt="redo"
            />
        </div>
    );
}
export default Header;
