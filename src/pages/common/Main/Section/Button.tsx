import * as React from "react";
import {makeObservable, observable, action} from "mobx";
import {observer} from "mobx-react";

export interface ButtonProps {
    children: string;
}

@observer
export class Button extends React.Component<ButtonProps> {
    public pressed: boolean = false;

    constructor(props: ButtonProps) {
        super(props);
        makeObservable(this, {
            pressed: observable,
            handleDown: action,
            handleUp: action
        });
    }

    public handleDown(): void {
        this.pressed = true;
    }

    public handleUp(): void {
        this.pressed = false;
    }

    public override render(): React.ReactElement {
        const classList: string[] = ["button"];
        if(this.pressed)
            classList.push("press");
        return <button 
            className={classList.join(" ")}
            onMouseDown={this.handleDown.bind(this)}
            onMouseUp={this.handleUp.bind(this)}
            onTouchStart={this.handleDown.bind(this)}
            onTouchEnd={this.handleUp.bind(this)}
        >
            {this.props.children}
        </button>;
    }
}