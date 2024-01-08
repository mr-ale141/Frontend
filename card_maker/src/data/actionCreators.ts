import {
    ArtName,
    Color,
    Position,
    Rotate,
    Scale,
    Size,
    Template,
    TypeBlock,
} from "../type/type";
import { Action, TitleActionType } from "./typeActions";

export const setSelectedBlock = (id: string, withCtrl: boolean) => {
    return {
        type: TitleActionType.SET_SELECTED_BLOCK,
        payload: { id, withCtrl },
    };
};
export const setBGColor = (color: Color, targets: Array<string>): Action => {
    return {
        type: TitleActionType.SET_BG_COLOR,
        payload: { color, targets },
    };
};
export const setColor = (color: Color, targets: Array<string>): Action => {
    return {
        type: TitleActionType.SET_COLOR,
        payload: { color, targets },
    };
};
export const setNewPosition = (position: Position): Action => {
    return {
        type: TitleActionType.SET_NEW_POSITION,
        payload: { ...position },
    };
};
export const setNewSize = (size: Size): Action => {
    return {
        type: TitleActionType.SET_NEW_SIZE,
        payload: { ...size },
    };
};
export const changeCanvasSize = (size: Size): Action => {
    return {
        type: TitleActionType.CHANGE_CANVAS_SIZE,
        payload: { ...size },
    };
};
export const changeText = (newText: string): Action => {
    return {
        type: TitleActionType.CHANGE_TEXT,
        payload: newText,
    };
};
export const setTextJustifyContent = (
    newSetting: "center" | "start" | "end",
): Action => {
    return {
        type: TitleActionType.SET_TEXT_JUSTIFY_CONTENT,
        payload: newSetting,
    };
};
export const setTextAlignItems = (
    newSetting: "center" | "start" | "end",
): Action => {
    return {
        type: TitleActionType.SET_TEXT_ALIGN_ITEMS,
        payload: newSetting,
    };
};
export const changeStyleText = (newSetting: string): Action => {
    return {
        type: TitleActionType.CHANGE_STYLE_TEXT,
        payload: newSetting,
    };
};
export const changeSizeText = (newSetting: number): Action => {
    return {
        type: TitleActionType.CHANGE_SIZE_TEXT,
        payload: newSetting,
    };
};
export const changeFontFamilyText = (newSetting: string): Action => {
    return {
        type: TitleActionType.CHANGE_FONT_FAMILY_TEXT,
        payload: newSetting,
    };
};
export const changeArt = (newArt: ArtName): Action => {
    return {
        type: TitleActionType.CHANGE_ART,
        payload: newArt,
    };
};
export const changeImage = (newSrc: string): Action => {
    return {
        type: TitleActionType.CHANGE_IMAGE,
        payload: newSrc,
    };
};
export const setOpenedTemplate = (newTemplate: Template): Action => {
    return {
        type: TitleActionType.SET_OPENED_TEMPLATE,
        payload: newTemplate,
    };
};
export const deleteSelectedBlocks = (): Action => {
    return {
        type: TitleActionType.DELETE_SELECTED_BLOCKS,
    };
};
export const addNewBlock = (newType: TypeBlock): Action => {
    return {
        type: TitleActionType.ADD_NEW_BLOCK,
        payload: newType,
    };
};
export const setTemplate = (newTemplateID: string): Action => {
    return {
        type: TitleActionType.SET_TEMPLATE,
        payload: newTemplateID,
    };
};
export const setRotate = (newRotate: Rotate): Action => {
    return {
        type: TitleActionType.SET_ROTATE,
        payload: newRotate,
    };
};
export const setScale = (newScale: Scale): Action => {
    return {
        type: TitleActionType.SET_SCALE,
        payload: newScale,
    };
};
export const undo = (): Action => {
    return {
        type: TitleActionType.UNDO,
    };
};
export const redo = (): Action => {
    return {
        type: TitleActionType.REDO,
    };
};
