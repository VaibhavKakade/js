import React from "react";

class VideoRow extends React.Component {
    render() {
        return (
            <div className="collection-item">
                <div className="vidoeTitle">{this.props.title}</div>
                <div className="videoContent">{this.props.description}</div>
            </div>
        );
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
        return (
            <div className="collection">
                {
                    this.state.videoList.map((vData, i) => {
                        return (<VideoRow title={vData.title} description={vData.description} key={i} />)
                    })
                }
            </div>
        );
    }
    componentDidMount() {
        $(".loader").hide();
        // Find a way to elegantly fetch data
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
