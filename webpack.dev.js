const webpack = require('webpack');
const { merge } = require('webpack-merge');
const commons = require('./webpack.commons.js');
const path = require('path');

module.exports = merge(commons, {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: [
    `${require.resolve('webpack-dev-server/client')}?/`,
    require.resolve('webpack/hot/only-dev-server'),
    './src/index.js',
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: ['babel-loader'],
        exclude: /(node_modules(?!\/esn-frontend-common-libs|\/esn-frontend-mailto-handler))|(node_modules\/esn-frontend-common-libs\/src\/frontend\/components)|(node_modules\/esn-frontend-common-libs\/src\/frontend\/vendor-libs\.js)/
      }
    ]
  }
});
