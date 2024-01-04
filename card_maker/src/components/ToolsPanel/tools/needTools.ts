import { TypeBlock } from "../../../type/type";

const needTools = {
    [TypeBlock.canvas]: {
        changeImage: true,
        changeColor: true,
        changeArt: false,
        changeText: false,
        changeCanvasSize: true,
    },
    [TypeBlock.art]: {
        changeImage: false,
        changeColor: true,
        changeArt: true,
        changeText: false,
        changeCanvasSize: false,
    },
    [TypeBlock.text]: {
        changeImage: false,
        changeColor: true,
        changeArt: false,
        changeText: true,
        changeCanvasSize: false,
    },
    [TypeBlock.image]: {
        changeImage: true,
        changeColor: false,
        changeArt: false,
        changeText: false,
        changeCanvasSize: false,
    },
};
export default needTools;
