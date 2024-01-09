import { Template, TypeBlock } from "../type/type";
import {
    HeaderAction,
    HeaderActionTypes,
} from "../actionTypes/headerActionTypes";

const setOpenedTemplate = (newTemplate: Template): HeaderAction => {
    return {
        type: HeaderActionTypes.SET_OPENED_TEMPLATE,
        payload: newTemplate,
    };
};
const deleteSelectedBlocks = (): HeaderAction => {
    return {
        type: HeaderActionTypes.DELETE_SELECTED_BLOCKS,
    };
};
const addNewBlock = (newType: TypeBlock): HeaderAction => {
    return {
        type: HeaderActionTypes.ADD_NEW_BLOCK,
        payload: newType,
    };
};
const undo = (): HeaderAction => {
    return {
        type: HeaderActionTypes.UNDO,
    };
};
const redo = (): HeaderAction => {
    return {
        type: HeaderActionTypes.REDO,
    };
};

const headerActionCreators = {
    setOpenedTemplate,
    deleteSelectedBlocks,
    addNewBlock,
    undo,
    redo,
};

export default headerActionCreators;
