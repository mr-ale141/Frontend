import React from "react";
import { ArtBlockType } from "../../../type/type";
import getHexColor from "../../../utils/getHexColor";
import getOpacity from "../../../utils/getOpacity";
import getRGBA from "../../../utils/getRGBA";
interface IArrow {
    block: ArtBlockType;
}
function Square({ block }: IArrow) {
    return (
        <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1280.000000 1278.000000"
            width="100%"
            height="100%"
            fill={getHexColor(block.borderColor)}
            fillOpacity={getOpacity(block.borderColor)}
            stroke={getHexColor(block.bgColor)}
            strokeOpacity={getOpacity(block.bgColor)}
            style={{ backgroundColor: getRGBA(block.bgColor) }}
            transform={`scale(${block.scale.x}, ${block.scale.y})`}
        >
            <g transform="translate(0.000000,1278.000000) scale(0.100000,-0.100000)">
                <path d="M1438 12630 c-331 -30 -643 -176 -879 -411 -205 -205 -345 -477 -396 -769 -17 -101 -18 -309 -18 -5060 0 -4751 1 -4959 18 -5060 105 -602 556 -1053 1167 -1167 90 -17 351 -18 5070 -18 4719 0 4980 1 5070 18 302 56 564 191 771 398 205 205 345 477 396 769 17 101 18 309 18 5060 0 4751 -1 4959 -18 5060 -79 455 -361 834 -774 1039 -107 53 -249 100 -383 128 -80 16 -386 17 -5020 19 -2714 1 -4974 -2 -5022 -6z m9930 -648 c89 -27 198 -80 261 -126 111 -81 214 -215 270 -350 66 -158 61 244 61 -5086 0 -5306 4 -4923 -59 -5079 -97 -237 -279 -403 -531 -483 l-75 -23 -4925 0 c-4728 0 -4928 1 -4990 18 -272 76 -487 285 -572 557 l-23 75 0 4930 c0 4733 1 4933 18 4995 85 302 342 539 640 589 29 5 2184 8 4952 7 l4900 -1 73 -23z" />
            </g>
        </svg>
    );
}

export default Square;
