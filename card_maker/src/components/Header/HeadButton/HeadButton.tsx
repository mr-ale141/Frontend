import React from "react";

type headButtonProps = {
    handler: () => void;
    icon: string;
    alt: string;
};

const HeadButton = ({ handler, icon, alt }: headButtonProps) => {
    return (
        <button onClick={handler}>
            <img src={icon} alt={alt} />
        </button>
    );
};

export default HeadButton;
