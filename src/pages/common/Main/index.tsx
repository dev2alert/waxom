import * as React from "react";

export interface MainProps {
    children: React.ReactNode;
}

export default function Main({children}: MainProps): React.ReactElement {
    return <main>
        {children}
    </main>;
}