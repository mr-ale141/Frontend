import React from "react";
import commonCss from "../../../common/Common.module.css";

function BorderSelected() {
    return (
        <>
            <div className={commonCss["top-left"] + " " + commonCss.resize} />
            <div className={commonCss["top-center"] + " " + commonCss.resize} />
            <div className={commonCss["top-right"] + " " + commonCss.resize} />
            <div
                className={commonCss["right-center"] + " " + commonCss.resize}
            />
            <div
                className={commonCss["bottom-right"] + " " + commonCss.resize}
            />
            <div
                className={commonCss["bottom-center"] + " " + commonCss.resize}
            />
            <div
                className={commonCss["bottom-left"] + " " + commonCss.resize}
            />
            <div
                className={commonCss["left-center"] + " " + commonCss.resize}
            />
        </>
    );
}

export default BorderSelected;
