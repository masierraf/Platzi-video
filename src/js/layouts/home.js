import React, { Component } from "react";
import PropTypes from "prop-types";
import Category from "../components/category";
import data from "../../data/api.json";
import Play from '../components/icons/play'
import Volume from '../components/icons/volume'
import Pause from '../components/icons/pause'
import Fullscreen from '../components/icons/fullscreen'

class Home extends Component {
    // componentWillMount() {}

    // componentDidMount() {}

    // componentWillReceiveProps(nextProps) {}

    // shouldComponentUpdate(nextProps, nextState) {}

    // componentWillUpdate(nextProps, nextState) {}

    // componentDidUpdate(prevProps, prevState) {}

    // componentWillUnmount() {}

    render() {
        return (
            <div>
            
            {
                data.categories.map((category => {
                    return <Category key={category.id} category={category} />
                }))
                
            }
            </div>
            
        );
    }
}

Home.propTypes = {};

export default Home;
