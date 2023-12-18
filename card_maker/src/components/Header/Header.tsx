import css from "./Header.module.css";
import HeadButton from "./HeadButton/HeadButton";
import undoIcon from "./icons/undo.png";
import redoIcon from "./icons/redo.png";
import saveIMGIcon from "./icons/saveIMG.png";
import savePDFIcon from "./icons/savePDF.png";
import delIcon from "./icons/delete.png";
import addARTIcon from "./icons/addART.png";
import addTXTIcon from "./icons/addTXT.png";
import addIMGIcon from "./icons/addIMG.png";
import saveJSIcon from "./icons/saveJS.png";
import openFileJSIcon from "./icons/openFileJS.png";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { useAppDispatch, useAppSelector } from "../../data/hooks";
import React from "react";
import getTemplate from "../../utils/getTemplate";
import { Template, TypeBlock } from "../../type/type";

function Header() {
    const {
        setSelectedBlock,
        setNewTemplate,
        deleteSelectedBlocks,
        addNewBlock,
        undo,
        redo,
    } = useAppDispatch();
    const template = useAppSelector((state) => state.present.template);
    const canvasId = useAppSelector(
        (state) => state.present.template.canvas.id,
    );
    function saveIMGHandler() {
        setSelectedBlock("", false);
        const canvasDiv = document.getElementById(canvasId);
        html2canvas(canvasDiv as HTMLElement, {
            allowTaint: true,
            useCORS: true,
        }).then((canvas) => {
            const dataURL = canvas.toDataURL("image/jpeg");
            const link = document.createElement("a");
            link.href = dataURL;
            link.download = "card.jpg";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }
    function savePDFHandler() {
        setSelectedBlock("", false);
        const canvasDiv = document.getElementById(canvasId);
        html2canvas(canvasDiv as HTMLElement, {
            allowTaint: true,
            useCORS: true,
        }).then((canvas) => {
            const dataImage = canvas.toDataURL("image/jpeg");
            let width = canvas.width;
            let height = canvas.height;
            let pdf;
            if (width > height) {
                // eslint-disable-next-line new-cap
                pdf = new jsPDF("l", "px", [width, height]);
            } else {
                // eslint-disable-next-line new-cap
                pdf = new jsPDF("p", "px", [height, width]);
            }
            width = pdf.internal.pageSize.getWidth();
            height = pdf.internal.pageSize.getHeight();
            pdf.addImage(dataImage, "JPEG", 0, 0, width, height);
            pdf.save("card.pdf");
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
        <div className={css.header}>
            <div className={css.logo}>
                <span>Card Maker</span>
            </div>
            <HeadButton handler={undo} icon={undoIcon} alt="undo" />
            <HeadButton handler={redo} icon={redoIcon} alt="redo" />
            <HeadButton
                handler={openJSHandler}
                icon={openFileJSIcon}
                alt="open JSON-file"
            />
            <HeadButton
                handler={saveIMGHandler}
                icon={saveIMGIcon}
                alt="save as image"
            />
            <HeadButton
                handler={savePDFHandler}
                icon={savePDFIcon}
                alt="save as pdf"
            />
            <HeadButton
                handler={saveJSHandler}
                icon={saveJSIcon}
                alt="save as JSON"
            />
            <HeadButton
                handler={() => addNewBlock(TypeBlock.text)}
                icon={addTXTIcon}
                alt="add textBlock"
            />
            <HeadButton
                handler={() => addNewBlock(TypeBlock.image)}
                icon={addIMGIcon}
                alt="add imageBlock"
            />
            <HeadButton
                handler={() => addNewBlock(TypeBlock.art)}
                icon={addARTIcon}
                alt="add artBlock"
            />
            <HeadButton
                handler={() => deleteSelectedBlocks()}
                icon={delIcon}
                alt="delete selected blocks"
            />
        </div>
    );
}
export default Header;
