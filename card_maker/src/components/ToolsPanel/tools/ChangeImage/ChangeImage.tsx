import React from "react";
import commonCss from "../../../../common/Common.module.css";
import { useAppDispatch } from "../../../../data/hooks";
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
        <div className={commonCss.tool}>
            <div>
                <input
                    id="image-link"
                    type="text"
                    placeholder="Insert URL and press enter"
                    onKeyDown={(event) => changeImageLinkHandler(event)}
                />
                <label htmlFor="image-upload">Upload local file</label>
                <input
                    id="image-upload"
                    type="file"
                    accept="image/png, image/jpeg"
                    onChange={(event) => changeImageFileHandler(event)}
                />
            </div>
        </div>
    );
}
export default ChangeImage;
