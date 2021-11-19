import * as React from "react";

export interface ParagraphProps {
    type?: number;
    center?: boolean;
    width?: number;
    size?: number;
    children: string;
}

export function Paragraph({type = 1, center = false, width, size, children}: ParagraphProps): React.ReactElement {
    const classList: string[] = ["paragraph", "type-" + type];
    const style: any = {};
    if(center) {
        style["textAlign"] = "center";
        style["margin"] = "auto";
    }
    if(width)
        style["--width"] = width + "px";
    if(size)
        style["--size"] = size + "px";
    return <p className={classList.join(" ")} style={style}>
        {children}
    </p>;
}