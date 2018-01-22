import React, { Component } from "react";
import Search from "../widgets/search";

class SearchContainer extends Component {
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.input.value, "submit");
    };

    setInputRef = element => {
        this.input = element;
    };

    render() {
        return (
            <Search
                handleSubmit={this.handleSubmit}
                setRef={this.setInputRef}
            />
        );
    }
}

export default SearchContainer;
