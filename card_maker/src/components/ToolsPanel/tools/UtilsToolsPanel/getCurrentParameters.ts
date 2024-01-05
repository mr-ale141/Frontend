import getHexColor from "../../../../utils/getHexColor";
import getOpacity from "../../../../utils/getOpacity";
import {
    ArtBlockType,
    CanvasType,
    ImageBlockType,
    Rotate,
    Scale,
    TextBlockType,
    TypeBlock,
} from "../../../../type/type";

type GetCurrentParametersInput = {
    selectedBlocks: Array<string>;
    canvas: CanvasType;
    blocks: (ArtBlockType | TextBlockType | ImageBlockType)[];
};
export default function getCurrentParameters({
    selectedBlocks,
    canvas,
    blocks,
}: GetCurrentParametersInput) {
    const currentColor = {
        hexColor: "#ffffff",
        opacity: 1,
    };
    const currentBGColor = {
        hexColor: "#ffffff",
        opacity: 1,
    };
    let currentScale: Scale = { x: 0, y: 0 };
    let currentRotate: Rotate = 0;
    let currentTextSize = 10;
    let currentFontFamily = "Arial";
    if (selectedBlocks.length === 1) {
        if (canvas.id === selectedBlocks[0]) {
            currentBGColor.hexColor = getHexColor(canvas.bgColor);
            currentBGColor.opacity = Number(getOpacity(canvas.bgColor));
        } else {
            const block = blocks.find((item) => {
                return item.id === selectedBlocks[0];
            });
            if (block) {
                currentRotate = block.rotate;
                currentScale = block.scale;
            }
            switch (block?.type) {
                case TypeBlock.art:
                    currentColor.hexColor = getHexColor(block.borderColor);
                    currentColor.opacity = Number(
                        getOpacity(block.borderColor),
                    );
                    currentBGColor.hexColor = getHexColor(block.bgColor);
                    currentBGColor.opacity = Number(getOpacity(block.bgColor));
                    break;
                case TypeBlock.text:
                    currentColor.hexColor = getHexColor(block.text.color);
                    currentColor.opacity = Number(getOpacity(block.text.color));
                    currentBGColor.hexColor = getHexColor(block.bgColor);
                    currentBGColor.opacity = Number(getOpacity(block.bgColor));
                    currentTextSize = block.text.fontSize;
                    currentFontFamily = block.text.fontFamily;
                    break;
                default:
                    break;
            }
        }
    }
    return {
        currentColor,
        currentBGColor,
        currentFontFamily,
        currentTextSize,
        currentRotate,
        currentScale,
    };
}
