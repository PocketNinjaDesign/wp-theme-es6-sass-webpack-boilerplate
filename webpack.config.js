const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: "./dev/index.js",

  output: {
    path: path.resolve(__dirname, "./js"),
    filename: "index.js",
    publicPath: "/js/"
  },

  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: "css-loader"
          }, {
            loader: "sass-loader"
          }]
        })
      },
    ]
  },

  plugins: [
    new ExtractTextPlugin('../style.css'),
    // new CopyWebpackPlugin([
    //   { from:'sass/images/', to:'images' },
    // ]),
  ]
};