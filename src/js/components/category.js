import React, { Component } from "react";
import Playlist from "./playlist";
import './category.css'

class Category extends Component {
    render() {
        const category = this.props.category;
        console.log(category.playlist);
        return (
            <div className="Category">
                <p className="Category-description">{category.description}</p>
                <h2 className="Category-title">{category.title}</h2>
                <Playlist playlist={category.playlist} />
            </div>
        );
    }
}

export default Category;
