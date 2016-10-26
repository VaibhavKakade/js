import React from "react";
import { validationRegEx, videoHelper } from "../commons/helper";

class VideoUpload extends React.Component {
    constructor() {
        super();

        this.state = {
            url: "",
            title: "",
            description: "",
            videoId: ""
        };

        // var oThis = this;
        this.uploadVideo = this.uploadVideo.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    render() {
        return (
            <div className="row">
                <div className="row">
                    <label>YouTube URL</label>
                    <input name="url" onChange={this.handleChange} type="text" />
                </div>
                <div className="row">
                    <label>Title</label>
                    <input name="title" onChange={this.handleChange} type="text" />
                </div>
                <div className="row">
                    <label>Description</label>
                    <textarea name="description" onChange={this.handleChange} className="materialize-textarea"></textarea>
                </div>
                <div className="row">
                    <button onClick={this.uploadVideo} className="upload btn waves-effect waves-light orange">Upload</button>
                </div>
            </div>
        );
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    componentDidMount() {
        $(".loader").hide();
    }
    dataValid() {
        let valid = true,
            url = this.state.url;

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
