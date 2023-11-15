import React from "react";
import css from "./Canvas.module.css";
import TextBlock from "../TextBlock/TextBlock";
import ArtBlock from "../ArtBlock/ArtBlock";
import ImageBlock from "../ImageBlock/ImageBlock";
import { useAppSelector } from "../../data/hooks";
import { sessionState } from "../../data/sessionReducer";
import commonCss from "../../common/Common.module.css";

function Canvas() {
    const state = useAppSelector(sessionState);
    let classNameList = commonCss.border;
    if (state.session.selectedBlocks[0] === "canvas") {
        classNameList += " " + commonCss.selected;
    }
    return (
        <div
            className={css.canvas + " " + classNameList}
            style={state.session.template.canvas.size}
        >
            {state.session.template.blocks.map((block) => {
                switch (block.type) {
                    case "image":
                        return (
                            <ImageBlock
                                key={block.id}
                                imageBlock={block}
                                isSelected={state.session.selectedBlocks.includes(
                                    block.id,
                                )}
                            />
                        );
                    case "text":
                        return (
                            <TextBlock
                                key={block.id}
                                textBlock={block}
                                isSelected={state.session.selectedBlocks.includes(
                                    block.id,
                                )}
                            />
                        );
                    case "art":
                        return (
                            <ArtBlock
                                key={block.id}
                                artBlock={block}
                                isSelected={state.session.selectedBlocks.includes(
                                    block.id,
                                )}
                            />
                        );
                    default:
                        return null;
                }
            })}
        </div>
    );
}
export default Canvas;
