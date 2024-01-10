import { Mode } from "../hooks/dataForModeResize";

export default function getModeDnD(target: HTMLElement) {
    let currentMode: Mode = Mode.drag;
    const targetClassName = target.className;
    if (target.tagName !== "DIV" || !targetClassName.includes("resize")) {
        currentMode = Mode.drag;
    } else if (targetClassName.includes("top-left")) {
        currentMode = Mode.topLeft;
    } else if (targetClassName.includes("top-center")) {
        currentMode = Mode.topCenter;
    } else if (targetClassName.includes("top-right")) {
        currentMode = Mode.topRight;
    } else if (targetClassName.includes("right-center")) {
        currentMode = Mode.rightCenter;
    } else if (targetClassName.includes("bottom-right")) {
        currentMode = Mode.bottomRight;
    } else if (targetClassName.includes("bottom-center")) {
        currentMode = Mode.bottomCenter;
    } else if (targetClassName.includes("bottom-left")) {
        currentMode = Mode.bottomLeft;
    } else if (targetClassName.includes("left-center")) {
        currentMode = Mode.leftCenter;
    }
    return currentMode;
}
