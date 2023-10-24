import css from "./ArtBlock.module.css";
import { ArtBlock } from "../../type/type";
import Data from "../../data/max_data";
import convertRGB from "../../function/convertRGB";
interface IArtBlock {
    artBlock: ArtBlock;
}
function ArtBlk({ artBlock }: IArtBlock) {
    const { width, height } = artBlock.size;
    const { marginLeft, marginTop } = artBlock.position;
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
                width,
                height,
                marginTop,
                marginLeft,
                background: convertRGB(artBlock.bgColor),
            }}
            dangerouslySetInnerHTML={{ __html: artData }}
        />
    );
}

export default ArtBlk;
