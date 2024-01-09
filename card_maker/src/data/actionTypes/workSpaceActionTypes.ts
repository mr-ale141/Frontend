import { Position, Size } from "../type/type";

const WorkSpaceActionTypes = {
    SET_SELECTED_BLOCK: "SET_SELECTED_BLOCK",
    SET_NEW_POSITION: "SET_NEW_POSITION",
    SET_NEW_SIZE: "SET_NEW_SIZE",
    CHANGE_CANVAS_SIZE: "CHANGE_CANVAS_SIZE",
    CHANGE_TEXT: "CHANGE_TEXT",
};

interface ISetSelectedBlock {
    type: typeof WorkSpaceActionTypes.SET_SELECTED_BLOCK;
    payload: {
        id: string;
        withCtrl: boolean;
    };
}
interface ISetNewPosition {
    type: typeof WorkSpaceActionTypes.SET_NEW_POSITION;
    payload: Position;
}
interface ISetNewSize {
    type: typeof WorkSpaceActionTypes.SET_NEW_SIZE;
    payload: Size;
}
interface IChangeCanvasSize {
    type: typeof WorkSpaceActionTypes.CHANGE_CANVAS_SIZE;
    payload: Size;
}
interface IChangeText {
    type: typeof WorkSpaceActionTypes.CHANGE_TEXT;
    payload: string;
}

type WorkSpaceAction =
    | ISetSelectedBlock
    | ISetNewPosition
    | ISetNewSize
    | IChangeCanvasSize
    | IChangeText;

export type {
    WorkSpaceAction,
    ISetSelectedBlock,
    ISetNewPosition,
    ISetNewSize,
    IChangeCanvasSize,
    IChangeText,
};
export { WorkSpaceActionTypes };
