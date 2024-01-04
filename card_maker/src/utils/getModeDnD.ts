import { mode } from "../hooks/dataForMode";

export default function getModeDnD(target: HTMLElement) {
    let currentMode: mode = mode.drag;
    const targetClassName = target.className;
    if (target.tagName !== "DIV" || !targetClassName.includes("resize")) {
        currentMode = mode.drag;
    } else if (targetClassName.includes("top-left")) {
        currentMode = mode.topLeft;
    } else if (targetClassName.includes("top-center")) {
        currentMode = mode.topCenter;
    } else if (targetClassName.includes("top-right")) {
        currentMode = mode.topRight;
    } else if (targetClassName.includes("right-center")) {
        currentMode = mode.rightCenter;
    } else if (targetClassName.includes("bottom-right")) {
        currentMode = mode.bottomRight;
    } else if (targetClassName.includes("bottom-center")) {
        currentMode = mode.bottomCenter;
    } else if (targetClassName.includes("bottom-left")) {
        currentMode = mode.bottomLeft;
    } else if (targetClassName.includes("left-center")) {
        currentMode = mode.leftCenter;
    }
    return currentMode;
}
