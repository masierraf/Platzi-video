import React from 'react';
import '../../../css/player/video-player-layout.css'

const VideoLayout = (props) => {
    return (
        <div className="VideoPlayer" >
            {props.children}
        </div>
    );
};

export default VideoLayout;