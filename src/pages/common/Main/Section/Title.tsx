import * as React from "react";

export interface TitleSelectProps {
    children: React.ReactNode;
}

export function TitleSelect({children}: TitleSelectProps): React.ReactElement {
    return <span className="select">
        {children}
    </span>;
}

export interface TitleProps {
    type?: number;
    center?: boolean;
    size?: number;
    children: React.ReactNode;
}

export function Title({type = 1, center = false, size, children}: TitleProps): React.ReactElement {
    const classList: string[] = ["title", "type-" + type];
    const style: any = {};
    if(center)
        style["textAlign"] = "center";
    if(size)
        style["--size"] = size + "px";
    return <h1 className={classList.join(" ")} style={style}>
        {children}
    </h1>;
}