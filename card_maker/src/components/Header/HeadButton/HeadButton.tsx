import React from "react";

type HeadButtonProps = {
    handler: () => void;
    icon: string;
    alt: string;
};

const HeadButton = ({ handler, icon, alt }: HeadButtonProps) => {
    return (
        <button onClick={handler}>
            <img src={icon} alt={alt} />
        </button>
    );
};

export default HeadButton;
