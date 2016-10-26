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
        loaders: [{
            test: /\.css$/,
            loaders: ["style", "css"]
        }]
    },
    devServer: {
        contentBase: "./build",
        hot: true
    }
};

module.exports = config;
