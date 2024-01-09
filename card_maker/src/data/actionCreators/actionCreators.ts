import headerActionCreators from "./headerActionCreators";
import toolsActionCreators from "./toolsActionCreators";
import workSpaceActionCreators from "./workSpaceActionCreators";

const actionCreators = {
    ...headerActionCreators,
    ...toolsActionCreators,
    ...workSpaceActionCreators,
};

export default actionCreators;
