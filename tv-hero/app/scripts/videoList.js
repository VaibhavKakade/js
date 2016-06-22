import React from "react";

class VideoRow extends React.Component {
    render() {
        return (
            <div class="row">
                <div class="col l12">
                    <div class="vidoeTitle col l12">{this.props.title}</div>
                    <div class="videoContent col l12">{this.props.description}</div>
                </div>
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
        console.log(this.state.videoList);
        return (
            <div>
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
                console.log(that, data);
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
