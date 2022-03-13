const HTMLWEBPACKPLUGIN = require("html-webpack-plugin")

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    devServer: {
        compress: false,
        open: true,
        port: 9000,
    },
    module: {
        rules: [
            { test: /\.txt$/, use: 'raw-loader' }
        ]
    },
    plugins: [
        new HTMLWEBPACKPLUGIN({
            template: './src/index.html'
        })
    ],
    mode: 'development'
}