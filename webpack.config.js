const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const glob = require("glob");
module.exports = {
  entry: {
    spyjs: glob.sync("./src/**/*.js"),
    sites: glob.sync("./sites/src/**/*.js")
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(['dist']),
    // new HtmlWebpackPlugin({
    //   title: ''
    // })
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude:/(node_modules)/,
        loader: "babel-loader",
        query: {
          presets: ["es2015"]
        }
      },
      // { test: /\.html$/, loader: 'html-loader'},
      { test: /\.html$/, loader: "handlebars-loader" },
      { test: /\.scss$/, loader: "style-loader!css-loader!sass-loader"}
    ]
  },
  externals: {
    jquery: '$',
    lodash: "_",
    handlebars: 'Handlebars'
  }
};