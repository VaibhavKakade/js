import React from "react";
import { validationRegEx, videoHelper } from "../commons/helper";

class VideoUpload extends React.Component {
    constructor() {
        super();

        this.state = {
            url: "",
            title: "",
            description: "",
            "videoId": ""
        };

        this.uploadVideo = this.uploadVideo.bind(this);
        // this.handleChange = this.handleChange.bind(this);
    }
    render() {
        return (
            <div className="row">
                <div className="row">
                    <label>YouTube URL</label>
                    <input onChange={this.handleChange.bind(this,"url")} type="text" />
                </div>
                <div className="row">
                    <label>Title</label>
                    <input onChange={this.handleChange.bind(this,"title")} type="text" />
                </div>
                <div className="row">
                    <label>Description</label>
                    <textarea onChange={this.handleChange.bind(this,"description")} className="materialize-textarea"></textarea>
                </div>
                <div className="row">
                    <button onClick={this.uploadVideo} className="upload btn waves-effect waves-light orange">Upload</button>
                </div>
            </div>
        );
    }
    handleChange(inputName, event) {
        var reqState = {};

        reqState[inputName] = event.target.value;
        this.setState(reqState);
    }
    componentDidMount() {
        $(".loader").hide();
    }
    dataValid() {
        let valid = true,
            url = this.state.url;
        /*title = this.state.title,
        description = this.state.description;*/

        if (!url.includes("youtube")) {
            console.warn("please enter youtube url");
            valid = false;
        }

        return valid;
    }
    uploadVideo() {

        // apply data validation here
        if (this.dataValid()) {
            // ajax to upload the video
            this.setState({
                videoId: videoHelper.getVideoId(this.state.url)
            });
            console.log("upload video", this.state);
        }
    }
}

export default VideoUpload;
