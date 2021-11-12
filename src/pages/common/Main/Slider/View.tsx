import * as React from "react";

export interface ViewProps {
    center?: boolean;
    children: React.ReactNode;
}

export default function View({center = false, children}: ViewProps): React.ReactElement {
    const classList: string[] = ["view"];
    if(center)
        classList.push("center");
    return <div className={classList.join(" ")}>
        <div className="container">
            {children}
        </div>
    </div>;
}