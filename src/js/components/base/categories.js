import React from "react";
import Category from "../../components/category";
import "../../../css/components/base/categories.css";
import SearchContainer from "../../widgets/search-container";

const Categories = props => {
    return (
        <div className="Categories">
            <SearchContainer />
            {props.categories.map(category => {
                return <Category key={category.id} category={category} handleOpenModal={props.handleOpenModal} />;
            })}
        </div>
    );
};

export default Categories;
