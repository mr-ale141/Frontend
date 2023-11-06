import { Color } from "../type/type";
function ConvertRGB(color: Color): string {
    return `rgba(${color.r.toString()}, 
                 ${color.g.toString()}, 
                 ${color.b.toString()}, 
                 ${color.a.toString()}
            )`;
}
export default ConvertRGB;
