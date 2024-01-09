import { createStore } from "redux";
import headerReducer from "./reducers/headerReducer";
import toolsReducer from "./reducers/toolsReducer";
import workSpaceReducer from "./reducers/workSpaceReducer";
import undoRedo, { UpperState } from "../hocs/undoRedo";
import Action from "./actionTypes/actionTypes";
import { Session } from "./type/type";
import {
    HeaderAction,
    HeaderActionTypes,
} from "./actionTypes/headerActionTypes";
import { ToolsAction, ToolsActionTypes } from "./actionTypes/toolsActionTypes";
import {
    WorkSpaceAction,
    WorkSpaceActionTypes,
} from "./actionTypes/workSpaceActionTypes";

const rootReducer = (state: UpperState, action: Action): Session => {
    if (action.type in HeaderActionTypes) {
        return headerReducer(state, action as HeaderAction);
    } else if (action.type in ToolsActionTypes) {
        return toolsReducer(state, action as ToolsAction);
    } else if (action.type in WorkSpaceActionTypes) {
        return workSpaceReducer(state, action as WorkSpaceAction);
    } else {
        return state.present;
    }
};

const undoableReducer = undoRedo(rootReducer);

export const store = createStore(undoableReducer);

export type RootState = ReturnType<typeof undoableReducer>;

// Reducer<CombinedState<{header: never, tools: never, workSpace: never}>, ToolsReducerAction | WorkSpaceReducerAction>
