import React from "react";
import css from "./ToolsPanel.module.css";
import InputBGColor from "./tools/InputBGColor/InputBGColor";
import InputColor from "./tools/InputColor/InputColor";
import { ArtBlock, Color, ImageBlock, TextBlock } from "../../type/type";
import { useAppSelector } from "../../data/hooks";
import { sessionState } from "../../data/sessionReducer";
import ChangeImage from "./tools/ChangeImage/ChangeImage";
import ChangeText from "./tools/ChangeText/ChangeText";

function ToolsPanel() {
    const defaultColor: Color = { r: 0, g: 0, b: 0, a: 0 };
    const state = useAppSelector(sessionState);
    const activeBlocks: Array<ArtBlock | TextBlock | ImageBlock> = [];
    state.session.selectedBlocks.forEach((id) => {
        const block = state.session.template.blocks.find(
            (block) => block.id === id,
        );
        if (block) activeBlocks.push(block);
    });
    if (activeBlocks.length > 1) {
        return (
            <div className={css.tools}>
                <InputBGColor bgColor={defaultColor} />
                <InputColor color={defaultColor} />
            </div>
        );
    } else if (activeBlocks.length === 1) {
        switch (activeBlocks[0].type) {
            case "text":
                return (
                    <div className={css.tools}>
                        <InputBGColor bgColor={activeBlocks[0].bgColor} />
                        <InputColor color={activeBlocks[0].text.color} />
                        <ChangeText />
                    </div>
                );
            case "art":
                return (
                    <div className={css.tools}>
                        <InputBGColor bgColor={activeBlocks[0].bgColor} />
                        <InputColor color={activeBlocks[0].borderColor} />
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
                <div style={{ color: "#cb9b51", margin: "10px" }}>
                    Select item
                </div>
            </div>
        );
    }
}
export default ToolsPanel;
