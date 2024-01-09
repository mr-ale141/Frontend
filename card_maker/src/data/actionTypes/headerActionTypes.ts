import { Template, TypeBlock } from "../type/type";

const HeaderActionTypes = {
    SET_OPENED_TEMPLATE: "SET_OPENED_TEMPLATE",
    DELETE_SELECTED_BLOCKS: "DELETE_SELECTED_BLOCKS",
    ADD_NEW_BLOCK: "ADD_NEW_BLOCK",
    UNDO: "UNDO",
    REDO: "REDO",
};

interface ISetOpenedTemplate {
    type: typeof HeaderActionTypes.SET_OPENED_TEMPLATE;
    payload: Template;
}
interface IDeleteSelectedBlocks {
    type: typeof HeaderActionTypes.DELETE_SELECTED_BLOCKS;
}
interface IAddNewBlock {
    type: typeof HeaderActionTypes.ADD_NEW_BLOCK;
    payload: TypeBlock;
}
interface IUndo {
    type: typeof HeaderActionTypes.UNDO;
}
interface IRedo {
    type: typeof HeaderActionTypes.REDO;
}
// interface IEmptyAction {
//     type: "";
// }

type HeaderAction =
    | ISetOpenedTemplate
    | IDeleteSelectedBlocks
    | IAddNewBlock
    | IUndo
    | IRedo;
//  | IEmptyAction;
export type {
    HeaderAction,
    ISetOpenedTemplate,
    IDeleteSelectedBlocks,
    IAddNewBlock,
    IUndo,
    IRedo,
    // IEmptyAction,
};
export { HeaderActionTypes };
