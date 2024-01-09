import { ArtName, Color, Image, Rotate, Scale } from "../type/type";

const ToolsActionTypes = {
    SET_BG_COLOR: "SET_BG_COLOR",
    SET_COLOR: "SET_COLOR",
    SET_TEXT_JUSTIFY_CONTENT: "SET_TEXT_JUSTIFY_CONTENT",
    SET_TEXT_ALIGN_ITEMS: "SET_TEXT_ALIGN_ITEMS",
    CHANGE_STYLE_TEXT: "CHANGE_STYLE_TEXT",
    CHANGE_SIZE_TEXT: "CHANGE_SIZE_TEXT",
    CHANGE_FONT_FAMILY_TEXT: "CHANGE_FONT_FAMILY_TEXT",
    CHANGE_ART: "CHANGE_ART",
    CHANGE_IMAGE: "CHANGE_IMAGE",
    SET_TEMPLATE: "SET_TEMPLATE",
    SET_ROTATE: "SET_ROTATE",
    SET_SCALE: "SET_SCALE",
};

interface ISetBGColor {
    type: typeof ToolsActionTypes.SET_BG_COLOR;
    payload: { color: Color; targets: Array<string> };
}
interface ISetColor {
    type: typeof ToolsActionTypes.SET_COLOR;
    payload: { color: Color; targets: Array<string> };
}
interface ISetTextJustifyContent {
    type: typeof ToolsActionTypes.SET_TEXT_JUSTIFY_CONTENT;
    payload: "center" | "start" | "end";
}
interface ISetTextAlignItems {
    type: typeof ToolsActionTypes.SET_TEXT_ALIGN_ITEMS;
    payload: "center" | "start" | "end";
}
interface IChangeStyleText {
    type: typeof ToolsActionTypes.CHANGE_STYLE_TEXT;
    payload: string;
}
interface IChangeSizeText {
    type: typeof ToolsActionTypes.CHANGE_SIZE_TEXT;
    payload: number;
}
interface IChangeFontFamilyText {
    type: typeof ToolsActionTypes.CHANGE_FONT_FAMILY_TEXT;
    payload: string;
}
interface IChangeArt {
    type: typeof ToolsActionTypes.CHANGE_ART;
    payload: ArtName;
}
interface IChangeImage {
    type: typeof ToolsActionTypes.CHANGE_IMAGE;
    payload: Image;
}
interface ISetTemplate {
    type: typeof ToolsActionTypes.SET_TEMPLATE;
    payload: string;
}
interface ISetRotate {
    type: typeof ToolsActionTypes.SET_ROTATE;
    payload: Rotate;
}
interface ISetScale {
    type: typeof ToolsActionTypes.SET_SCALE;
    payload: Scale;
}

type ToolsAction =
    | ISetBGColor
    | ISetColor
    | ISetTextJustifyContent
    | ISetTextAlignItems
    | IChangeStyleText
    | IChangeSizeText
    | IChangeFontFamilyText
    | IChangeArt
    | IChangeImage
    | ISetTemplate
    | ISetRotate
    | ISetScale;
export type {
    ToolsAction,
    ISetBGColor,
    ISetColor,
    ISetTextJustifyContent,
    ISetTextAlignItems,
    IChangeStyleText,
    IChangeSizeText,
    IChangeFontFamilyText,
    IChangeArt,
    IChangeImage,
    ISetTemplate,
    ISetRotate,
    ISetScale,
};
export { ToolsActionTypes };
