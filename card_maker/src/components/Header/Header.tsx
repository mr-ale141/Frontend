import css from "./Header.module.css";
import { useAppDispatch, useAppSelector } from "../../data/hooks";
import React from "react";
import { TypeBlock } from "../../type/type";
import { Button, Icon } from "@gravity-ui/uikit";
import {
    ArrowShapeTurnUpLeft,
    ArrowShapeTurnUpRight,
    FloppyDisk,
    FolderOpen,
    Moon,
    Picture,
    Shapes3,
    SquareChartBar,
    Sun,
    TrashBin,
} from "@gravity-ui/icons";
import { DARK, LIGHT } from "../../App";
import SaveIMGHandler from "./handlers/SaveIMGHandler";
import SavePDFHandler from "./handlers/SavePDFHandler";
import SaveJSHandler from "./handlers/SaveJSHandler";
import OpenJSHandler from "./handlers/OpenJSHandler";

type HeaderProps = {
    isDark: boolean;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
};

function Header({ isDark, setTheme }: HeaderProps) {
    const { deleteSelectedBlocks, addNewBlock, undo, redo, setOpenedTemplate } =
        useAppDispatch();
    const template = useAppSelector((state) => state.present.template);
    const canvasId = useAppSelector(
        (state) => state.present.template.canvas.id,
    );
    const { setSelectedBlock } = useAppDispatch();
    return (
        <div className={css.header}>
            <div className={css.logo}>
                <span>Card Maker</span>
            </div>
            <div className={css.line} />
            <Button
                size="l"
                view="outlined"
                onClick={() => undo()}
                title="Undo"
            >
                <Icon data={ArrowShapeTurnUpLeft} />
            </Button>
            <Button
                size="l"
                view="outlined"
                onClick={() => redo()}
                title="Redo"
            >
                <Icon data={ArrowShapeTurnUpRight} />
            </Button>
            <div className={css.line} />
            <Button
                size="l"
                view="outlined"
                onClick={() => OpenJSHandler(setOpenedTemplate)}
                title="Open JSON-file"
            >
                <Icon data={FolderOpen} />
                <div>JSON</div>
            </Button>
            <div className={css.line} />
            <Button
                size="l"
                view="outlined"
                onClick={() => {
                    setSelectedBlock("", false);
                    setTimeout(() => SaveIMGHandler(canvasId), 100);
                }}
                title="Save as IMAGE"
            >
                <Icon data={FloppyDisk} />
                <div>IMG</div>
            </Button>
            <Button
                size="l"
                view="outlined"
                onClick={() => {
                    setSelectedBlock("", false);
                    setTimeout(() => SavePDFHandler(canvasId), 100);
                }}
                title="Save as PDF"
            >
                <Icon data={FloppyDisk} />
                <div>PDF</div>
            </Button>
            <Button
                size="l"
                view="outlined"
                onClick={() => SaveJSHandler(template)}
                title="Save as JSON"
            >
                <Icon data={FloppyDisk} />
                <div>JSON</div>
            </Button>
            <div className={css.line} />
            <Button
                size="l"
                view="outlined"
                onClick={() => addNewBlock(TypeBlock.text)}
                title="Add new Text"
            >
                <Icon data={SquareChartBar} />
                <div>New Text</div>
            </Button>
            <Button
                size="l"
                view="outlined"
                onClick={() => addNewBlock(TypeBlock.image)}
                title="Add new Imabe"
            >
                <Icon data={Picture} />
                <div>New Image</div>
            </Button>
            <Button
                size="l"
                view="outlined"
                onClick={() => addNewBlock(TypeBlock.art)}
                title="Add new Art"
            >
                <Icon data={Shapes3} />
                <div>New Art</div>
            </Button>
            <div className={css.line} />
            <Button
                size="l"
                view="outlined"
                onClick={() => deleteSelectedBlocks()}
                title="Delete items"
            >
                <Icon data={TrashBin} />
            </Button>
            <div className={css.line} />
            <div style={{ flexGrow: "1" }} />
            <Button
                size="l"
                view="outlined"
                onClick={() => {
                    setTheme(isDark ? LIGHT : DARK);
                }}
                title="Change theme"
            >
                <Icon data={isDark ? Sun : Moon} />
            </Button>
        </div>
    );
}

export default Header;
