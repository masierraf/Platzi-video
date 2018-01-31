import React from 'react';
import FullscreenIcon from '../../components/icons/fullscreen';
import '../../../css/player/full-screen.css'
const Fullscreen = (props) => {
    return (
        <div className="FullScreen" onClick={props.handleFullscreen}>
            <FullscreenIcon size={25} color="white" />
        </div>
    );
};

export default Fullscreen;