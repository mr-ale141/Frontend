import { templateSource } from "../max_data";
import { Session, TypeBlock } from "../type/type";
import { UpperState } from "../../hocs/undoRedo";
// import { minWidth, minHeight, maxWidth, maxHeight } from "../../components/ToolsPanel/tools/ChangeCanvasSize/ChangeCanvasSize";
import {
    ToolsActionTypes,
    IChangeArt,
    IChangeFontFamilyText,
    IChangeImage,
    IChangeSizeText,
    IChangeStyleText,
    ISetBGColor,
    ISetRotate,
    ISetScale,
    ISetTemplate,
    ISetTextAlignItems,
    ISetTextJustifyContent,
    ToolsAction,
} from "../actionTypes/toolsActionTypes";

function toolsReducer(state: UpperState, action: ToolsAction): Session {
    switch (action.type) {
        case ToolsActionTypes.SET_BG_COLOR: {
            const { color, targets } = (action as ISetBGColor).payload;
            return {
                ...state.present,
                template: {
                    ...state.present.template,
                    canvas: targets.includes(state.present.template.canvas.id)
                        ? {
                              ...state.present.template.canvas,
                              bgColor: color,
                          }
                        : state.present.template.canvas,
                    blocks: state.present.template.blocks.map((block) => {
                        if (targets.includes(block.id)) {
                            return { ...block, bgColor: color };
                        } else {
                            return block;
                        }
                    }),
                },
            };
        }
        case ToolsActionTypes.SET_COLOR: {
            const { color, targets } = (action as ISetBGColor).payload;
            return {
                ...state.present,
                template: {
                    ...state.present.template,
                    blocks: state.present.template.blocks.map((block) => {
                        if (targets.includes(block.id)) {
                            if (block.type === TypeBlock.text) {
                                return {
                                    ...block,
                                    text: { ...block.text, color },
                                };
                            } else if (block.type === TypeBlock.art) {
                                return { ...block, borderColor: color };
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
        case ToolsActionTypes.SET_TEXT_JUSTIFY_CONTENT: {
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
        case ToolsActionTypes.SET_TEXT_ALIGN_ITEMS: {
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
        case ToolsActionTypes.CHANGE_STYLE_TEXT: {
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
        case ToolsActionTypes.CHANGE_SIZE_TEXT: {
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
        case ToolsActionTypes.CHANGE_FONT_FAMILY_TEXT: {
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
        case ToolsActionTypes.CHANGE_ART: {
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
        case ToolsActionTypes.CHANGE_IMAGE: {
            const newImage = (action as IChangeImage).payload;
            return {
                ...state.present,
                template: {
                    ...state.present.template,
                    canvas: state.present.selectedBlocks.includes(
                        state.present.template.canvas.id,
                    )
                        ? {
                              ...state.present.template.canvas,
                              bgImage: newImage,
                              size: newImage.size,
                          }
                        : state.present.template.canvas,
                    blocks: state.present.template.blocks.map((block) => {
                        if (
                            state.present.selectedBlocks.includes(block.id) &&
                            block.type === TypeBlock.image
                        ) {
                            return {
                                ...block,
                                bgImage: newImage,
                                size: newImage.size,
                            };
                        } else {
                            return block;
                        }
                    }),
                },
            };
        }
        case ToolsActionTypes.SET_TEMPLATE: {
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
        case ToolsActionTypes.SET_ROTATE: {
            let newRotate = (action as ISetRotate).payload;
            return {
                ...state.present,
                template: {
                    ...state.present.template,
                    blocks: state.present.template.blocks.map((block) => {
                        if (state.present.selectedBlocks.includes(block.id)) {
                            if (
                                block.type === TypeBlock.text &&
                                (newRotate === 180 || newRotate === -180)
                            )
                                newRotate = 0;
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
        case ToolsActionTypes.SET_SCALE: {
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

export default toolsReducer;
