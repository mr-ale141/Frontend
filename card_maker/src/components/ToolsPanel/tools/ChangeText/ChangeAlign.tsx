import React from "react";
import css from "../../ToolsPanel.module.css";
import { useAppDispatch } from "../../../../data/hooks";
import { Button, Icon } from "@gravity-ui/uikit";
import {
    ArrowShapeDownToLine,
    ArrowShapeUpToLine,
    Minus,
    TextAlignCenter,
    TextAlignLeft,
    TextAlignRight,
} from "@gravity-ui/icons";
function ChangeAlign() {
    const { setTextAlignItems, setTextJustifyContent } = useAppDispatch();
    return (
        <>
            <div className={css.tool}>
                <Button
                    view="outlined"
                    onClick={() => setTextJustifyContent("start")}
                    title="Left"
                >
                    <Icon data={TextAlignLeft} />
                </Button>
                <Button
                    view="outlined"
                    onClick={() => setTextJustifyContent("center")}
                    title="Center"
                >
                    <Icon data={TextAlignCenter} />
                </Button>
                <Button
                    view="outlined"
                    onClick={() => setTextJustifyContent("end")}
                    title="Right"
                >
                    <Icon data={TextAlignRight} />
                </Button>
            </div>
            <div className={css.tool}>
                <Button
                    view="outlined"
                    onClick={() => setTextAlignItems("start")}
                    title="Left"
                >
                    <Icon data={ArrowShapeUpToLine} />
                </Button>
                <Button
                    view="outlined"
                    onClick={() => setTextAlignItems("center")}
                    title="Center"
                >
                    <Icon data={Minus} />
                </Button>
                <Button
                    view="outlined"
                    onClick={() => setTextAlignItems("end")}
                    title="Right"
                >
                    <Icon data={ArrowShapeDownToLine} />
                </Button>
            </div>
        </>
    );
}

export default ChangeAlign;
