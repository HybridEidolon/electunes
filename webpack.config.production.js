"use strict";

var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const loaders = [
    {
        test: /\.(js|jsx)?$/,
        exclude: /(node_modules|bower_components|public\/)/,
        include: path.join(__dirname, 'src'),
        use: [
            'babel-loader'
        ]
    }
];

module.exports = {
    entry: [
        './src/index'
    ],
    output: {
        publicPath: '/',
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
};
