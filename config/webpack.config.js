const path = require('path');
const webpack = require('webpack');
const ETPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    greenTemp: path.join(__dirname, '../src/scripts/green-template.js'),
    whiteTemp: path.join(__dirname, '../src/scripts/white-template.js'),
    house: path.join(__dirname, '../src/scripts/house.js'),
    incubo: path.join(__dirname, '../src/scripts/incubo.js'),
    vendor: ['jquery', 'bootstrap']
  },
  output: {
    path: path.join(__dirname, '../public/build'),
    filename: '[name].js',
    publicPath: '/build/'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {test: /\.scss$/, loader: ETPlugin.extract({
        fallbackLoader: 'style-loader',
        loader: 'css-loader!sass-loader'
      })
      },
      {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
      {test: /\.(png|jpg|jpeg|gif|woff|ttf|eot|svg)/, loader: 'url-loader?limit=8192'},
      {test: /\.json$/, loader: 'json-loader'}
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({name: 'vendor'}),
    new ETPlugin('./css/[name].css'),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      jquery: 'jquery'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
};