import React from "react";
import { ArtBlockType } from "../../../type/type";
import getHexColor from "../../../utils/getHexColor";
import getOpacity from "../../../utils/getOpacity";
import getRGBA from "../../../utils/getRGBA";
interface IArrow {
    block: ArtBlockType;
}
function Rect({ block }: IArrow) {
    return (
        <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1280.000000 960.000000"
            width="100%"
            height="100%"
            fill={getHexColor(block.borderColor)}
            fillOpacity={getOpacity(block.borderColor)}
            stroke={getHexColor(block.bgColor)}
            strokeOpacity={getOpacity(block.bgColor)}
            style={{ backgroundColor: getRGBA(block.bgColor) }}
        >
            <g transform="translate(0.000000,960.000000) scale(0.100000,-0.100000)">
                <path d="M0 4800 l0 -4800 6400 0 6400 0 0 4800 0 4800 -6400 0 -6400 0 0 -4800z m8398 3461 l3182 -1 0 -3460 0 -3460 -5180 0 -5180 0 0 3460 0 3460 1503 2 c826 2 1725 2 1997 1 272 -1 1927 -2 3678 -2z" />
            </g>
        </svg>
    );
}

export default Rect;
