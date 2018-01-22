import React from "react";
import Play from "../../components/icons/play";
import Pause from "../../components/icons/pause";
import "../../../css/player/play-pause.css";

const PlayPause = props => {
    return (
        <div className="PlayPause">
            {props.pause ? (
                <button onClick={props.handleClick}>
                    <Play size={25} color="white" />
                </button>
            ) : (
                <button onClick={props.handleClick}>
                    <Pause size={25} color="white" />
                </button>
            )}
        </div>
    );
};

export default PlayPause;
