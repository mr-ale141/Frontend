import React from "react";
import css from "../../ToolsPanel.module.css";
import { useAppDispatch } from "../../../../data/hooks";
import { Button, Icon, TextInput } from "@gravity-ui/uikit";
import { FolderMagnifier } from "@gravity-ui/icons";
function ChangeImage() {
    const { changeImage } = useAppDispatch();
    function changeImageLinkHandler(
        event: React.KeyboardEvent<HTMLInputElement>,
    ) {
        if (event.key === "Enter") {
            changeImage(event.currentTarget.value);
            event.currentTarget.value = "";
        }
    }
    function changeImageFileHandler(
        event: React.ChangeEvent<HTMLInputElement>,
    ) {
        const file = event.target.files ? event.target.files[0] : null;
        const reader = new FileReader();
        let base64: string | null;
        reader.onloadend = function () {
            base64 = typeof reader.result === "string" ? reader.result : null;
            if (base64) changeImage(base64);
        };
        if (file) reader.readAsDataURL(file);
    }
    return (
        <>
            <div className={css.tool}>
                <TextInput
                    className={css.text}
                    label="URL:"
                    placeholder="Insert URL and press enter"
                    onKeyDown={(event) => changeImageLinkHandler(event)}
                />
                <Button
                    view="outlined"
                    title="Color"
                    onClick={() =>
                        document.getElementById("image-upload")?.click()
                    }
                >
                    <span>Upload Image</span>
                    <Icon data={FolderMagnifier} />
                </Button>
                <input
                    id="image-upload"
                    type="file"
                    accept="image/png, image/jpeg"
                    onChange={(event) => changeImageFileHandler(event)}
                />
            </div>
            <div className={css.line} />
        </>
    );
}

export default ChangeImage;
