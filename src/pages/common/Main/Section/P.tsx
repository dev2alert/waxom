import * as React from "react";

export interface ParagraphProps {
    children: string;
}

export default function Paragraph({children}: ParagraphProps): React.ReactElement {
    return <p className="paragraph">
        {children}
    </p>;
}