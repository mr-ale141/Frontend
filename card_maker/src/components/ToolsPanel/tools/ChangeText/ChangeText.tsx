import React from "react";
import css from "./ChangeText.module.css";
function ChangeText() {
    function changeText(event: React.ChangeEvent<HTMLInputElement>) {
        console.log(event.target.value);
    }
    return (
        <div className={css["text-tool"]}>
            <label htmlFor="new-text">Change text</label>
            <input
                id="new-text"
                type="text"
                placeholder="Insert new text here"
                onChange={(event) => changeText(event)}
            />
        </div>
    );
}
export default ChangeText;
