import { artBlockSource, imageBlockSource, textBlockSource } from "../max_data";
import { v4 as uuidV4 } from "uuid";
import {
    ArtBlockType,
    ImageBlockType,
    Session,
    TextBlockType,
    TypeBlock,
} from "../type/type";
import { UpperState } from "../../hocs/undoRedo";
import {
    HeaderActionTypes,
    HeaderAction,
    IAddNewBlock,
    ISetOpenedTemplate,
} from "../actionTypes/headerActionTypes";

function headerReducer(state: UpperState, action: HeaderAction): Session {
    switch (action.type) {
        case HeaderActionTypes.SET_OPENED_TEMPLATE: {
            const newTemplate = (action as ISetOpenedTemplate).payload;
            return {
                selectedBlocks: [],
                template: newTemplate,
            };
        }
        case HeaderActionTypes.DELETE_SELECTED_BLOCKS: {
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
        case HeaderActionTypes.ADD_NEW_BLOCK: {
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
        default:
            return state.present;
    }
}

export default headerReducer;
