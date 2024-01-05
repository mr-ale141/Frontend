import {
    artBlockSource,
    imageBlockSource,
    templateSource,
    textBlockSource,
} from "./max_data";
import { v4 as uuidV4 } from "uuid";
import {
    ArtBlockType,
    Image,
    ImageBlockType,
    Session,
    TextBlockType,
    TypeBlock,
} from "../type/type";
import {
    Action,
    IAddNewBlock,
    IChangeArt,
    IChangeFontFamilyText,
    IChangeImage,
    IChangeSizeText,
    IChangeStyleText,
    IChangeText,
    ISetBGColor,
    ISetNewPosition,
    ISetNewSize,
    ISetOpenedTemplate,
    ISetRotate,
    ISetScale,
    ISetSelectedBlock,
    ISetTemplate,
    ISetTextAlignItems,
    ISetTextJustifyContent,
    TitleActionType,
} from "./typeActions";
import { UpperState } from "../hocs/undoRedo";

function sessionReducer(state: UpperState, action: Action): Session {
    switch (action.type) {
        case TitleActionType.SET_SELECTED_BLOCK: {
            let newList: Array<string>;
            const id = (action as ISetSelectedBlock).payload.id;
            const withCtrl = (action as ISetSelectedBlock).payload.withCtrl;
            if (id === "") {
                newList = [];
            } else if (withCtrl) {
                newList = [...state.present.selectedBlocks, id];
            } else {
                newList = [id];
            }
            return {
                ...state.present,
                selectedBlocks: newList,
            };
        }
        case TitleActionType.SET_BG_COLOR: {
            const newColor = (action as ISetBGColor).payload;
            return {
                ...state.present,
                template: {
                    ...state.present.template,
                    canvas: state.present.selectedBlocks.includes(
                        state.present.template.canvas.id,
                    )
                        ? {
                              ...state.present.template.canvas,
                              bgColor: newColor,
                          }
                        : state.present.template.canvas,
                    blocks: state.present.template.blocks.map((block) => {
                        if (state.present.selectedBlocks.includes(block.id)) {
                            return { ...block, bgColor: newColor };
                        } else {
                            return block;
                        }
                    }),
                },
            };
        }
        case TitleActionType.SET_COLOR: {
            const newColor = (action as ISetBGColor).payload;
            return {
                ...state.present,
                template: {
                    ...state.present.template,
                    blocks: state.present.template.blocks.map((block) => {
                        if (state.present.selectedBlocks.includes(block.id)) {
                            if (block.type === TypeBlock.text) {
                                return {
                                    ...block,
                                    text: { ...block.text, color: newColor },
                                };
                            } else if (block.type === TypeBlock.art) {
                                return { ...block, borderColor: newColor };
                            } else {
                                return block;
                            }
                        } else {
                            return block;
                        }
                    }),
                },
            };
        }
        case TitleActionType.SET_NEW_POSITION: {
            const offset = (action as ISetNewPosition).payload;
            return {
                ...state.present,
                template: {
                    ...state.present.template,
                    blocks: state.present.template.blocks.map((block) => {
                        if (state.present.selectedBlocks.includes(block.id)) {
                            const newBlock = {
                                ...block,
                                position: { ...block.position },
                            };
                            newBlock.position.top += offset.top;
                            newBlock.position.left += offset.left;
                            return newBlock;
                        } else {
                            return block;
                        }
                    }),
                },
            };
        }
        case TitleActionType.SET_NEW_SIZE: {
            const offset = (action as ISetNewSize).payload;
            return {
                ...state.present,
                template: {
                    ...state.present.template,
                    blocks: state.present.template.blocks.map((block) => {
                        if (state.present.selectedBlocks.includes(block.id)) {
                            const newBlock = {
                                ...block,
                                size: { ...block.size },
                            };
                            newBlock.size.width += offset.width;
                            newBlock.size.height += offset.height;
                            return newBlock;
                        } else {
                            return block;
                        }
                    }),
                },
            };
        }
        case TitleActionType.CHANGE_CANVAS_SIZE: {
            const newCanvasSize = (action as ISetNewSize).payload;
            return {
                ...state.present,
                template: {
                    ...state.present.template,
                    canvas: {
                        ...state.present.template.canvas,
                        size: newCanvasSize,
                    },
                },
            };
        }
        case TitleActionType.CHANGE_TEXT: {
            const newText = (action as IChangeText).payload;
            return {
                ...state.present,
                template: {
                    ...state.present.template,
                    blocks: state.present.template.blocks.map((block) => {
                        if (
                            state.present.selectedBlocks.includes(block.id) &&
                            block.type === TypeBlock.text
                        ) {
                            return {
                                ...block,
                                text: { ...block.text, value: newText },
                            };
                        } else {
                            return block;
                        }
                    }),
                },
            };
        }
        case TitleActionType.SET_TEXT_JUSTIFY_CONTENT: {
            const newSetting = (action as ISetTextJustifyContent).payload;
            return {
                ...state.present,
                template: {
                    ...state.present.template,
                    blocks: state.present.template.blocks.map((block) => {
                        if (
                            state.present.selectedBlocks.includes(block.id) &&
                            block.type === TypeBlock.text
                        ) {
                            return {
                                ...block,
                                positionText: {
                                    ...block.positionText,
                                    justifyContent: newSetting,
                                },
                            };
                        } else {
                            return block;
                        }
                    }),
                },
            };
        }
        case TitleActionType.SET_TEXT_ALIGN_ITEMS: {
            const newSetting = (action as ISetTextAlignItems).payload;
            return {
                ...state.present,
                template: {
                    ...state.present.template,
                    blocks: state.present.template.blocks.map((block) => {
                        if (
                            state.present.selectedBlocks.includes(block.id) &&
                            block.type === TypeBlock.text
                        ) {
                            return {
                                ...block,
                                positionText: {
                                    ...block.positionText,
                                    alignItems: newSetting,
                                },
                            };
                        } else {
                            return block;
                        }
                    }),
                },
            };
        }
        case TitleActionType.CHANGE_STYLE_TEXT: {
            const newSetting = (action as IChangeStyleText).payload;
            return {
                ...state.present,
                template: {
                    ...state.present.template,
                    blocks: state.present.template.blocks.map((block) => {
                        if (
                            state.present.selectedBlocks.includes(block.id) &&
                            block.type === TypeBlock.text
                        ) {
                            return {
                                ...block,
                                text: {
                                    ...block.text,
                                    fontWeight:
                                        block.text.fontWeight === 400
                                            ? newSetting === "bold"
                                                ? 800
                                                : block.text.fontWeight
                                            : newSetting === "bold"
                                            ? 400
                                            : block.text.fontWeight,
                                    fontStyle:
                                        block.text.fontStyle === "normal"
                                            ? newSetting === "italic"
                                                ? "italic"
                                                : block.text.fontStyle
                                            : newSetting === "italic"
                                            ? "normal"
                                            : block.text.fontStyle,
                                    textDecoration:
                                        block.text.textDecoration === "none"
                                            ? newSetting === "underline"
                                                ? "underline"
                                                : block.text.textDecoration
                                            : newSetting === "underline"
                                            ? "none"
                                            : block.text.textDecoration,
                                },
                            };
                        } else {
                            return block;
                        }
                    }),
                },
            };
        }
        case TitleActionType.CHANGE_SIZE_TEXT: {
            const newSetting = (action as IChangeSizeText).payload;
            return {
                ...state.present,
                template: {
                    ...state.present.template,
                    blocks: state.present.template.blocks.map((block) => {
                        if (
                            state.present.selectedBlocks.includes(block.id) &&
                            block.type === TypeBlock.text
                        ) {
                            return {
                                ...block,
                                text: {
                                    ...block.text,
                                    fontSize: newSetting,
                                },
                            };
                        } else {
                            return block;
                        }
                    }),
                },
            };
        }
        case TitleActionType.CHANGE_FONT_FAMILY_TEXT: {
            const newSetting = (action as IChangeFontFamilyText).payload;
            return {
                ...state.present,
                template: {
                    ...state.present.template,
                    blocks: state.present.template.blocks.map((block) => {
                        if (
                            state.present.selectedBlocks.includes(block.id) &&
                            block.type === TypeBlock.text
                        ) {
                            return {
                                ...block,
                                text: {
                                    ...block.text,
                                    fontFamily: newSetting,
                                },
                            };
                        } else {
                            return block;
                        }
                    }),
                },
            };
        }
        case TitleActionType.CHANGE_ART: {
            const newArtName = (action as IChangeArt).payload;
            return {
                ...state.present,
                template: {
                    ...state.present.template,
                    blocks: state.present.template.blocks.map((block) => {
                        if (
                            state.present.selectedBlocks.includes(block.id) &&
                            block.type === TypeBlock.art
                        ) {
                            return {
                                ...block,
                                artName: newArtName,
                            };
                        } else {
                            return block;
                        }
                    }),
                },
            };
        }
        case TitleActionType.CHANGE_IMAGE: {
            const newSrc = (action as IChangeImage).payload;
            const typeSrc = newSrc.includes("http") ? "link" : "base64";
            const newBgImage: Image = { data: newSrc, type: typeSrc };
            return {
                ...state.present,
                template: {
                    ...state.present.template,
                    canvas: state.present.selectedBlocks.includes(
                        state.present.template.canvas.id,
                    )
                        ? {
                              ...state.present.template.canvas,
                              bgImage: newBgImage,
                          }
                        : state.present.template.canvas,
                    blocks: state.present.template.blocks.map((block) => {
                        if (
                            state.present.selectedBlocks.includes(block.id) &&
                            block.type === TypeBlock.image
                        ) {
                            return {
                                ...block,
                                bgImage: newBgImage,
                            };
                        } else {
                            return block;
                        }
                    }),
                },
            };
        }
        case TitleActionType.SET_OPENED_TEMPLATE: {
            const newTemplate = (action as ISetOpenedTemplate).payload;
            return {
                editHistory: [],
                selectedBlocks: [],
                template: newTemplate,
            };
        }
        case TitleActionType.DELETE_SELECTED_BLOCKS: {
            let newBlocks = [...state.present.template.blocks];
            state.present.selectedBlocks.forEach((deleteID) => {
                const blocksArray: Array<
                    ArtBlockType | TextBlockType | ImageBlockType
                > = [];
                newBlocks.forEach((block) => {
                    if (deleteID !== block.id) {
                        blocksArray.push(block);
                    }
                });
                newBlocks = blocksArray;
            });
            return {
                ...state.present,
                selectedBlocks: [],
                template: {
                    ...state.present.template,
                    blocks: newBlocks,
                },
            };
        }
        case TitleActionType.ADD_NEW_BLOCK: {
            const newBlockType = (action as IAddNewBlock).payload;
            const newId = uuidV4();
            let newBlock;
            switch (newBlockType) {
                case TypeBlock.art:
                    newBlock = artBlockSource[0];
                    newBlock.id = newId;
                    break;
                case TypeBlock.text:
                    newBlock = textBlockSource[0];
                    newBlock.id = newId;
                    break;
                case TypeBlock.image:
                    newBlock = imageBlockSource[0];
                    newBlock.id = newId;
                    break;
                default:
                    break;
            }
            if (newBlock)
                return {
                    ...state.present,
                    selectedBlocks: [newBlock.id],
                    template: {
                        ...state.present.template,
                        blocks: [
                            ...state.present.template.blocks,
                            { ...newBlock },
                        ],
                    },
                };
            else return state.present;
        }
        case TitleActionType.SET_TEMPLATE: {
            const newTemplateID = (action as ISetTemplate).payload;
            const newTemplate = templateSource.find(
                (template) => template.id === newTemplateID,
            );
            if (newTemplate)
                return {
                    ...state.present,
                    template: newTemplate,
                };
            else return state.present;
        }
        case TitleActionType.SET_ROTATE: {
            const newRotate = (action as ISetRotate).payload;
            return {
                ...state.present,
                template: {
                    ...state.present.template,
                    blocks: state.present.template.blocks.map((block) => {
                        if (state.present.selectedBlocks.includes(block.id)) {
                            return {
                                ...block,
                                rotate: newRotate,
                            };
                        } else {
                            return block;
                        }
                    }),
                },
            };
        }
        case TitleActionType.SET_SCALE: {
            const newScale = (action as ISetScale).payload;
            return {
                ...state.present,
                template: {
                    ...state.present.template,
                    blocks: state.present.template.blocks.map((block) => {
                        if (state.present.selectedBlocks.includes(block.id)) {
                            return {
                                ...block,
                                scale: newScale,
                            };
                        } else {
                            return block;
                        }
                    }),
                },
            };
        }
        default:
            return state.present;
    }
}

export default sessionReducer;
