let path = require("path");
let webpack = require("webpack");
let HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/dev-server',
        "./src/app"
    ],
    output: {
        path: path.join(__dirname, "build"),
        filename: "bundle.js"
    },
    plugins: [
        // This plugin minifies the code
        // NOTE :- this code is commented as we are using hot reload, we dont want to minify in dev version
        // new webpack.optimize.UglifyJsPlugin({
        //     compressor: {
        //         warnings: false
        //     }
        // }),
        // new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    module: {
        // loaders can be used to require css/png/html
        // As we are requiring only css, we have added only css loader (see package json)
        loaders: [{
            test: /\.css$/,
            loaders: ["style", "css"]
        }]
    },
    // This is configuration of dev server
    // serve content from build folder and hot reload = true
    // NOTE :- in order for hot reload = true add plugin webpack.HotModuleReplacementPlugin()
    // WARN :- In Ubunutu, hot reloading might not work due to inotify watcher limit
    // Increase the inotify watch limit
    // Add flag of watch poll to webpack-dev-server :- webpack-dev-server --watch-poll
    devServer: {
        contentBase: "./build",
        hot: true
    }
};

module.exports = config;
