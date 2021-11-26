import * as React from "react";
import Item, {IProject} from "./Item";

export interface ListProps {
    children: IProject[];
}

export default function List({children}: ListProps): React.ReactElement {
    return <div className="projects">
        <div className="list">
            {children.map((item, index) => {
                return <Item key={index} {...item} />;
            })}
        </div>
    </div>;
}