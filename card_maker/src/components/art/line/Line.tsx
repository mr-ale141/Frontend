import React from "react";
import { ArtBlockType } from "../../../type/type";
import getHexColor from "../../../utils/getHexColor";
import getOpacity from "../../../utils/getOpacity";

interface IArrow {
    block: ArtBlockType;
}

function Line({ block }: IArrow) {
    return (
        <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1280.000000 640.000000"
            width="100%"
            height="100%"
            fill={getHexColor(block.borderColor)}
            fillOpacity={getOpacity(block.borderColor)}
            transform={`scale(${block.scale.x}, ${block.scale.y})`}
        >
            <g transform="translate(0.000000,640.000000) scale(0.100000,-0.100000)">
                <path d="M170 4090 l0 -70 6230 0 6230 0 0 70 0 70 -6230 0 -6230 0 0 -70z" />
            </g>
        </svg>
    );
}

export default Line;
