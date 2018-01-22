import React, { Component } from "react";
import Playlist from "./playlist";
import "../../css/components/category.css";

const Category = props => {
    const category = props.category;
    return (
        <div className="Category">
            <p className="Category-description">{category.description}</p>
            <h2 className="Category-title">{category.title}</h2>
            <Playlist playlist={category.playlist} />
        </div>
    );
};

export default Category;
