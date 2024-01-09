import { TypeBlock } from "../../../../data/type/type";

const needTools = {
    [TypeBlock.canvas]: {
        changeImage: true,
        changeColor: true,
        changeArt: false,
        changeText: false,
        changeCanvasSize: true,
        changeRotateScale: false,
    },
    [TypeBlock.art]: {
        changeImage: false,
        changeColor: true,
        changeArt: true,
        changeText: false,
        changeCanvasSize: false,
        changeRotateScale: true,
    },
    [TypeBlock.text]: {
        changeImage: false,
        changeColor: true,
        changeArt: false,
        changeText: true,
        changeCanvasSize: false,
        changeRotateScale: true,
    },
    [TypeBlock.image]: {
        changeImage: true,
        changeColor: false,
        changeArt: false,
        changeText: false,
        changeCanvasSize: false,
        changeRotateScale: true,
    },
};
export default needTools;
