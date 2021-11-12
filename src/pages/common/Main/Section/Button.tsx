import * as React from "react";

export interface ButtonProps {
    children: string;
}

export default function Button({children}: ButtonProps): React.ReactElement {
    return <button className="button">
        {children}
    </button>;
}