import React from "react";
import { ArtBlockType } from "../../../type/type";
import getHexColor from "../../../utils/getHexColor";
import getOpacity from "../../../utils/getOpacity";
import getRGBA from "../../../utils/getRGBA";

interface IArrow {
    artBlock: ArtBlockType;
}

function Line({ artBlock }: IArrow) {
    return (
        <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1280.000000 640.000000"
            width="100%"
            height="100%"
            fill={getHexColor(artBlock.borderColor)}
            fillOpacity={getOpacity(artBlock.borderColor)}
            stroke={getHexColor(artBlock.bgColor)}
            strokeOpacity={getOpacity(artBlock.bgColor)}
            style={{ backgroundColor: getRGBA(artBlock.bgColor) }}
        >
            <g transform="translate(0.000000,640.000000) scale(0.100000,-0.100000)">
                <path d="M170 4090 l0 -70 6230 0 6230 0 0 70 0 70 -6230 0 -6230 0 0 -70z" />
            </g>
        </svg>
    );
}

export default Line;
