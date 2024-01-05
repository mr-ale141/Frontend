import React from "react";

type StylesArray = {
    "0": React.CSSProperties;
    "-0": React.CSSProperties;
    "180": React.CSSProperties;
    "-180": React.CSSProperties;
    "90": React.CSSProperties;
    "-270": React.CSSProperties;
    "270": React.CSSProperties;
    "-90": React.CSSProperties;
};

export type StylesArrayKeyType =
    | "0"
    | "-0"
    | "180"
    | "-180"
    | "90"
    | "-270"
    | "270"
    | "-90";

const stylesForRotate: StylesArray = {
    "0": { writingMode: "horizontal-tb" },
    "-0": { writingMode: "horizontal-tb" },
    "180": { writingMode: "horizontal-tb" },
    "-180": { writingMode: "horizontal-tb" },
    "90": {
        writingMode: "vertical-rl",
        transformOrigin: "center",
        transform: "rotate(-180deg)",
    },
    "-270": {
        writingMode: "vertical-rl",
        transformOrigin: "center",
        transform: "rotate(-180deg)",
    },
    "270": { writingMode: "vertical-rl" },
    "-90": { writingMode: "vertical-rl" },
};

export default stylesForRotate;
