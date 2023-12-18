import { createStore } from "redux";
import sessionReducer from "./sessionReducer";
import undoRedo from "../hocs/undoRedo";

const undoableReducer = undoRedo(sessionReducer);

export const store = createStore(undoableReducer);

export type RootState = ReturnType<typeof undoableReducer>;
