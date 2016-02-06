var webpack = require('webpack');

module.exports = {
    entry: {
        javascript: "./app.js",
        html: "./index.html",
    },
    context: __dirname + "/src",
    output: {
        path: __dirname,
        filename: "dist/bundle.js"
    },
    devtool: 'source-map-inline',
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015'],
                    plugins: ['transform-runtime']
                }
            },
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]",
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};