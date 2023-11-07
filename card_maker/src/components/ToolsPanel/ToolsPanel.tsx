import css from "./ToolsPanel.module.css";
import { useAppSelector } from "../../data/hooks";
import { sessionState } from "../../data/sessionReducer";
import React from "react";
import InputBGColor from "./tools/InputBGColor/InputBGColor";
function ToolsPanel() {
    const state = useAppSelector(sessionState);
    const activeBlocks: Array<{ id: string; type: string }> = [];
    state.session.selectedBlocks.forEach((id) => {
        const block = state.session.template.blocks.find(
            (block) => block.id === id,
        );
        if (block) activeBlocks.push({ type: block.type, id });
    });
    return (
        <div className={css.nav}>
            {activeBlocks.map((blk) => {
                switch (blk.type) {
                    case "text":
                        return <InputBGColor />;
                    case "art":
                        return <InputBGColor />;
                    case "image":
                        return <div>Image Block {blk.id}</div>;
                    default:
                        return <div>Select block</div>;
                }
            })}
        </div>
    );
}
export default ToolsPanel;
