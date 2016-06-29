import React from "react";
import {render} from "react-dom";
import { Router, Route, hashHistory, IndexRoute } from "react-router";

// import application views
import VideoUpload from "./scripts/views/videoUpload";
import VideoList from "./scripts/views/videoList";

import App from "./app";

// import appRouter from "./scripts/appRouter";

// Add routing logic here!!!
// Working!!!
/*
appRouter.init({
    selector: document.querySelector(".container"),
    routes: {
        index: (<VideoList/>),
        videoList: (<VideoList/>),
        videoUpload: (<VideoUpload/>)
    }
});
ReactDOM.render(<Header />, document.querySelector("header"));
*/

render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={VideoList}/>
            <Route path="/videoList" component={VideoList}/>
            <Route path="/videoUpload" component={VideoUpload}/>
        </Route>
     </Router>
), document.getElementById("app"));
