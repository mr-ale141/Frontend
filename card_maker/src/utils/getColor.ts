import { Color } from "../data/type/type";
function GetColor(str: string): Color {
    if (str[0] === "#") {
        let strR = str[1];
        strR += str[2];
        let strG = str[3];
        strG += str[4];
        let strB = str[5];
        strB += str[6];
        return {
            r: parseInt(strR, 16),
            g: parseInt(strG, 16),
            b: parseInt(strB, 16),
            a: -1,
        };
    } else {
        return {
            r: -1,
            g: -1,
            b: -1,
            a: parseFloat(str),
        };
    }
}
export default GetColor;
