import React, { Component } from "react";
import VideoLayout from "./video-layout";
import Video from "./video";
import Title from "./title";
import PlayPause from "./play-pause";
import Timer from "./timer";
import Controls from "./video-controls";
import ProgressBar from './progress-bar'
import Spinner from './spinner'
class VideoPlayer extends Component {
    state = {
        pause: true,
        duration: "00:00",
        currentTime:"00:00",
        durationRange:0,
        currentTimeRange:0,
        loading:false,

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
        })
    }

    handleProgressChange = event =>{
        this.video.currentTime = event.target.value;
    }

    handleSeeking= event =>{
        this.setState({
            loading:true
        })
    }

    handleSeeked = event =>{
        this.setState({
            loading:false
        })
    }


    leftPad(num) {
        const pad = '00';
        return pad.substring(0,pad.length-num.length) + num
    }
    
    formatterTime(secs) {
        const min = parseInt(secs / 60, 10);
        const sec = parseInt(secs % 60, 10);
        return `${this.leftPad(min.toString())}:${this.leftPad(sec.toString())}`;
    }


    render() {
        console.log(this.state.currentTime, this.state.diration)
        return (
            <VideoLayout>
                <Title title="Prueba" />
                <Controls>
                    <PlayPause
                        handleClick={this.togglePlay}
                        pause={this.state.pause}
                    />
                    <Timer duration={this.state.duration}
                    currentTime={this.state.currentTime} />
                    <ProgressBar max={this.state.durationRange} value={this.state.currentTimeRange} handleProgressChange={this.handleProgressChange} />
                </Controls>
                <Spinner active={this.state.loading}/>
                <Video
                    src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
                    autoplay={this.props.autoplay}
                    pause={this.state.pause}
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
