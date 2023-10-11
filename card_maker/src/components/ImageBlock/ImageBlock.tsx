import css from "./ImageBlock.module.css";
import { ImageBlock } from "../../type/type";
interface IImageBlock {
    imageBlock: ImageBlock;
}
// async function getTextFile() {
//
// }
function ImageBlk({ imageBlock }: IImageBlock) {
    let dataImage = "data:image/png;base64,";
    if (imageBlock.bgImage.type === "link") {
        dataImage = imageBlock.bgImage.data;
    } else {
        const file = "../../data/" + imageBlock.bgImage.data;
        dataImage += file;
    }
    return (
        <div
            className={css.image}
            style={{
                width: imageBlock.size.width,
                height: imageBlock.size.height,
                top: imageBlock.position.y,
                left: imageBlock.position.x,
            }}
        >
            <img src={dataImage} alt="img" />
        </div>
    );
}
export default ImageBlk;
