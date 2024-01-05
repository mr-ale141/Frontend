import React from "react";
import css from "./BorderSelected.module.css";

function BorderSelected() {
    return (
        <>
            <div className={css["top-left"] + " " + css.resize} />
            <div className={css["top-center"] + " " + css.resize} />
            <div className={css["top-right"] + " " + css.resize} />
            <div className={css["right-center"] + " " + css.resize} />
            <div className={css["bottom-right"] + " " + css.resize} />
            <div className={css["bottom-center"] + " " + css.resize} />
            <div className={css["bottom-left"] + " " + css.resize} />
            <div className={css["left-center"] + " " + css.resize} />
        </>
    );
}

export default BorderSelected;
