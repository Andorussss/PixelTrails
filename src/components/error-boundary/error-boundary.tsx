import React, { Component, ReactNode } from "react";
import ErrorIndicator from "../errors";

interface IErrorBoundaryProps {
    children?: ReactNode;
}

interface IErrorBoundaryState {
    hasError: boolean;
}

export default class ErrorBoundary extends Component<IErrorBoundaryProps, IErrorBoundaryState> {
    state: IErrorBoundaryState = {
        hasError: false
    };

    componentDidCatch(error: Error, info: React.ErrorInfo): void {
        this.setState({
            hasError: true
        });
    }

    render(): ReactNode {
        if (this.state.hasError) {
            return <ErrorIndicator />;
        }

        return this.props.children;
    }
}
