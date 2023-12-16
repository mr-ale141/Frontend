import React from "react";
import css from "./ToolsPanel.module.css";
import { TypeBlock } from "../../type/type";
import { useAppSelector } from "../../data/hooks";
import ChangeColor from "./tools/ChangeColor/ChangeColor";
import ChangeImage from "./tools/ChangeImage/ChangeImage";
import ChangeText from "./tools/ChangeText/ChangeText";
import ChangeArt from "./tools/ChangeArt/ChangeArt";
import getHexColor from "../../utils/getHexColor";
import getOpacity from "../../utils/getOpacity";

function ToolsPanel() {
    const canvasId = useAppSelector((state) => state.template.canvas.id);
    const canvas = useAppSelector((state) => state.template.canvas);
    const blocks = useAppSelector((state) => state.template.blocks);
    const selectedBlocks = useAppSelector((state) => state.selectedBlocks);
    const activeTypes: Array<TypeBlock> = [];
    selectedBlocks.forEach((id) => {
        if (id === canvasId) {
            activeTypes.push(TypeBlock.canvas);
        } else {
            const block = blocks.find((block) => block.id === id);
            activeTypes.push(block!.type);
        }
    });
    const needTools = {
        [TypeBlock.canvas]: {
            changeImage: true,
            changeColor: true,
            changeArt: false,
            changeText: false,
        },
        [TypeBlock.art]: {
            changeImage: false,
            changeColor: true,
            changeArt: true,
            changeText: false,
        },
        [TypeBlock.text]: {
            changeImage: false,
            changeColor: true,
            changeArt: false,
            changeText: true,
        },
        [TypeBlock.image]: {
            changeImage: true,
            changeColor: true,
            changeArt: false,
            changeText: false,
        },
    };
    const needRender = {
        changeImage: true,
        changeColor: true,
        changeArt: true,
        changeText: true,
    };
    if (activeTypes.length) {
        activeTypes.forEach((type) => {
            needRender.changeImage &&= needTools[type].changeImage;
            needRender.changeColor &&= needTools[type].changeColor;
            needRender.changeArt &&= needTools[type].changeArt;
            needRender.changeText &&= needTools[type].changeText;
        });
    } else {
        needRender.changeImage = false;
        needRender.changeColor = false;
        needRender.changeArt = false;
        needRender.changeText = false;
    }
    const currentColor = {
        hexColor: "#ffffff",
        opacity: 0,
    };
    const currentBGColor = {
        hexColor: "#ffffff",
        opacity: 0,
    };
    if (selectedBlocks.length === 1) {
        if (canvasId === selectedBlocks[0]) {
            currentBGColor.hexColor = getHexColor(canvas.bgColor);
            currentBGColor.opacity = Number(getOpacity(canvas.bgColor));
        } else {
            const block = blocks.find((item) => {
                return item.id === selectedBlocks[0];
            });
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
                    break;
                default:
                    break;
            }
        }
    }
    return (
        <div className={css.tools}>
            {needRender.changeColor && (
                <ChangeColor
                    currentColor={currentColor}
                    currentBGColor={currentBGColor}
                />
            )}
            {needRender.changeText && <ChangeText />}
            {needRender.changeImage && <ChangeImage />}
            {needRender.changeArt && <ChangeArt />}
            {!activeTypes.length && <div>Select item</div>}
        </div>
    );
}

export default ToolsPanel;
