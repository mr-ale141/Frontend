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
import { useAppDispatch } from "../../data/hooks";
import { setSelectedBlock } from "../../data/sessionReducer";

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
    const dispatch = useAppDispatch();
    let classNameList = commonCss.border;
    if (isSelected) {
        classNameList += " " + commonCss.selected;
    }
    return (
        <div
            className={css.art}
            style={{
                ...artBlock.position,
                ...artBlock.size,
            }}
            onClick={(event) => {
                event.stopPropagation(); //
                const withCtrl = event.ctrlKey;
                dispatch(setSelectedBlock({ id: artBlock.id, withCtrl }));
            }}
        >
            <div className={classNameList} />
            {artBlkSrc[artBlock.artName]({ artBlock })}
        </div>
    );
}
export default ArtBlk;
