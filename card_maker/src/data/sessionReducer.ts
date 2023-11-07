import session from "./max_data";
import { Color, Session } from "../type/type";
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
            if (!action.payload.withCtrl) state.session.selectedBlocks = [];
            if (!state.session.selectedBlocks.includes(action.payload.id))
                state.session.selectedBlocks = [
                    ...state.session.selectedBlocks,
                    action.payload.id,
                ];
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
    },
});

export const { setSelectedBlock, setBGColor, setColor } =
    sessionReducer.actions;
export const sessionState = (state: RootState) => state.session;

export default sessionReducer.reducer;
