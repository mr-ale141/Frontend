import css from "./ArtBlock.module.css";
import commonCss from "../../common/Common.module.css";
import { ArtBlock, ArtName } from "../../type/type";
import Quote from "../art/quote/Quote";
import Arrow from "../art/arrow/Arrow";
import Circle from "../art/circle/Circle";
import Like from "../art/like/Like";
import Line from "../art/line/Line";
import Rect from "../art/rectangle/Rect";
import Square from "../art/square/Square";

type ArtBlkProps = {
    artBlock: ArtBlock;
    isSelected: boolean;
};

const artBlkSrc = {
    [ArtName.arrow]: Arrow,
    [ArtName.circle]: Circle,
    [ArtName.like]: Like,
    [ArtName.line]: Line,
    [ArtName.quote]: Quote,
    [ArtName.rect]: Rect,
    [ArtName.square]: Square,
};
function ArtBlk({ artBlock, isSelected }: ArtBlkProps) {
    let classNameList = commonCss.border;
    if (isSelected) {
        classNameList += " " + commonCss.selected;
    }
    return (
        <div
            className={css.art + " " + classNameList}
            style={{
                ...artBlock.position,
                ...artBlock.size,
            }}
            id={artBlock.id}
        >
            {artBlkSrc[artBlock.artName]({ artBlock })}
        </div>
    );
}
export default ArtBlk;
