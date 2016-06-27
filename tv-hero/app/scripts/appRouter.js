import ReactDOM from "react-dom";

class AppRouter {
    init(config) {
        this.routes = config.routes;
        this.selector = config.selector ? config.selector : document.body;
        this.navigate("index");
    }
    navigate(path) {
        var reqView = this.routes[path];
        var reqSeletor = this.selector;
        ReactDOM.render(reqView, reqSeletor);
    }
}

var appRouter = new AppRouter();
export default appRouter;
