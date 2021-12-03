import * as React from "react";

export interface ItemProps {
    children: React.ReactNode;
}

export function Item({children}: ItemProps): React.ReactElement {
    return <li className="item">
        {children}
    </li>;
}

export interface ListProps {
    children: React.ReactNode;
}

export function List({children}: ListProps): React.ReactElement {
    return <ul className="list">
        {children}
    </ul>;
}