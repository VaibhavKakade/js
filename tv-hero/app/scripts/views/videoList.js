import React from "react";
import {videoHelper} from "../commons/helper";
// import { Router } from "react-router";

class VideoRow extends React.Component {
    render() {
        // USEFUL LINK for fetching images :-
        // 1] http://stackoverflow.com/questions/2068344/how-do-i-get-a-youtube-video-thumbnail-from-the-youtube-api

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
        // USEFUL LINK :-
        // 1] http://stackoverflow.com/questions/31079081/programmatically-navigate-using-react-router
        this.context.router.push("/videoDetails/" + videoId);
    }
}
VideoRow.contextTypes = {
    router: React.PropTypes.object.isRequired
};


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
        var that = this;
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
