import React from "react";
import { ArtBlock } from "../../../type/type";
import getHexColor from "../../../function/getHexColor";
import getOpacity from "../../../function/getOpacity";

interface IArrow {
    artBlock: ArtBlock;
}

function Line({ artBlock }: IArrow) {
    return (
        <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1280.000000 640.000000"
            width={artBlock.size.width}
            height={artBlock.size.height}
            fill={getHexColor(artBlock.bgColor)}
            fillOpacity={getOpacity(artBlock.bgColor)}
            stroke={getHexColor(artBlock.borderColor)}
            strokeOpacity={getOpacity(artBlock.borderColor)}
        >
            <g transform="translate(0.000000,640.000000) scale(0.100000,-0.100000)">
                <path d="M170 4090 l0 -70 6230 0 6230 0 0 70 0 70 -6230 0 -6230 0 0 -70z" />
            </g>
        </svg>
    );
}

export default Line;
