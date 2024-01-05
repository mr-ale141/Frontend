import React from "react";
import css from "../../ToolsPanel.module.css";
import { useAppDispatch } from "../../../../data/hooks";
import { Button, Icon } from "@gravity-ui/uikit";
import {
    ArrowRightArrowLeft,
    ArrowRotateLeft,
    ArrowRotateRight,
    ArrowUpArrowDown,
} from "@gravity-ui/icons";
import { Rotate, Scale } from "../../../../type/type";
type ChangeRotateScaleProps = {
    currentRotate: Rotate;
    currentScale: Scale;
};
function ChangeRotateScale({
    currentRotate,
    currentScale,
}: ChangeRotateScaleProps) {
    const { setScale, setRotate } = useAppDispatch();
    return (
        <>
            <div className={css.tool}>
                <Button
                    view="outlined"
                    onClick={() => setRotate((currentRotate - 90) % 360)}
                    title="Rotate Left"
                >
                    <Icon data={ArrowRotateLeft} />
                </Button>
                <Button
                    view="outlined"
                    onClick={() => setRotate((currentRotate + 90) % 360)}
                    title="Rotate Right"
                >
                    <Icon data={ArrowRotateRight} />
                </Button>
            </div>
            <div className={css.tool}>
                <Button
                    view="outlined"
                    onClick={() =>
                        setScale({ ...currentScale, x: currentScale.x * -1 })
                    }
                    title="Mirroring Horizontal"
                >
                    <Icon data={ArrowRightArrowLeft} />
                </Button>
                <Button
                    view="outlined"
                    onClick={() =>
                        setScale({ ...currentScale, y: currentScale.y * -1 })
                    }
                    title="Mirroring Vertical"
                >
                    <Icon data={ArrowUpArrowDown} />
                </Button>
            </div>
        </>
    );
}

export default ChangeRotateScale;
