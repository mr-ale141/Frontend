import css from "./ToolsPanel.module.css";
import { useAppSelector } from "../../data/hooks";
import { sessionState } from "../../data/sessionReducer";
import React from "react";
import InputBGColor from "./tools/InputBGColor/InputBGColor";
import InputColor from "./tools/InputColor/InputColor";
import { ArtBlock, ImageBlock, TextBlock } from "../../type/type";
function ToolsPanel() {
    const state = useAppSelector(sessionState);
    const activeBlocks: Array<ArtBlock | TextBlock | ImageBlock> = [];
    state.session.selectedBlocks.forEach((id) => {
        const block = state.session.template.blocks.find(
            (block) => block.id === id,
        );
        if (block) activeBlocks.push(block);
    });
    return (
        <div className={css.nav}>
            {activeBlocks.map((block) => {
                switch (block.type) {
                    case "text":
                        return (
                            <>
                                <InputBGColor bgColor={block.bgColor} />
                                <InputColor color={block.text.color} />
                            </>
                        );
                    case "art":
                        return (
                            <>
                                <InputBGColor bgColor={block.bgColor} />
                                <InputColor color={block.borderColor} />
                            </>
                        );
                    case "image":
                        return <div>Image Block {block.id}</div>;
                    default:
                        return <div>Select block</div>;
                }
            })}
        </div>
    );
}
export default ToolsPanel;
