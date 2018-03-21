
var webpack = require("webpack");
// var path = require("path");

module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname + "/dist",
        filename: "main.js"
    },
    devtool: 'source-map',
    // watch: true,
    module: {
        rules: [
            {
                test: /\.js$/,
                // exclude: /node_modules/,
                use: 'babel-loader',//在webpack的module部分的loaders里进行配置即可
            }
        ]
    },
    // plugins: [
    //     new UglifyJsPlugin({
    //         compress: {
    //             warnings: false
    //         }
    //     })
    // ]
};