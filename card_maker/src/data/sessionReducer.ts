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
            if (
                state.session.selectedBlocks.length <= 1 ||
                action.payload.withCtrl ||
                action.payload.id === "canvas"
            ) {
                if (!action.payload.withCtrl) state.session.selectedBlocks = [];
                if (!state.session.selectedBlocks.includes(action.payload.id))
                    state.session.selectedBlocks = [
                        ...state.session.selectedBlocks,
                        action.payload.id,
                    ];
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
        setStartPosition: (state, action: PayloadAction<Position>) => {
            state.session.startPosition = action.payload;
        },
        setEndPosition: (state, action: PayloadAction<Position>) => {
            const offset: Position = {
                left: action.payload.left - state.session.startPosition.left,
                top: action.payload.top - state.session.startPosition.top,
            };
            state.session.selectedBlocks.forEach((id) => {
                const block = state.session.template.blocks.find(
                    (block) => block.id === id,
                );
                if (block) {
                    block.position.left += offset.left;
                    block.position.top += offset.top;
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
    setStartPosition,
    setEndPosition,
    changeText,
    changeArt,
    changeImage,
} = sessionReducer.actions;
export const sessionState = (state: RootState) => state.session.present;

export default sessionReducer.reducer;
