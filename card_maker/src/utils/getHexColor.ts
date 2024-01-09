import { Color } from "../data/type/type";
function getHexColor(color: Color): string {
    let colorStr = "#";
    colorStr +=
        color.r >= 16 ? color.r.toString(16) : "0" + color.r.toString(16);
    colorStr +=
        color.g >= 16 ? color.g.toString(16) : "0" + color.g.toString(16);
    colorStr +=
        color.b >= 16 ? color.b.toString(16) : "0" + color.b.toString(16);
    return colorStr;
}
export default getHexColor;
