import { Color } from "../data/type/type";
function GetRGBA(color: Color): string {
    return `rgba(${color.r.toString()}, ${color.g.toString()}, ${color.b.toString()}, ${color.a.toString()})`;
}
export default GetRGBA;
