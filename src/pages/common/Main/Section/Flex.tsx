import * as React from "react";

export interface FlexProps {
    justifyContent?: React.CSSProperties["justifyContent"];
    children: React.ReactNode;
}

export function Flex({justifyContent, children}: FlexProps): React.ReactElement {
    const style: React.CSSProperties = {};
    if(justifyContent)
        style.justifyContent = justifyContent;
    return <div className="flex" style={style}>
        {children}
    </div>;
}