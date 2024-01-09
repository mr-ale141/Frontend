import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { RootState } from "./store";
import actionCreators from "./actionCreators/actionCreators";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppDispatch = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actionCreators, dispatch);
};
