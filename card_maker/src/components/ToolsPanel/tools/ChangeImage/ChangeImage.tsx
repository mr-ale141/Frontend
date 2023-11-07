import React from "react";
import css from "./ChangeImage.module.css";
function ChangeImage() {
    function changeImage(event: React.ChangeEvent<HTMLInputElement>) {
        console.log(event.target.value);
    }
    return (
        <div className={css["image-tool"]}>
            <label htmlFor="image-link">Set link</label>
            <input
                id="image-link"
                type="text"
                placeholder="Insert URL-address"
                onChange={(event) => changeImage(event)}
            />
            <label htmlFor="image-upload">Upload file (PNG, JPG)</label>
            <input
                id="image-upload"
                type="file"
                accept="image/png, image/jpeg"
                onChange={(event) => changeImage(event)}
            />
        </div>
    );
}
export default ChangeImage;
