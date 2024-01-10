import { Template } from "../data/type/type";

function GetTemplate(objectString: string): Template | undefined {
    let object;
    try {
        object = JSON.parse(objectString);
    } catch (error) {
        console.log(error);
        return undefined;
    }
    if (object?.id && object?.preview && object?.canvas && object?.blocks)
        return object;
    else {
        alert("JSON-файл содержит не все нужные поля");
    }
}

export default GetTemplate;
