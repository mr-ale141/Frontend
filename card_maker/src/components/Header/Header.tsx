import css from "./Header.module.css";
import { ActionCreators } from "redux-undo";
import { useDispatch } from "react-redux";
import HeadButton from "./HeadButton/HeadButton";
import undoIcon from "./icons/undo.png";
import redoIcon from "./icons/redo.png";

function Header() {
    const dispatch = useDispatch();
    return (
        <div className={css.header}>
            <div className={css.logo}>
                <span>Card Maker</span>
            </div>
            <HeadButton
                handler={() => dispatch(ActionCreators.undo())}
                icon={undoIcon}
                alt="undo"
            />
            <HeadButton
                handler={() => dispatch(ActionCreators.redo())}
                icon={redoIcon}
                alt="redo"
            />
        </div>
    );
}
export default Header;
