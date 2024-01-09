import { HeaderAction } from "./headerActionTypes";
import { ToolsAction } from "./toolsActionTypes";
import { WorkSpaceAction } from "./workSpaceActionTypes";

type Action = HeaderAction | ToolsAction | WorkSpaceAction;

export default Action;
