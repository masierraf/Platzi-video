import React, { Component } from "react";
import "../../../css/player/video.css";

class Video extends Component {
    setRef = element => {
        this.video = element;
    };

    togglePlay() {
        if (this.props.pause) this.video.play();
        else this.video.pause();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.pause != this.props.pause) {
            this.togglePlay();
        }
    }

    render() {
        const {
            handleLoadedMetaData,
            handleTipoUpdate,
            handleSeeking,
            handleSeeked
        } = this.props;
        return (
            <div className="Video">
                <video
                    ref={this.setRef}
                    autoPlay={this.props.autoplay}
                    src={this.props.src}
                    onLoadedMetadata={handleLoadedMetaData}
                    onTimeUpdate={handleTipoUpdate}
                    onSeeking={handleSeeking}
                    onSeeked={handleSeeked}
                    volume={this.props.volume}
                />
            </div>
        );
    }
}

export default Video;
