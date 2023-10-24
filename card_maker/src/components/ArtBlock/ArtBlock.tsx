import css from "./ArtBlock.module.css";
import { ArtBlock } from "../../type/type";
import Data from "../../data/max_data";
import convertRGB from "../../function/convertRGB";
interface IArtBlock {
    artBlock: ArtBlock;
}
function ArtBlk({ artBlock }: IArtBlock) {
    const artName = artBlock.artName;
    let artData: string = "";
    for (const elt of Data.artObjectSource) {
        if (elt.name === artName) {
            artData = elt.svg_data;
        }
    }
    return (
        <div
            className={css.art}
            style={{
                ...artBlock.size,
                ...artBlock.position,
                background: convertRGB(artBlock.bgColor),
            }}
            dangerouslySetInnerHTML={{ __html: artData }}
        />
    );
}

export default ArtBlk;
