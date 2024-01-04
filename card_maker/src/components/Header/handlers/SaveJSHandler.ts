import { Template } from "../../../type/type";

export default function SaveIMGHandler(template: Template) {
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
