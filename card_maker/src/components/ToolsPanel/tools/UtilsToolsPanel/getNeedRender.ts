import needTools from "./needTools";
import { TypeBlock } from "../../../../type/type";

export default function getNeedRender(activeTypes: Array<TypeBlock>) {
    const needRender = {
        changeImage: false,
        changeColor: false,
        changeArt: false,
        changeText: false,
        changeCanvasSize: false,
    };
    if (activeTypes.length) {
        activeTypes.forEach((type) => {
            needRender.changeImage ||= needTools[type].changeImage;
            needRender.changeColor ||= needTools[type].changeColor;
            needRender.changeArt ||= needTools[type].changeArt;
            needRender.changeText ||= needTools[type].changeText;
            needRender.changeCanvasSize ||= needTools[type].changeCanvasSize;
        });
    } else {
        needRender.changeImage = false;
        needRender.changeColor = false;
        needRender.changeArt = false;
        needRender.changeText = false;
        needRender.changeCanvasSize = false;
    }
    return needRender;
}
