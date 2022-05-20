import React, {Component} from "react";
import {createPortal} from "react-dom";

type PortalProps = {
    children: React.ReactNode
}

class Portal extends Component<PortalProps> {
    private el: HTMLDivElement = document.createElement("div");

    public componentDidMount(): void {
        document.body.append(this.el);
    }

    public componentWillUnmount(): void {
        document.body.removeChild(this.el);
    }

    public render(): React.ReactElement<PortalProps> {
        return createPortal(this.props.children, this.el);
    }
}

export default Portal;