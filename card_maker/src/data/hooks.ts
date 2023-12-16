import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "./actionCreators";
import { RootState } from "./store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppDispatch = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actionCreators, dispatch);
};
