import { configureStore } from "@reduxjs/toolkit";
import sessionReducer from "./sessionReducer";
import undoable from "redux-undo";

export const store = configureStore({
    reducer: {
        session: undoable(sessionReducer),
    },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//     ReturnType,
//     RootState,
//     unknown,
//     Action<string>
// >;
