import * as React from "react";
import {makeObservable, observable, action} from "mobx";
import {observer} from "mobx-react";

export interface ITab {
    name: string;
    component: React.ComponentType;
}

export interface TabsProps {
    children: ITab[];
}

@observer
export class Tabs extends React.Component<TabsProps> {
    public activeItemIndex: number = 0;

    constructor(props: TabsProps) {
        super(props);
        makeObservable(this, {
            activeItemIndex: observable,
            handleItemClick: action
        });
    }

    public handleItemClick(index: number): void {
        this.activeItemIndex = index;
    }

    public override render(): React.ReactElement {
        const {children} = this.props;
        const activeItem = children[this.activeItemIndex];
        return <div className="tabs">
            <div className="list">
                {children.map((item, index) => {
                    const classList: string[] = ["item"];
                    if(index === this.activeItemIndex)
                        classList.push("active");
                    return <button 
                        key={index}
                        className={classList.join(" ")}
                        onClick={this.handleItemClick.bind(this, index)}
                    >
                        {item.name}
                    </button>;
                })}
            </div>
            <div className="content">
                {React.createElement(activeItem.component)}
            </div>
        </div>;
    }
}