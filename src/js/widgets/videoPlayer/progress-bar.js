import React from "react";
import "../../../css/player/progress-bar.css";

const ProgressBar = props => {
    return (
        <div className="ProgressBar">
            <input 
            type="range" 
            max={props.max} 
            value={props.value}
            onChange={props.handleProgressChange} />
        </div>
    );
};

export default ProgressBar;
