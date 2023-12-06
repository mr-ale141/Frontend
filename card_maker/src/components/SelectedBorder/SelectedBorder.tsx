import React from "react";
import css from "./SelectedBorder.module.css";

function SelectedBorder() {
    return (
        <div className={css.border}>
            <div className={css["top-left"]} />
            <div className={css["top-center"]} />
            <div className={css["top-right"]} />
            <div className={css["right-center"]} />
            <div className={css["bottom-right"]} />
            <div className={css["bottom-center"]} />
            <div className={css["bottom-left"]} />
            <div className={css["left-center"]} />
        </div>
    );
}
export default SelectedBorder;
