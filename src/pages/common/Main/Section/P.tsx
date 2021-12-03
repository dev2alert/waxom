import * as React from "react";

export interface ParagraphProps {
    type?: number;
    center?: boolean;
    width?: number;
    size?: number;
    color?: string;
    line?: number;
    children: string;
}

export function Paragraph({type = 1, center = false, width, size, color, line, children}: ParagraphProps): React.ReactElement {
    const classList: string[] = ["paragraph", "type-" + type];
    const style: any = {};
    if(center) {
        style["textAlign"] = "center";
        style["margin"] = "0px auto";
    }
    if(width)
        style["--width"] = width + "px";
    if(size)
        style["--size"] = size + "px";
    if(color)
        style["--color"] = color;
    if(line)
        style["--line"] = line + "px";
    return <p className={classList.join(" ")} style={style}>
        {children}
    </p>;
}