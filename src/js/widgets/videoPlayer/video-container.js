import React, { Component } from "react";
import VideoLayout from "./video-layout";
import Video from "./video";
import Title from "./title";
import PlayPause from "./play-pause";
import Timer from "./timer";
import Controls from "./video-controls";
import ProgressBar from "./progress-bar";
import Spinner from "./spinner";
import Volume from "../videoPlayer/volume";
import Fullscreen from "..//videoPlayer/fullScreen";
class VideoPlayer extends Component {
    state = {
        pause: true,
        duration: "00:00",
        currentTime: "00:00",
        durationRange: 0,
        currentTimeRange: 0,
        loading: false,
        volume: 1,
        volumeInit: 1
    };
    togglePlay = event => {
        this.setState({
            pause: !this.state.pause
        });
    };

    componentDidMount() {
        this.setState({
            pause: !this.props.autoplay
        });
    }
    handleLoadedMetaData = event => {
        this.video = event.target;
        this.setState({
            duration: this.formatterTime(this.video.duration),
            durationRange: this.video.duration
        });
    };
    handleTipoUpdate = event => {
        this.setState({
            currentTime: this.formatterTime(this.video.currentTime),
            currentTimeRange: this.video.currentTime
        });
    };

    handleProgressChange = event => {
        this.video.currentTime = event.target.value;
    };

    handleSeeking = event => {
        this.setState({
            loading: true
        });
    };

    handleSeeked = event => {
        this.setState({
            loading: false
        });
    };

    leftPad(num) {
        const pad = "00";
        return pad.substring(0, pad.length - num.length) + num;
    }

    formatterTime(secs) {
        const min = parseInt(secs / 60, 10);
        const sec = parseInt(secs % 60, 10);
        return `${this.leftPad(min.toString())}:${this.leftPad(
            sec.toString()
        )}`;
    }

    handleVolumeChange = event => {
        this.video.volume = event.target.value;
        this.setState({
            volume: this.video.volume
        });
    };
    handleMuteVolume = () => {
        console.log("entro");
        if (this.video.volume > 0) {
            this.setState({
                volume: 0,
                volumeInit: this.video.volume
            });
            this.video.volume = 0;
        } else {
            this.video.volume = this.state.volumeInit;
            this.setState({
                volume: this.video.volume
            });
        }
    };
    handleFullscreen = event => {
        const elem = this.player;
        if (
            !document.fullscreenElement &&
            !document.mozFullScreenElement &&
            !document.webkitFullscreenElement &&
            !document.msFullscreenElement
        ) {
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.msRequestFullscreen) {
                elem.msRequestFullscreen();
            } else if (elem.mozRequestFullScreen) {
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) {
                elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        }
    };

    setRef = element => {
        this.player = element;
    };

    render() {
        console.log(this.state.currentTime, this.state.diration);
        return (
            <VideoLayout setRef={this.setRef}>
                <Title title={this.props.title} />
                <Controls>
                    <PlayPause
                        handleClick={this.togglePlay}
                        pause={this.state.pause}
                    />
                    <Timer
                        duration={this.state.duration}
                        currentTime={this.state.currentTime}
                    />
                    <ProgressBar
                        max={this.state.durationRange}
                        value={this.state.currentTimeRange}
                        handleProgressChange={this.handleProgressChange}
                    />
                    <Volume
                        handleVolumeChange={this.handleVolumeChange}
                        volume={this.state.volume}
                        handleMuteVolume={this.handleMuteVolume}
                    />
                    <Fullscreen handleFullscreen={this.handleFullscreen} />
                </Controls>
                <Spinner active={this.state.loading} />
                <Video
                    src={this.props.src}
                    autoplay={this.props.autoplay}
                    pause={this.state.pause}
                    volume={this.state.volume}
                    handleLoadedMetaData={this.handleLoadedMetaData}
                    handleTipoUpdate={this.handleTipoUpdate}
                    handleSeeking={this.handleSeeking}
                    handleSeeked={this.handleSeeked}
                />
            </VideoLayout>
        );
    }
}

export default VideoPlayer;
