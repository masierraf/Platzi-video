import React, { Component } from "react";
import RegularError from '../errors/regular-error'

class Error extends Component {
    state = {
        handleError: false,
        error: null,
        info: '',
    };

    componentDidCatch(error, info) {
        this.setState({
            handleError: true,
            error: error,
            info: info,
        });
    }

    render() {
        if (this.state.handleError) {
            
            return <RegularError message={this.state.error.message} />;
        }
        return this.props.children;
    }
}

export default Error;
