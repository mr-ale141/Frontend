import React from "react";
import css from "./ChangeArt.module.css";
import { ArtName } from "../../../../type/type";
import { useAppDispatch } from "../../../../data/hooks";
import { changeArt } from "../../../../data/sessionReducer";

function ChangeArt() {
    const dispatch = useAppDispatch();
    function changeArtHandler(event: React.ChangeEvent<HTMLSelectElement>) {
        const strNum = event.target.value;
        const num = parseInt(strNum, 10);
        dispatch(changeArt(num));
    }
    return (
        <div className={css["art-tool"]}>
            <label htmlFor="new-art">Change art</label>
            <select id="new-art" onChange={(event) => changeArtHandler(event)}>
                <option value={ArtName.arrow}>Arrow</option>
                <option value={ArtName.circle}>Circle</option>
                <option value={ArtName.like}>Like</option>
                <option value={ArtName.line}>Line</option>
                <option value={ArtName.quote}>Quote</option>
                <option value={ArtName.rect}>Rectangle</option>
                <option value={ArtName.square}>Square</option>
            </select>
        </div>
    );
}
export default ChangeArt;
