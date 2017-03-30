const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

function plugins(env) {
  let plugins = [
    new HtmlWebpackPlugin({
      inject: true,
      template: 'public/index.html',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': env.production ? '"production"' : '"development"',
    }),
  ];
  if (env.production) {
    plugins = plugins.concat([
      new ExtractTextPlugin('[name]-[hash:8].css'),
      new webpack.optimize.UglifyJsPlugin({
        compress: env.production ? {
          screw_ie8: true,
          warnings: false,
        } : false,
        sourceMap: true,
        mangle: {
          screw_ie8: true,
        },
        output: {
          comments: false,
          screw_ie8: true,
        },
      }),
      new webpack.LoaderOptionsPlugin({
        minimize: true,
      }),
    ]);
  } else {
    plugins = plugins.concat([
      new webpack.NoEmitOnErrorsPlugin(),
    ]);
  }
  return plugins;
}

module.exports = function(env) {
  return {
    entry: {
      main: './src/index.js',
    },
    resolve: {
      extensions: ['.js', '.json',],
    },
    devtool: env.production ? 'source-map' : 'eval',
    watch: env.production ? false : true,
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.jsx?$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        },
        {
          exclude: [
            /\.jsx?$/,
            /\.css$/,
            /\.html$/,
          ],
          loader: 'url-loader',
          query: {
            limit: 10000,
            name: 'static/media/[name].[hash:8].[ext]',
          },
        },
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          query: {
            cacheDirectory: true,
          },
        },
        {
          test: /\.css$/,
          loader: env.production ? ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader?importLoaders=true',}) : 'style-loader!css-loader?importLoaders=true',
        },
      ],
    },
    output: {
      path: path.resolve(__dirname, 'build'),
      pathinfo: !env.production,
      filename: '[name]-[hash:8].js',
    },
    profile: true,
    externals: {
      'react': 'React',
      'react-dom': 'ReactDOM',
      'redux': 'Redux',
      'react-redux': 'ReactRedux',
      '@blueprintjs/core': 'Core',
    },
    plugins: plugins(env),
    bail: env.production ? true : false,
  };
};
