import React from "react";
import css from "../../ToolsPanel.module.css";
import { useAppDispatch } from "../../../../data/hooks";
import { Button, Icon, TextInput } from "@gravity-ui/uikit";
import { FolderMagnifier } from "@gravity-ui/icons";
import getBase64Image from "../../../../utils/getBase64Image";
function ChangeImage() {
    const { changeImage } = useAppDispatch();
    async function changeImageLinkHandler(
        event: React.KeyboardEvent<HTMLInputElement>,
    ) {
        const newSrc = event.currentTarget.value;
        event.currentTarget.value = "";
        if (event.key === "Enter" && newSrc) {
            const image = await getBase64Image(newSrc);
            if (image) changeImage(image);
        }
    }
    async function changeImageFileHandler(
        event: React.ChangeEvent<HTMLInputElement>,
    ) {
        const file = event.target.files ? event.target.files[0] : null;
        if (file) {
            const image = await getBase64Image(file);
            if (image) changeImage(image);
        }
    }
    return (
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
                onClick={() => document.getElementById("image-upload")?.click()}
            >
                <Icon data={FolderMagnifier} />
            </Button>
            <input
                id="image-upload"
                type="file"
                accept="image/png, image/jpeg"
                onChange={(event) => changeImageFileHandler(event)}
            />
        </div>
    );
}

export default ChangeImage;
