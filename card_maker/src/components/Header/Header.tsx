import css from "./Header.module.css";
import { ActionCreators } from "redux-undo";
import { useDispatch } from "react-redux";

function Header() {
    const dispatch = useDispatch();
    return (
        <div className={css.header}>
            <div className={css.logo}>
                <span>Card Maker</span>
            </div>
            <button onClick={() => dispatch(ActionCreators.undo())}>
                Undo
            </button>
            <button onClick={() => dispatch(ActionCreators.redo())}>
                Redo
            </button>
        </div>
    );
}
export default Header;
