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
                targetTagName: string;
            }>,
        ) => {
            if (action.payload.withCtrl) {
                state.session.selectedTagName = "";
            } else {
                state.session.selectedBlocks = [];
                state.session.selectedTagName = action.payload.targetTagName;
            }
            if (!state.session.selectedBlocks.includes(action.payload.id))
                state.session.selectedBlocks.push(action.payload.id);
        },
        setBGColor: (state, action: PayloadAction<Color>) => {
            state.session.selectedBlocks.forEach((id) => {
                const block = state.session.template.blocks.find(
                    (block) => block.id === id,
                );
                if (block) {
                    if (action.payload.r) block.bgColor.r = action.payload.r;
                    if (action.payload.g) block.bgColor.g = action.payload.g;
                    if (action.payload.b) block.bgColor.b = action.payload.b;
                    if (action.payload.a) block.bgColor.a = action.payload.a;
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
                        if (action.payload.r)
                            block.text.color.r = action.payload.r;
                        if (action.payload.g)
                            block.text.color.g = action.payload.g;
                        if (action.payload.b)
                            block.text.color.b = action.payload.b;
                        if (action.payload.a)
                            block.text.color.a = action.payload.a;
                    } else if (block.type === "art") {
                        if (action.payload.r)
                            block.borderColor.r = action.payload.r;
                        if (action.payload.g)
                            block.borderColor.g = action.payload.g;
                        if (action.payload.b)
                            block.borderColor.b = action.payload.b;
                        if (action.payload.a)
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
