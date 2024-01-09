import { Session, TypeBlock } from "../type/type";
import { UpperState } from "../../hocs/undoRedo";
import {
    WorkSpaceActionTypes,
    ISetSelectedBlock,
    IChangeText,
    ISetNewPosition,
    ISetNewSize,
    WorkSpaceAction,
} from "../actionTypes/workSpaceActionTypes";

function workSpaceReducer(state: UpperState, action: WorkSpaceAction): Session {
    switch (action.type) {
        case WorkSpaceActionTypes.SET_SELECTED_BLOCK: {
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
        case WorkSpaceActionTypes.SET_NEW_POSITION: {
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
        case WorkSpaceActionTypes.SET_NEW_SIZE: {
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
        case WorkSpaceActionTypes.CHANGE_CANVAS_SIZE: {
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
        case WorkSpaceActionTypes.CHANGE_TEXT: {
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
        default:
            return state.present;
    }
}

export default workSpaceReducer;
