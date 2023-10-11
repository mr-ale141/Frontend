import css from "./ArtBlock.module.css";
import { ArtBlock } from "../../type/type";
import Data from "../../data/max_data";
interface IArtBlock {
    artBlock: ArtBlock;
}
function ArtBlk({ artBlock }: IArtBlock) {
    const artBlockWidth = artBlock.size.width;
    const artBlockHeight = artBlock.size.height;
    const posX = artBlock.position.x;
    const posY = artBlock.position.y;
    const artName = artBlock.art_name;
    let art: string = "";
    const bgR = artBlock.bgColor.r;
    const bgG = artBlock.bgColor.g;
    const bgB = artBlock.bgColor.b;
    const bgA = artBlock.bgColor.a;
    for (const elt of Data.artObjectSource) {
        if (elt.name === artName) {
            art = elt.svg_data;
        }
    }
    return (
        <div
            className={css.art}
            style={{
                width: artBlockWidth,
                height: artBlockHeight,
                top: posY,
                left: posX,
                background: `rgba(${bgR.toString()}, 
                                  ${bgG.toString()}, 
                                  ${bgB.toString()}, 
                                  ${bgA.toString()}
                             )`,
            }}
        >
            {this.renderNextLine(art)}
        </div>
    );
}

export default ArtBlk;
