import React from "react";

type PanelProps = {
    children: React.ReactNode;
    bgColor: string;
}

const Panel = ({children, bgColor}: PanelProps) => {

    return (
        <div className="panel" style={{backgroundColor: bgColor}}>
            {children}
        </div>
    );
}


export default Panel;