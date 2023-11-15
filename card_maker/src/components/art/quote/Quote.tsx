import React from "react";
import { ArtBlockType } from "../../../type/type";
import getHexColor from "../../../utils/getHexColor";
import getOpacity from "../../../utils/getOpacity";
import getRGBA from "../../../utils/getRGBA";
interface IArrow {
    artBlock: ArtBlockType;
}
function Quote({ artBlock }: IArrow) {
    return (
        <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 468 468"
            width="100%"
            height="100%"
            fill={getHexColor(artBlock.borderColor)}
            fillOpacity={getOpacity(artBlock.borderColor)}
            stroke={getHexColor(artBlock.bgColor)}
            strokeOpacity={getOpacity(artBlock.bgColor)}
            style={{ backgroundColor: getRGBA(artBlock.bgColor) }}
        >
            <g transform="translate(0 468) scale(.066857 -.066857)">
                <path d="m650 6501c-201-40-411-270-512-561l-33-95v-1805c0-1721 1-1808 18-1870 99-349 496-586 1035-617 61-3 112-10 112-14 0-28-54-147-93-205-49-73-210-238-342-350-124-104-205-185-226-226-24-47-25-131-1-178 41-81 117-99 352-82 459 34 884 197 1280 490 145 108 383 344 485 482l78 105 1766 5 1766 5 46 21c201 93 457 356 504 517 13 47 15 275 13 1958l-3 1906-39 77c-65 127-198 274-334 366-130 88 174 80-3006 79-1557-1-2847-4-2866-8zm5675-395c28-17 73-53 101-80 27-28 63-73 80-101l29-50 3-1800c3-2042 12-1830-88-1963-58-77-132-142-183-161-20-8-598-11-1863-11h-1835l-25-28c-24-25-104-151-240-376-70-116-133-178-282-277-132-87-290-165-446-218-65-23-120-41-122-41-3 0 5 19 17 42 40 79 107 254 128 338 17 65 23 128 28 265l6 180-47 57-47 58h-372c-340 0-375 2-413 19-103 47-216 196-269 356l-25 74v1684c0 1630 1 1687 19 1746 37 119 171 282 252 308 24 8 828 11 2789 10l2755-2 50-29z" />
            </g>
        </svg>
    );
}

export default Quote;
