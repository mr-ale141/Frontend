import React from "react";
import css from "./ToolsPanel.module.css";
import {
    ArtBlockType,
    Color,
    ImageBlockType,
    TextBlockType,
} from "../../type/type";
import { useAppSelector } from "../../data/hooks";
import { sessionState } from "../../data/sessionReducer";
import ChangeColor from "./tools/ChangeColor/ChangeColor";
import ChangeImage from "./tools/ChangeImage/ChangeImage";
import ChangeText from "./tools/ChangeText/ChangeText";
import ChangeArt from "./tools/ChangeArt/ChangeArt";

function ToolsPanel() {
    const defaultColor: Color = { r: 0, g: 0, b: 0, a: 0 };
    const state = useAppSelector(sessionState);
    const activeBlocks: Array<ArtBlockType | TextBlockType | ImageBlockType> =
        [];
    state.session.selectedBlocks.forEach((id) => {
        const block = state.session.template.blocks.find(
            (block) => block.id === id,
        );
        if (block) activeBlocks.push(block);
    });
    if (activeBlocks.length > 1) {
        return (
            <div className={css.tools}>
                <ChangeColor color={defaultColor} bgColor={defaultColor} />
            </div>
        );
    } else if (activeBlocks.length === 1) {
        switch (activeBlocks[0].type) {
            case "text":
                return (
                    <div className={css.tools}>
                        <ChangeColor
                            color={activeBlocks[0].text.color}
                            bgColor={activeBlocks[0].bgColor}
                        />
                        <ChangeText />
                    </div>
                );
            case "art":
                return (
                    <div className={css.tools}>
                        <ChangeColor
                            color={activeBlocks[0].borderColor}
                            bgColor={activeBlocks[0].bgColor}
                        />
                        <ChangeArt />
                    </div>
                );
            case "image":
                return (
                    <div className={css.tools}>
                        <ChangeImage />
                    </div>
                );
            default:
                return <div>Error! Unknown type block</div>;
        }
    } else {
        return (
            <div className={css.tools}>
                <div>Select item</div>
            </div>
        );
    }
}
export default ToolsPanel;
