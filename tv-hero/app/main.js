import React from "react";
import ReactDOM from "react-dom";

// import application views
import VideoUpload from "./scripts/videoUpload";
import VideoList from "./scripts/videoList";

import Header from "./scripts/header";
import appRouter from "./scripts/appRouter";

// Add routing logic here!!!
appRouter.init({
    selector: document.querySelector(".container"),
    routes: {
        index: (<VideoList/>),
        videoList: (<VideoList/>),
        videoUpload: (<VideoUpload/>)
    }
});
ReactDOM.render(<Header />, document.querySelector("header"));


// ReactDOM.render(<VideoUpload />, document.querySelector(".container"));
// ReactDOM.render(<VideoList />, document.querySelector(".container"));

/*ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={VideoList}>
        <IndexRoute component={VideoList} />
        <Route path="videoUpload" component={VideoUpload} />
    </Route>
  </Router>
), document.querySelector(".container"));
*/

/*
ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={VideoList} />
    <Route path="/videoUpload" component={VideoUpload} />
  </Router>
), document.querySelector(".container"));
*/
/*ReactDOM.render((
   <Router history = {browserHistory}>
        <Route path = "/" component={VideoList}>
            <IndexRoute component={VideoList} />
            <Route path = "videoUpload" component={VideoUpload} />
      </Route>
   </Router>
), document.querySelector(".container"));*/

/*
let routes = (
  <Route name="home" path="/" handler={VideoList}>
    <Route name="upload" path="/videoUpload" handler={VideoUpload}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
*/
