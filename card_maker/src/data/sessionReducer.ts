import session, {
    artBlockSource,
    imageBlockSource,
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
    ISetNewTemplate,
    ISetSelectedBlock,
    ISetTextAlignItems,
    ISetTextJustifyContent,
    TitleActionType,
} from "./typeActions";

function sessionReducer(state = session, action: Action): Session {
    switch (action.type) {
        case TitleActionType.SET_SELECTED_BLOCK: {
            let newList: Array<string>;
            const id = (action as ISetSelectedBlock).payload.id;
            const withCtrl = (action as ISetSelectedBlock).payload.withCtrl;
            if (id === "") {
                newList = [];
            } else {
                if (withCtrl) {
                    newList = [...state.selectedBlocks, id];
                } else {
                    newList = [id];
                }
            }
            return {
                ...state,
                selectedBlocks: newList,
            };
        }
        case TitleActionType.SET_BG_COLOR: {
            const newColor = (action as ISetBGColor).payload;
            return {
                ...state,
                template: {
                    ...state.template,
                    canvas: state.selectedBlocks.includes(
                        state.template.canvas.id,
                    )
                        ? { ...state.template.canvas, bgColor: newColor }
                        : state.template.canvas,
                    blocks: state.template.blocks.map((block) => {
                        if (state.selectedBlocks.includes(block.id)) {
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
                ...state,
                template: {
                    ...state.template,
                    blocks: state.template.blocks.map((block) => {
                        if (state.selectedBlocks.includes(block.id)) {
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
                ...state,
                template: {
                    ...state.template,
                    blocks: state.template.blocks.map((block) => {
                        if (state.selectedBlocks.includes(block.id)) {
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
                ...state,
                template: {
                    ...state.template,
                    blocks: state.template.blocks.map((block) => {
                        if (state.selectedBlocks.includes(block.id)) {
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
        case TitleActionType.CHANGE_TEXT: {
            const newText = (action as IChangeText).payload;
            return {
                ...state,
                template: {
                    ...state.template,
                    blocks: state.template.blocks.map((block) => {
                        if (
                            state.selectedBlocks.includes(block.id) &&
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
                ...state,
                template: {
                    ...state.template,
                    blocks: state.template.blocks.map((block) => {
                        if (
                            state.selectedBlocks.includes(block.id) &&
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
                ...state,
                template: {
                    ...state.template,
                    blocks: state.template.blocks.map((block) => {
                        if (
                            state.selectedBlocks.includes(block.id) &&
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
                ...state,
                template: {
                    ...state.template,
                    blocks: state.template.blocks.map((block) => {
                        if (
                            state.selectedBlocks.includes(block.id) &&
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
                ...state,
                template: {
                    ...state.template,
                    blocks: state.template.blocks.map((block) => {
                        if (
                            state.selectedBlocks.includes(block.id) &&
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
                ...state,
                template: {
                    ...state.template,
                    blocks: state.template.blocks.map((block) => {
                        if (
                            state.selectedBlocks.includes(block.id) &&
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
                ...state,
                template: {
                    ...state.template,
                    blocks: state.template.blocks.map((block) => {
                        if (
                            state.selectedBlocks.includes(block.id) &&
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
                ...state,
                template: {
                    ...state.template,
                    canvas: state.selectedBlocks.includes(
                        state.template.canvas.id,
                    )
                        ? { ...state.template.canvas, bgImage: newBgImage }
                        : state.template.canvas,
                    blocks: state.template.blocks.map((block) => {
                        if (
                            state.selectedBlocks.includes(block.id) &&
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
        case TitleActionType.SET_NEW_TEMPLATE: {
            const newTemplate = (action as ISetNewTemplate).payload;
            return {
                editHistory: [],
                selectedBlocks: [],
                template: newTemplate,
            };
        }
        case TitleActionType.DELETE_SELECTED_BLOCKS: {
            let newBlocks = [...state.template.blocks];
            state.selectedBlocks.forEach((deleteID) => {
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
                ...state,
                selectedBlocks: [],
                template: {
                    ...state.template,
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
                    ...state,
                    selectedBlocks: [newBlock.id],
                    template: {
                        ...state.template,
                        blocks: [...state.template.blocks, { ...newBlock }],
                    },
                };
            else return state;
        }
        default:
            return state;
    }
}

export default sessionReducer;
