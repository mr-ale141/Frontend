import { createStore } from "redux";
import sessionReducer from "./sessionReducer";

export const store = createStore(sessionReducer);

export type RootState = ReturnType<typeof sessionReducer>;
