import React from "react";

class VideoDetails extends React.Component {
    render() {
        let videoId = this.props.params.videoId;
        let centerAlign = {
            width: "640px",
            left: 0,
            right: 0,
            margin: "auto"
        };

        return (
            <div style={centerAlign}>
                <div id={videoId}></div>
                <div className="commentsContainer">
                    <h5>Comments</h5>
                    <div className="comments collection">
                        <div className="collection-item">Awesome Comment!!!</div>
                        <div className="collection-item">WOW Comment!!!</div>
                        <div className="collection-item">Great Comment!!!</div>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        $(".loader").hide();
        let videoId = this.props.params.videoId;
        let player = new YT.Player(videoId, {
            /*width: 600,
            height: 400,*/
            videoId: videoId,
            playerVars: {
                color: "white"
            }
        });
        console.log(player);
    }
}

export default VideoDetails;
