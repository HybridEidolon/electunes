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
        'react-hot-loader/patch',
        `webpack-dev-server/client?http://${HOST}:${PORT}`,
        'webpack/hot/only-dev-server',
        './src/index'
    ],
    devtool: 'inline-source-map',
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
        hot: true,
        historyApiFallback: true,
        port: PORT,
        host: HOST
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new DashboardPlugin(),
        new HtmlWebpackPlugin({
            template: './src/template.html',
            files: {
                js: ['bundle.js']
            }
        })
    ]
};
