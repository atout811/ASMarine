import React from "react";
import YouTube from "react-youtube";
import "./YoutubeSection.css";

class YoutubeVideo extends React.Component {
  render() {
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
        cc_load_policy: 1,
      },
    };

    return (
      <YouTube
        className="video"
        videoId="yYf4bfQeF5g"
        opts={opts}
        onReady={this._onReady}
      />
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}
export default YoutubeVideo;
