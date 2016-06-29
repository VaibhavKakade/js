import ReactDOM from "react-dom";

const appRouter = {
    init: function (config) {
        this.routes = config.routes;
        this.selector = config.selector ? config.selector : document.body;
        this.navigate("index");
    },
    navigate: function (path) {
        var reqView = this.routes[path];
        var reqSeletor = this.selector;
        ReactDOM.render(reqView, reqSeletor);
    }
};

export default appRouter;
