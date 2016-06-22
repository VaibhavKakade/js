import React from "react";

class VideoUpload extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="row">
                    <label>YouTube URL</label>
                    <input type="text" />
                </div>
                <div className="row">
                    <label>Title</label>
                    <input type="text" />
                </div>
                <div className="row">
                    <label>Description</label>
                    <textarea className="materialize-textarea"></textarea>
                </div>
                <div className="row">
                    <button className="upload btn waves-effect waves-light">Upload</button>
                </div>
            </div>
        );
    }
    componentDidMount() {
        $(".loader").hide();
    }
    uploadVideo() {
        // ajax to upload the video
    }
}

export default VideoUpload;
