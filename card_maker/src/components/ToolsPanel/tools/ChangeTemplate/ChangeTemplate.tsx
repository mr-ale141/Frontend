import React, { useState } from "react";
import commonCss from "../../../../common/Common.module.css";
import css from "./ChangeTemplate.module.css";
import { templateSource } from "../../../../data/max_data";
import { useAppDispatch } from "../../../../data/hooks";

function ChangeTemplate() {
    const { setTemplate } = useAppDispatch();
    const [activeModal, setActiveModal] = useState(false);
    function onClickHandler() {
        setActiveModal(true);
    }
    function onChangeTemplate(event: React.MouseEvent) {
        const newTemplateID = (event.target as HTMLElement).id;
        if (newTemplateID) setTemplate(newTemplateID);
        setActiveModal(false);
    }
    return (
        <div className={commonCss.tool}>
            <button onClick={onClickHandler}>Change template</button>
            {activeModal && (
                <div className={css.modal} onClick={onChangeTemplate}>
                    <div className={css.wrapper}>
                        <span>Select template</span>
                        {templateSource.map((template) => {
                            return (
                                <img
                                    onMouseOver={(e) => {
                                        const target = e.target as HTMLElement;
                                        target.classList.add(css.focus);
                                    }}
                                    onMouseLeave={(e) => {
                                        const target = e.target as HTMLElement;
                                        target.classList.remove(css.focus);
                                    }}
                                    src={template.preview}
                                    alt="preview"
                                    key={template.id}
                                    id={template.id}
                                />
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}

export default ChangeTemplate;
