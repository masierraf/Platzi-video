import React from 'react';
import '../../../css/player/video-player-layout.css'

const VideoLayout = (props) => {
    return (
        <div className="VideoPlayer" ref={props.setRef} >
            {props.children}
        </div>
    );
};

export default VideoLayout;