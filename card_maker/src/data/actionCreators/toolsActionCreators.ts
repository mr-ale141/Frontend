import { ArtName, Color, Rotate, Scale } from "../type/type";
import { ToolsAction, ToolsActionTypes } from "../actionTypes/toolsActionTypes";

const setBGColor = (color: Color, targets: Array<string>): ToolsAction => {
    return {
        type: ToolsActionTypes.SET_BG_COLOR,
        payload: { color, targets },
    };
};
const setColor = (color: Color, targets: Array<string>): ToolsAction => {
    return {
        type: ToolsActionTypes.SET_COLOR,
        payload: { color, targets },
    };
};
const setTextJustifyContent = (
    newSetting: "center" | "start" | "end",
): ToolsAction => {
    return {
        type: ToolsActionTypes.SET_TEXT_JUSTIFY_CONTENT,
        payload: newSetting,
    };
};
const setTextAlignItems = (
    newSetting: "center" | "start" | "end",
): ToolsAction => {
    return {
        type: ToolsActionTypes.SET_TEXT_ALIGN_ITEMS,
        payload: newSetting,
    };
};
const changeStyleText = (newSetting: string): ToolsAction => {
    return {
        type: ToolsActionTypes.CHANGE_STYLE_TEXT,
        payload: newSetting,
    };
};
const changeSizeText = (newSetting: number): ToolsAction => {
    return {
        type: ToolsActionTypes.CHANGE_SIZE_TEXT,
        payload: newSetting,
    };
};
const changeFontFamilyText = (newSetting: string): ToolsAction => {
    return {
        type: ToolsActionTypes.CHANGE_FONT_FAMILY_TEXT,
        payload: newSetting,
    };
};
const changeArt = (newArt: ArtName): ToolsAction => {
    return {
        type: ToolsActionTypes.CHANGE_ART,
        payload: newArt,
    };
};
const changeImage = (newSrc: string): ToolsAction => {
    return {
        type: ToolsActionTypes.CHANGE_IMAGE,
        payload: newSrc,
    };
};
const setTemplate = (newTemplateID: string): ToolsAction => {
    return {
        type: ToolsActionTypes.SET_TEMPLATE,
        payload: newTemplateID,
    };
};
const setRotate = (newRotate: Rotate): ToolsAction => {
    return {
        type: ToolsActionTypes.SET_ROTATE,
        payload: newRotate,
    };
};
const setScale = (newScale: Scale): ToolsAction => {
    return {
        type: ToolsActionTypes.SET_SCALE,
        payload: newScale,
    };
};

const toolsActionCreators = {
    setBGColor,
    setColor,
    setTextJustifyContent,
    setTextAlignItems,
    changeStyleText,
    changeSizeText,
    changeFontFamilyText,
    changeArt,
    changeImage,
    setTemplate,
    setRotate,
    setScale,
};

export default toolsActionCreators;
