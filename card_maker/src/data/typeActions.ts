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

const TitleActionType = {
    SET_SELECTED_BLOCK: "SET_SELECTED_BLOCK",
    SET_BG_COLOR: "SET_BG_COLOR",
    SET_COLOR: "SET_COLOR",
    SET_NEW_POSITION: "SET_NEW_POSITION",
    SET_NEW_SIZE: "SET_NEW_SIZE",
    CHANGE_CANVAS_SIZE: "CHANGE_CANVAS_SIZE",
    CHANGE_TEXT: "CHANGE_TEXT",
    SET_TEXT_JUSTIFY_CONTENT: "SET_TEXT_JUSTIFY_CONTENT",
    SET_TEXT_ALIGN_ITEMS: "SET_TEXT_ALIGN_ITEMS",
    CHANGE_STYLE_TEXT: "CHANGE_STYLE_TEXT",
    CHANGE_SIZE_TEXT: "CHANGE_SIZE_TEXT",
    CHANGE_FONT_FAMILY_TEXT: "CHANGE_FONT_FAMILY_TEXT",
    CHANGE_ART: "CHANGE_ART",
    CHANGE_IMAGE: "CHANGE_IMAGE",
    SET_OPENED_TEMPLATE: "SET_OPENED_TEMPLATE",
    DELETE_SELECTED_BLOCKS: "DELETE_SELECTED_BLOCKS",
    ADD_NEW_BLOCK: "ADD_NEW_BLOCK",
    SET_TEMPLATE: "SET_TEMPLATE",
    SET_ROTATE: "SET_ROTATE",
    SET_SCALE: "SET_SCALE",
    UNDO: "UNDO",
    REDO: "REDO",
};

interface ISetSelectedBlock {
    type: typeof TitleActionType.SET_SELECTED_BLOCK;
    payload: {
        id: string;
        withCtrl: boolean;
    };
}
interface ISetBGColor {
    type: typeof TitleActionType.SET_BG_COLOR;
    payload: Color;
}
interface ISetColor {
    type: typeof TitleActionType.SET_COLOR;
    payload: Color;
}
interface ISetNewPosition {
    type: typeof TitleActionType.SET_NEW_POSITION;
    payload: Position;
}
interface ISetNewSize {
    type: typeof TitleActionType.SET_NEW_SIZE;
    payload: Size;
}
interface IChangeCanvasSize {
    type: typeof TitleActionType.CHANGE_CANVAS_SIZE;
    payload: Size;
}
interface IChangeText {
    type: typeof TitleActionType.CHANGE_TEXT;
    payload: string;
}
interface ISetTextJustifyContent {
    type: typeof TitleActionType.SET_TEXT_JUSTIFY_CONTENT;
    payload: "center" | "start" | "end";
}
interface ISetTextAlignItems {
    type: typeof TitleActionType.SET_TEXT_ALIGN_ITEMS;
    payload: "center" | "start" | "end";
}
interface IChangeStyleText {
    type: typeof TitleActionType.CHANGE_STYLE_TEXT;
    payload: string;
}
interface IChangeSizeText {
    type: typeof TitleActionType.CHANGE_SIZE_TEXT;
    payload: number;
}
interface IChangeFontFamilyText {
    type: typeof TitleActionType.CHANGE_FONT_FAMILY_TEXT;
    payload: string;
}
interface IChangeArt {
    type: typeof TitleActionType.CHANGE_ART;
    payload: ArtName;
}
interface IChangeImage {
    type: typeof TitleActionType.CHANGE_IMAGE;
    payload: string;
}
interface ISetOpenedTemplate {
    type: typeof TitleActionType.SET_OPENED_TEMPLATE;
    payload: Template;
}
interface IDeleteSelectedBlocks {
    type: typeof TitleActionType.DELETE_SELECTED_BLOCKS;
}
interface IAddNewBlock {
    type: typeof TitleActionType.ADD_NEW_BLOCK;
    payload: TypeBlock;
}
interface ISetTemplate {
    type: typeof TitleActionType.SET_TEMPLATE;
    payload: string;
}
interface ISetRotate {
    type: typeof TitleActionType.SET_ROTATE;
    payload: Rotate;
}
interface ISetScale {
    type: typeof TitleActionType.SET_SCALE;
    payload: Scale;
}
interface IUndo {
    type: typeof TitleActionType.UNDO;
}
interface IRedo {
    type: typeof TitleActionType.REDO;
}
interface IEmptyAction {
    type: "";
}

type Action =
    | ISetSelectedBlock
    | ISetBGColor
    | ISetColor
    | ISetNewPosition
    | ISetNewSize
    | IChangeCanvasSize
    | IChangeText
    | ISetTextJustifyContent
    | ISetTextAlignItems
    | IChangeStyleText
    | IChangeSizeText
    | IChangeFontFamilyText
    | IChangeArt
    | IChangeImage
    | ISetOpenedTemplate
    | IDeleteSelectedBlocks
    | IAddNewBlock
    | ISetTemplate
    | ISetRotate
    | ISetScale
    | IUndo
    | IRedo
    | IEmptyAction;
export type {
    Action,
    ISetSelectedBlock,
    ISetBGColor,
    ISetColor,
    ISetNewPosition,
    ISetNewSize,
    IChangeCanvasSize,
    IChangeText,
    ISetTextJustifyContent,
    ISetTextAlignItems,
    IChangeStyleText,
    IChangeSizeText,
    IChangeFontFamilyText,
    IChangeArt,
    IChangeImage,
    ISetOpenedTemplate,
    IDeleteSelectedBlocks,
    IAddNewBlock,
    ISetTemplate,
    ISetRotate,
    ISetScale,
    IUndo,
    IRedo,
    IEmptyAction,
};
export { TitleActionType };
