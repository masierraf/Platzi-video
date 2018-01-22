import React from 'react';
import '../../../css/player/video-player-controls.css'

const VideoControls = (props) => {
    return (
        <div className="VideoPlayerControls">
            {props.children}
        </div>
    );
};

export default VideoControls;