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
        setSelectedBlock: (state, action: PayloadAction<string>) => {
            state.session.selectedBlocks = [];
            state.session.selectedBlocks.push(action.payload);
        },
        setFillColorArt: (
            state,
            action: PayloadAction<{ id: string; color: Color }>,
        ) => {
            // session.selectedBlocks
            blk
                ? (blk.bgColor = action.payload.color)
                : console.log("art block not found");
        },
    },
});

export const { setSelectedBlock, setFillColorArt } = sessionReducer.actions;
export const sessionState = (state: RootState) => state.session;

export default sessionReducer.reducer;
