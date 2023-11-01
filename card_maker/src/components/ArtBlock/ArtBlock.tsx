import css from "./ArtBlock.module.css";
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

interface IArtBlock {
    artBlock: ArtBlock;
    selectedBlocks: Array<string>;
}
const artBlkSrc = {
    [ArtName.arrow]: Arrow,
    [ArtName.circle]: Circle,
    [ArtName.like]: Like,
    [ArtName.line]: Line,
    [ArtName.quote]: Quote,
    [ArtName.rect]: Rect,
    [ArtName.square]: Square,
};
function ArtBlk({ artBlock, selectedBlocks }: IArtBlock) {
    const dispatch = useAppDispatch();
    let classNameList = "border";
    if (selectedBlocks.includes(artBlock.id)) {
        classNameList += " selected";
    }
    return (
        <div
            className={css.art}
            style={{
                ...artBlock.position,
                ...artBlock.size,
            }}
            onClick={(event) => {
                event.stopPropagation();
                dispatch(setSelectedBlock(artBlock.id));
            }}
        >
            <div className={classNameList} />
            {artBlkSrc[artBlock.artName]({ artBlock })}
        </div>
    );
}
export default ArtBlk;
