import css from "./ToolsPanel.module.css";
import { useAppDispatch, useAppSelector } from "../../data/hooks";
import { sessionState, setFillColorArt } from "../../data/sessionReducer";
import React from "react";
import { Color } from "../../type/type";
function ToolsPanel() {
    const state = useAppSelector(sessionState);
    const dispatch = useAppDispatch();
    const idActiveBlocks = state.session.selectedBlocks;
    const activeBlocks: Array<{ id: string; type: string }> = [];
    for (const id in idActiveBlocks) {
        const blk = state.session.template.blocks.find(
            (blk) => blk.id === idActiveBlocks[id],
        );
        if (blk) activeBlocks.push({ type: blk.type, id: idActiveBlocks[id] });
    }
    function setColor(event: React.ChangeEvent<HTMLInputElement>, id: string) {
        const colorStr = event.target.value;
        let strR = colorStr[1];
        strR += colorStr[2];
        let strG = colorStr[3];
        strG += colorStr[4];
        let strB = colorStr[5];
        strB += colorStr[6];
        const color: Color = {
            r: parseInt(strR, 16),
            g: parseInt(strG, 16),
            b: parseInt(strB, 16),
            a: 1,
        };
        dispatch(setFillColorArt({ id, color }));
    }
    return (
        <div className={css.nav}>
            {activeBlocks.map((blk) => {
                switch (blk.type) {
                    case "text":
                        return (
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                }}
                            >
                                <label htmlFor="color" style={{ margin: 5 }}>
                                    Color
                                </label>
                                <input
                                    id="color"
                                    type="color"
                                    onChange={(event) =>
                                        setColor(event, blk.id)
                                    }
                                />
                            </div>
                        );
                    case "art":
                        return (
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                }}
                            >
                                <label htmlFor="color" style={{ margin: 5 }}>
                                    Color
                                </label>
                                <input
                                    id="color"
                                    type="color"
                                    onChange={(event) =>
                                        setColor(event, blk.id)
                                    }
                                />
                            </div>
                        );
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
