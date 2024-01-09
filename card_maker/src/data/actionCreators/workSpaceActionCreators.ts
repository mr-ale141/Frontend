import { Position, Size } from "../type/type";
import {
    WorkSpaceAction,
    WorkSpaceActionTypes,
} from "../actionTypes/workSpaceActionTypes";

const setSelectedBlock = (id: string, withCtrl: boolean): WorkSpaceAction => {
    return {
        type: WorkSpaceActionTypes.SET_SELECTED_BLOCK,
        payload: { id, withCtrl },
    };
};
const setNewPosition = (position: Position): WorkSpaceAction => {
    return {
        type: WorkSpaceActionTypes.SET_NEW_POSITION,
        payload: { ...position },
    };
};
const setNewSize = (size: Size): WorkSpaceAction => {
    return {
        type: WorkSpaceActionTypes.SET_NEW_SIZE,
        payload: { ...size },
    };
};
const changeCanvasSize = (size: Size): WorkSpaceAction => {
    return {
        type: WorkSpaceActionTypes.CHANGE_CANVAS_SIZE,
        payload: { ...size },
    };
};
const changeText = (newText: string): WorkSpaceAction => {
    return {
        type: WorkSpaceActionTypes.CHANGE_TEXT,
        payload: newText,
    };
};

const workSpaceActionCreators = {
    setSelectedBlock,
    setNewPosition,
    setNewSize,
    changeCanvasSize,
    changeText,
};

export default workSpaceActionCreators;
