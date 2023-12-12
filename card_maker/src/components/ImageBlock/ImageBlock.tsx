import css from "./ImageBlock.module.css";
import { ImageBlockType } from "../../type/type";

type imageBlockProps = {
    block: ImageBlockType;
};

// async function imageUrlToBase64(url: string) {
//     try {
//         const response = await fetch(url);
//         const blob = await response.arrayBuffer();
//         const contentType = response.headers.get("content-type");
//         const base64String = `data:${contentType};base64,${Buffer.from(
//             blob,
//         ).toString("base64")}`;
//         return base64String;
//     } catch (err) {
//         console.log(err);
//     }
// }

function ImageBlock({ block }: imageBlockProps) {
    let data = "";
    // if (block.bgImage.type === "link") {
    //     imageUrlToBase64(block.bgImage.data).then((base64String) => {
    //         data = base64String!;
    //     });
    // } else {
    //     data = block.bgImage.data;
    // }
    data = block.bgImage.data;
    return (
        <div className={css.image} id={block.id}>
            <img src={data} alt="img" />
        </div>
    );
}
export default ImageBlock;
