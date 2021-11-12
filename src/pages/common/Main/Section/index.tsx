import * as React from "react";
import styles from "./style.scss";

export {SubtitleProps, default as Subtitle} from "./Subtitle";
export {TitleProps, default as Title} from "./Title";
export {ParagraphProps, default as Paragraph} from "./P";
export {ButtonProps, default as Button} from "./Button";

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