import { Color } from "../type/type";
function getOpacity(color: Color): string {
    return color.a.toString();
}
export default getOpacity;
