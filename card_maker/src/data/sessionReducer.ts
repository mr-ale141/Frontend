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
            action: PayloadAction<{ id: string; withCtrl: boolean }>,
        ) => {
            if (!action.payload.withCtrl) state.session.selectedBlocks = [];
            state.session.selectedBlocks.push(action.payload.id);
        },
        setBGColorBlock: (state, action: PayloadAction<Color>) => {
            state.session.selectedBlocks.forEach((id) => {
                const block = state.session.template.blocks.find(
                    (block) => block.id === id,
                );
                if (block) block.bgColor = action.payload;
            });
        },
    },
});

export const { setSelectedBlock, setBGColorBlock } = sessionReducer.actions;
export const sessionState = (state: RootState) => state.session;

export default sessionReducer.reducer;
