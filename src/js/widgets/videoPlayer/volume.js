import React from "react";
import VolumeIcon from "../../components/icons/volume";
import "../../../css/player/volume.css";
const Volume = props => {
    return (
        <button className="Volume">
            <div onClick={props.handleMuteVolume}>
                <VolumeIcon size={25} color="white" />
            </div>

            <div className="Volume-range">
                <input
                    type="range"
                    value={props.volume}
                    min={0}
                    max={1}
                    step={0.05}
                    onChange={props.handleVolumeChange}
                />
            </div>
        </button>
    );
};

export default Volume;
