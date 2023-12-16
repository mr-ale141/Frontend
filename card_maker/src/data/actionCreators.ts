import { ArtName, Color, Position, Size } from "../type/type";
import { TitleActionType, Action } from "./typeActions";

export const setSelectedBlock = (id: string, withCtrl: boolean) => {
    return {
        type: TitleActionType.SET_SELECTED_BLOCK,
        payload: { id, withCtrl },
    };
};
export const setBGColor = (color: Color): Action => {
    return {
        type: TitleActionType.SET_BG_COLOR,
        payload: { ...color },
    };
};
export const setColor = (color: Color): Action => {
    return {
        type: TitleActionType.SET_COLOR,
        payload: { ...color },
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
export const changeText = (newText: string): Action => {
    return {
        type: TitleActionType.CHANGE_TEXT,
        payload: newText,
    };
};
export const setTextJustifyContent = (newSetting: string): Action => {
    return {
        type: TitleActionType.SET_TEXT_JUSTIFY_CONTENT,
        payload: newSetting,
    };
};
export const setTextAlignItems = (newSetting: string): Action => {
    return {
        type: TitleActionType.SET_TEXT_ALIGN_ITEMS,
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
