import React from "react";
import "../../css/widgets/search.css";

const Search = props => {
    return (
        <form className="Search" onSubmit={props.handleSubmit}>
            <input
                ref={props.setRef}
                type="text"
                className="Search-input"
                placeholder="Buscar tu video favorito"
            />
        </form>
    );
};

export default Search;
