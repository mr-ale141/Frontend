import { Color } from "../type/type";
function getHexColor(color: Color): string {
    let colorStr = "#";
    colorStr +=
        color.r >= 10 ? color.r.toString(16) : "0" + color.r.toString(16);
    colorStr +=
        color.g >= 10 ? color.g.toString(16) : "0" + color.g.toString(16);
    colorStr +=
        color.b >= 10 ? color.b.toString(16) : "0" + color.b.toString(16);
    return colorStr;
}
export default getHexColor;
