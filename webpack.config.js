"use strict";

var webpack = require('webpack');
var path = require('path');
var DashboardPlugin = require('webpack-dashboard/plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const HOST = process.env.NODE_HOST || "127.0.0.1";
const PORT = process.env.NODE_PORT || "8888";

const loaders = [
    {
        test: /\.(js|jsx)?$/,
        exclude: /(node_modules|bower_components|public\/)/,
        include: path.join(__dirname, 'src'),
        use: [
            'babel-loader',
            'eslint-loader'
        ]
    }
];

module.exports = {
    entry: [
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',
        './src/index'
    ],
    devtool: process.env.WEBPACK_DEVTOOL || 'eval-source-map',
    output: {
        publicPath: '/',
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders
    },
    devServer: {
        contentBase: './public',
        noInfo: true,
        hot: true,
        inline: true,
        historyApiFallback: true,
        port: PORT,
        host: HOST
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new DashboardPlugin(),
        new HtmlWebpackPlugin({
            template: './src/template.html',
            files: {
                js: ['bundle.js']
            }
        })
    ]
};
