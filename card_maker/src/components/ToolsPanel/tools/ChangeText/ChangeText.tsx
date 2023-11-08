import React from "react";
import css from "./ChangeText.module.css";
import { useAppDispatch } from "../../../../data/hooks";
import { changeText } from "../../../../data/sessionReducer";
function ChangeText() {
    const dispatch = useAppDispatch();
    return (
        <div className={css["text-tool"]}>
            <label htmlFor="new-text">Change text</label>
            <input
                id="new-text"
                type="text"
                placeholder="Insert new text here"
                onChange={(event) => dispatch(changeText(event.target.value))}
            />
        </div>
    );
}
export default ChangeText;
