import React, { Component } from "react";
import Media from "./media";
import '../../css/components/playlist.css'

class Playlist extends Component {
  

    render() {
        
        const playlist = this.props.playlist;
        
        return (
            <div className="Playlist">
                {
                    playlist.map((element) => {
                        return <Media key={element.id} {...element} />
                    })
                }
            </div>
        );
    }
}

export default Playlist;
