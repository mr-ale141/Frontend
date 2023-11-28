import session from "./max_data";
import { ArtName, Color, Position, Session } from "../type/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface ISession {
    session: Session;
}

const initialState: ISession = {
    session,
};

export const sessionReducer = createSlice({
    name: "session",
    initialState,
    reducers: {
        setSelectedBlock: (
            state,
            action: PayloadAction<{
                id: string;
                withCtrl: boolean;
            }>,
        ) => {
            const selectedId = action.payload.id;
            const withCtrl = action.payload.withCtrl;
            if (selectedId === "") {
                state.session.selectedBlocks = [];
            } else {
                if (withCtrl) {
                    state.session.selectedBlocks = [
                        ...state.session.selectedBlocks,
                        selectedId,
                    ];
                } else {
                    state.session.selectedBlocks = [selectedId];
                }
            }
        },
        setBGColor: (state, action: PayloadAction<Color>) => {
            state.session.selectedBlocks.forEach((id) => {
                const block = state.session.template.blocks.find(
                    (block) => block.id === id,
                );
                if (block) {
                    if (action.payload.r >= 0)
                        block.bgColor.r = action.payload.r;
                    if (action.payload.g >= 0)
                        block.bgColor.g = action.payload.g;
                    if (action.payload.b >= 0)
                        block.bgColor.b = action.payload.b;
                    if (action.payload.a >= 0)
                        block.bgColor.a = action.payload.a;
                }
            });
        },
        setColor: (state, action: PayloadAction<Color>) => {
            state.session.selectedBlocks.forEach((id) => {
                const block = state.session.template.blocks.find(
                    (block) => block.id === id,
                );
                if (block) {
                    if (block.type === "text") {
                        if (action.payload.r >= 0)
                            block.text.color.r = action.payload.r;
                        if (action.payload.g >= 0)
                            block.text.color.g = action.payload.g;
                        if (action.payload.b >= 0)
                            block.text.color.b = action.payload.b;
                        if (action.payload.a >= 0)
                            block.text.color.a = action.payload.a;
                    } else if (block.type === "art") {
                        if (action.payload.r >= 0)
                            block.borderColor.r = action.payload.r;
                        if (action.payload.g >= 0)
                            block.borderColor.g = action.payload.g;
                        if (action.payload.b >= 0)
                            block.borderColor.b = action.payload.b;
                        if (action.payload.a >= 0)
                            block.borderColor.a = action.payload.a;
                    }
                }
            });
        },
        setNewPosition: (state, action: PayloadAction<Position>) => {
            state.session.selectedBlocks.forEach((id) => {
                const block = state.session.template.blocks.find(
                    (block) => block.id === id,
                );
                if (block) {
                    block.position.left += action.payload.left;
                    block.position.top += action.payload.top;
                }
            });
        },
        changeText: (state, action: PayloadAction<string>) => {
            state.session.selectedBlocks.forEach((id) => {
                const block = state.session.template.blocks.find(
                    (block) => block.id === id,
                );
                if (block && block.type === "text")
                    block.text.value = action.payload;
            });
        },
        setTextJustifyContent: (state, action: PayloadAction<string>) => {
            state.session.selectedBlocks.forEach((id) => {
                const block = state.session.template.blocks.find(
                    (block) => block.id === id,
                );
                if (block && block.type === "text")
                    block.positionText.justifyContent = action.payload;
            });
        },
        setTextAlignItems: (state, action: PayloadAction<string>) => {
            state.session.selectedBlocks.forEach((id) => {
                const block = state.session.template.blocks.find(
                    (block) => block.id === id,
                );
                if (block && block.type === "text")
                    block.positionText.alignItems = action.payload;
            });
        },
        changeArt: (state, action: PayloadAction<ArtName>) => {
            state.session.selectedBlocks.forEach((id) => {
                const block = state.session.template.blocks.find(
                    (block) => block.id === id,
                );
                if (block && block.type === "art")
                    block.artName = action.payload;
            });
        },
        changeImage: (state, action: PayloadAction<string>) => {
            const type = action.payload.includes("http") ? "link" : "base64";
            state.session.selectedBlocks.forEach((id) => {
                const block = state.session.template.blocks.find(
                    (block) => block.id === id,
                );
                if (block && block.type === "image") {
                    block.bgImage.data = action.payload;
                    block.bgImage.type = type;
                }
            });
        },
    },
});

export const {
    setSelectedBlock,
    setBGColor,
    setColor,
    setNewPosition,
    changeText,
    setTextJustifyContent,
    setTextAlignItems,
    changeArt,
    changeImage,
} = sessionReducer.actions;
export const sessionState = (state: RootState) => state.session.present;

export default sessionReducer.reducer;
