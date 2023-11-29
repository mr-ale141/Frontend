import React from "react";
import css from "./ToolsPanel.module.css";
import { TypeBlock } from "../../type/type";
import { useAppSelector } from "../../data/hooks";
import { sessionState } from "../../data/sessionReducer";
import ChangeColor from "./tools/ChangeColor/ChangeColor";
import ChangeImage from "./tools/ChangeImage/ChangeImage";
import ChangeText from "./tools/ChangeText/ChangeText";
import ChangeArt from "./tools/ChangeArt/ChangeArt";

function ToolsPanel() {
    const state = useAppSelector(sessionState);
    const activeTypes: Array<TypeBlock> = [];
    state.session.selectedBlocks.forEach((id) => {
        if (id === state.session.template.canvas.id) {
            activeTypes.push(TypeBlock.canvas);
        } else {
            const block = state.session.template.blocks.find(
                (block) => block.id === id,
            );
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
    return (
        <div className={css.tools}>
            {needRender.changeColor && <ChangeColor />}
            {needRender.changeText && <ChangeText />}
            {needRender.changeImage && <ChangeImage />}
            {needRender.changeArt && <ChangeArt />}
            {!activeTypes.length && <div>Select item</div>}
        </div>
    );
}

export default ToolsPanel;
