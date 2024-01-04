import { Template } from "../../../type/type";
import getTemplate from "../../../utils/getTemplate";
import { Action } from "../../../data/typeActions";

export default function OpenJSHandler(
    setOpenedTemplate: (arg0: Template) => Action,
) {
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
                    alert(`Файл "${fileName.name}" не верен, выберите другой!`);
                } else {
                    setOpenedTemplate(newTemplate);
                }
            }
        };
        reader.onerror = () => {
            alert(reader.error);
        };
        a.remove();
    });
    a?.remove();
}
