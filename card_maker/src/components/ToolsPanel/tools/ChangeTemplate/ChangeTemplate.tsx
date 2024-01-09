import React, { useState } from "react";
import toolsCss from "../../ToolsPanel.module.css";
import css from "./ChangeTemplate.module.css";
import { templateSource } from "../../../../data/max_data";
import { useAppDispatch } from "../../../../data/hooks";
import { Button, Icon } from "@gravity-ui/uikit";
import { SquareLetterT } from "@gravity-ui/icons";

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
        <>
            <div className={toolsCss.tool}>
                <Button
                    view="outlined"
                    onClick={() => onClickHandler()}
                    title="Change template"
                >
                    <Icon data={SquareLetterT} />
                    <span>Template</span>
                </Button>
            </div>
            {activeModal && (
                <div className={css.modal} onClick={onChangeTemplate}>
                    <div className={css.wrapper}>
                        <span>Select template</span>
                        <p id="alert" className={css.alert}>
                            The current canvas will be deleted!
                        </p>
                        {templateSource.map((template) => {
                            return (
                                <img
                                    onMouseOver={(e) => {
                                        const target = e.target as HTMLElement;
                                        target.classList.add(css.focus);
                                        const alert =
                                            document.getElementById("alert");
                                        alert?.classList.add(css.red);
                                    }}
                                    onMouseLeave={(e) => {
                                        const target = e.target as HTMLElement;
                                        target.classList.remove(css.focus);
                                        const alert =
                                            document.getElementById("alert");
                                        alert?.classList.remove(css.red);
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
        </>
    );
}

export default ChangeTemplate;
