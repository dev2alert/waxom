import * as React from "react";

export interface SubtitleProps {
    children: string;
}

export function Subtitle({children}: SubtitleProps): React.ReactElement {
    return <h2 className="subtitle">
        {children}
    </h2>;
}