import css from "./Header.module.css";
import HeadButton from "./HeadButton/HeadButton";
import undoIcon from "./icons/undo.png";
import redoIcon from "./icons/redo.png";
import saveIcon from "./icons/save.png";
import saveJSIcon from "./icons/saveJS.png";
import openFileJS from "./icons/openFileJS.png";
import html2canvas from "html2canvas";
import { useAppDispatch, useAppSelector } from "../../data/hooks";
import React from "react";
import getTemplate from "../../utils/getTemplate";
import { Template } from "../../type/type";

function Header() {
    const { setSelectedBlock, setNewTemplate } = useAppDispatch();
    const template = useAppSelector((state) => state.template);
    const canvasId = useAppSelector((state) => state.template.canvas.id);
    const fileName = useAppSelector((state) => state.file_name);
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
            link.download = fileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }
    function saveJSHandler() {
        const name = "card.json";
        const sessionText = JSON.stringify(template);
        const type = "text/plan";

        const a = document.createElement("a");
        const file = new Blob([sessionText], { type });
        a.href = URL.createObjectURL(file);
        a.download = name;
        document.body.appendChild(a);
        a.click();
        a.remove();
    }
    function openJSHandler() {
        const a = document.createElement("input");
        a.type = "file";
        a.id = "file-js-open";
        a.multiple = false;
        document.body.appendChild(a);
        a.click();
        a.addEventListener("change", (e) => {
            const fileName = (e.target as HTMLInputElement).files![0];
            const reader = new FileReader();
            reader.readAsText(fileName);
            reader.onload = () => {
                const textJson = reader.result;
                let newTemplate: Template | undefined;
                if (typeof textJson === "string") {
                    newTemplate = getTemplate(textJson);
                    if (!newTemplate) {
                        alert(
                            `Файл "${fileName.name}" не верен, выберите другой!`,
                        );
                    } else {
                        setNewTemplate(newTemplate);
                    }
                }
            };
            reader.onerror = () => {
                alert(reader.error);
            };
            a.remove();
        });
        a!.remove();
    }
    return (
        <div className={css.header} onMouseDown={onMouseDownHandler}>
            <div className={css.logo}>
                <span>Card Maker</span>
            </div>
            <HeadButton handler={saveHandler} icon={saveIcon} alt="save" />
            <HeadButton
                handler={saveJSHandler}
                icon={saveJSIcon}
                alt="save as JSON"
            />
            <HeadButton
                handler={openJSHandler}
                icon={openFileJS}
                alt="open JSON-file"
            />
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
