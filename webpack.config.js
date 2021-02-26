const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const babelLoader = {
  test: /\.jsx?$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
    query: {
        presets: ['es2015']
    }
};

module.exports = {
  entry: "./index.js",
  plugins: [new CleanWebpackPlugin("build")],
  output: {
    filename: "index.js",
    libraryTarget: "umd"
  },
  module: {
    rules: [babelLoader]
  },
  optimization: {
    minimize: false
  },
   mode: 'development'
};
