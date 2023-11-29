import React from "react";
import commonCss from "../../../../common/Common.module.css";
import { useAppDispatch } from "../../../../data/hooks";
import { changeImage } from "../../../../data/sessionReducer";
function ChangeImage() {
    const dispatch = useAppDispatch();
    function changeImageLinkHandler(
        event: React.KeyboardEvent<HTMLInputElement>,
    ) {
        if (event.key === "Enter") {
            dispatch(changeImage(event.currentTarget.value));
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
            if (base64) dispatch(changeImage(base64));
        };
        if (file) reader.readAsDataURL(file);
    }
    return (
        <div className={commonCss.tool}>
            <label htmlFor="image-link">Change image</label>
            <input
                id="image-link"
                type="text"
                placeholder="Insert URL-address"
                onKeyDown={(event) => changeImageLinkHandler(event)}
            />
            <label htmlFor="image-upload">Upload file</label>
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
