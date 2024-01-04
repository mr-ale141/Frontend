import session from "../data/max_data";
import { Session } from "../type/type";
import { Action } from "../data/typeActions";

export type UpperState = {
    past: Array<Session>;
    present: Session;
    future: Array<Session>;
};

function undoRedo(reducer: (state: UpperState, action: Action) => Session) {
    const initialState: UpperState = {
        past: new Array<Session>(),
        present: session,
        future: new Array<Session>(),
    };

    return function (state = initialState, action: Action) {
        const { past, present, future } = state;

        switch (action.type) {
            case "UNDO": {
                if (past.length !== 0) {
                    const previous = past[past.length - 1];
                    const newPast = past.slice(0, past.length - 1);
                    return {
                        past: newPast,
                        present: previous,
                        future: [present, ...future],
                    };
                } else {
                    return {
                        past: [...past],
                        present,
                        future: [...future],
                    };
                }
            }
            case "REDO": {
                if (future.length >= 1) {
                    const newFuture = future.slice(1);
                    const next = future[0];
                    return {
                        past: [...past, present],
                        present: next,
                        future: newFuture,
                    };
                } else {
                    return {
                        past: [...past],
                        present,
                        future: [...future],
                    };
                }
            }
            default: {
                const newPresent = reducer(state, action);
                if (present === newPresent) {
                    return state;
                }
                return {
                    past: [...past, present],
                    present: newPresent,
                    future: [],
                };
            }
        }
    };
}
export default undoRedo;
