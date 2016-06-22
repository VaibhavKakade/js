import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";
import { Router, Route, Link, browserHistory } from "react-router";
import VideoUpload from "./scripts/videoUpload";
import VideoList from "./scripts/videoList";
import Header from "./scripts/header";

// Add routing logic here!!!
ReactDOM.render(<Header />, document.querySelector("header"));
// ReactDOM.render(<VideoUpload />, document.querySelector(".container"));
// ReactDOM.render(<VideoList />, document.querySelector(".container"));



render((
  <Router history={browserHistory}>
    <Route path="/" component={VideoList}>
        <Route path="upload" component={VideoUpload} />
    </Route>
  </Router>
), document.querySelector(".container"));


//<Route path="*" component={NoMatch}/>
