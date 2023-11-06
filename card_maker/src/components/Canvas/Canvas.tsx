import React from "react";
import css from "./Canvas.module.css";
import TextBlk from "../TextBlock/TextBlock";
import ArtBlk from "../ArtBlock/ArtBlock";
import ImageBlk from "../ImageBlock/ImageBlock";
import { useAppDispatch, useAppSelector } from "../../data/hooks";
import { sessionState, setSelectedBlock } from "../../data/sessionReducer";
// get renderer function

function Canvas() {
    const dispatch = useAppDispatch();
    const state = useAppSelector(sessionState);
    return (
        <div
            className={css.canvas}
            style={state.session.template.canvas.size}
            onClick={() => dispatch(setSelectedBlock(""))}
        >
            {state.session.template.blocks.map((blk) => {
                switch (blk.type) {
                    case "image":
                        return (
                            <ImageBlk
                                key={blk.id}
                                imageBlock={blk}
                                selectedBlocks={state.session.selectedBlocks}
                            />
                        );
                    case "text":
                        return (
                            <TextBlk
                                key={blk.id}
                                textBlock={blk}
                                selectedBlocks={state.session.selectedBlocks}
                            />
                        );
                    case "art":
                        return (
                            <ArtBlk
                                key={blk.id}
                                artBlock={blk}
                                selectedBlocks={state.session.selectedBlocks}
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
