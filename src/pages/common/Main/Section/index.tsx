import * as React from "react";
import styles from "./style.scss";

export * from "./Subtitle";
export * from "./Title";
export * from "./P";
export * from "./Button";

export interface SectionProps {
    container?: boolean;
    containerWidth?: number;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}

export default function Section({container = false, containerWidth, className, style: substyle, children}: SectionProps): React.ReactElement {
    const classList: string[] = [styles.main];
    if(className)
        classList.push(className);
    const style: any = {...substyle};
    if(containerWidth)
        style["--width"] = `${containerWidth}px`;
    return <section className={classList.join(" ")} style={style}>
        {!container ? children : <div className="container">{children}</div>}
    </section>;
}