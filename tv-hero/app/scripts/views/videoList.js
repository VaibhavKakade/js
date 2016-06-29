import React from "react";
import {videoHelper} from "../commons/helper";

class VideoRow extends React.Component {
    render() {
        // useful link for fetching images
        // http://stackoverflow.com/questions/2068344/how-do-i-get-a-youtube-video-thumbnail-from-the-youtube-api
        let vData = this.props.data,
            videoId = videoHelper.getVideoId(vData.url),
            title = vData.title,
            description = vData.description,
            videoImage = "http://img.youtube.com/vi/"+videoId+"/0.jpg";

        return (
            <div className="collection-item relative">
                <h5>{title}</h5>
                <img className="videoThumbnail" src={videoImage} alt=""/>
                <p className="videoDescription">{description}</p>
                <button onClick={this.watchVideo.bind(this,videoId)} className="btn waves-effect waves-light orange absolute watchBtn">Watch</button>
            </div>
        );
    }

    watchVideo(videoId) {
        console.log("videoId ", videoId);
    }
}


class VideoList extends React.Component {
    constructor() {
        super();
        this.state = {
            "videoList": []
        };
    }

    render() {
        let collectionStyle = {
            width: "700px",
            right: 0,
            left: 0,
            margin: "auto"
        };
        return (
            <div className="collection" style={collectionStyle}>
                {
                    this.state.videoList.map((vData, i) => {
                        return (<VideoRow data={vData} key={i} />);
                    })
                }
            </div>
        );
    }

    componentDidMount() {
        $(".loader").hide();
        // Find a way to elegantly fetch data
        var that = this;

        /*var player = new YT.Player("video-placeholder", {
            width: 600,
            height: 400,
            videoId: "lP1RMQ02Tf4",
            playerVars: {
                color: "white"
            }
        });*/

        $.ajax({
            url: "app/mock/videoList.json",
            method: "GET",
            success: function (data) {
                that.setState({
                    "videoList": data
                });
            },
            error: function (error) {
                console.log(error);
            }
        });
    }
}

export default VideoList;
