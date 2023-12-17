import React from "react";
import commonCss from "../../../../common/Common.module.css";
import { useAppDispatch } from "../../../../data/hooks";

type ChangeSizeProps = {
    currentSize: number;
};
function ChangeSize({ currentSize }: ChangeSizeProps) {
    const { changeSizeText } = useAppDispatch();
    function changeSizeHandler(event: React.ChangeEvent<HTMLSelectElement>) {
        const strNum = event.target.value;
        const num = parseInt(strNum, 10);
        changeSizeText(num);
    }
    return (
        <div className={commonCss.tool}>
            <label htmlFor="new-art">Change size text</label>
            <select
                id="new-art"
                defaultValue={currentSize}
                onChange={(event) => changeSizeHandler(event)}
            >
                <option value="10">10</option>
                <option value="12">12</option>
                <option value="14">14</option>
                <option value="16">16</option>
                <option value="18">18</option>
                <option value="20">20</option>
                <option value="22">22</option>
            </select>
        </div>
    );
}
export default ChangeSize;
