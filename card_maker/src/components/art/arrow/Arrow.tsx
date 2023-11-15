import React from "react";
import { ArtBlockType } from "../../../type/type";
import getHexColor from "../../../utils/getHexColor";
import getOpacity from "../../../utils/getOpacity";
import getRGBA from "../../../utils/getRGBA";
interface IArrow {
    artBlock: ArtBlockType;
}
function Arrow({ artBlock }: IArrow) {
    return (
        <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1280.000000 640.000000"
            preserveAspectRatio="xMidYMid meet"
            width="100%"
            height="100%"
            fill={getHexColor(artBlock.borderColor)}
            fillOpacity={getOpacity(artBlock.borderColor)}
            stroke={getHexColor(artBlock.bgColor)}
            strokeOpacity={getOpacity(artBlock.bgColor)}
            style={{ backgroundColor: getRGBA(artBlock.bgColor) }}
        >
            <g transform="translate(0.000000,640.000000) scale(0.100000,-0.100000)">
                <path d="M9280 5934 c-106 -21 -223 -80 -293 -150 -99 -97 -148 -196 -168 -336 -10 -72 -9 -97 5 -164 22 -108 75 -212 144 -282 33 -33 391 -297 851 -627 l794 -570 -5084 -5 c-4763 -5 -5087 -6 -5132 -22 -146 -52 -265 -152 -330 -275 -114 -217 -77 -472 93 -644 70 -71 126 -108 217 -142 l58 -22 5078 -5 5078 -5 -752 -615 c-414 -338 -776 -638 -804 -667 -29 -29 -68 -84 -89 -125 -112 -224 -73 -470 105 -649 104 -105 233 -159 382 -159 99 0 186 22 270 68 70 39 2847 2303 2942 2399 160 162 199 422 93 633 -46 94 -119 163 -324 311 -1086 782 -2701 1940 -2747 1970 -83 54 -166 80 -272 84 -49 2 -101 1 -115 -1z" />
            </g>
        </svg>
    );
}

export default Arrow;
