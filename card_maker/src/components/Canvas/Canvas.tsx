import React from "react";
import css from "./Canvas.module.css";
import TextBlk from "../TextBlock/TextBlock";
import ArtBlk from "../ArtBlock/ArtBlock";
import ImageBlk from "../ImageBlock/ImageBlock";
import { useAppSelector } from "../../data/hooks";
import { sessionState } from "../../data/sessionReducer";

function Canvas() {
    const state = useAppSelector(sessionState);
    return (
        <div className={css.canvas} style={state.session.template.canvas.size}>
            {state.session.template.blocks.map((block) => {
                switch (block.type) {
                    case "image":
                        return (
                            <ImageBlk
                                key={block.id}
                                imageBlock={block}
                                isSelected={state.session.selectedBlocks.includes(
                                    block.id,
                                )}
                            />
                        );
                    case "text":
                        return (
                            <TextBlk
                                key={block.id}
                                textBlock={block}
                                isSelected={state.session.selectedBlocks.includes(
                                    block.id,
                                )}
                            />
                        );
                    case "art":
                        return (
                            <ArtBlk
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
