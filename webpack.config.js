const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const htmlPlugin = new HtmlWebPackPlugin({
 template: "./src/index.html",
 filename: "./index.html"
});
module.exports = {
mode: 'development',
  module: {
    rules: [{
   test: /\.(js|mjs|ts|tsx)$/,
   exclude: [/node_modules/, path.resolve(__dirname, 'node_modules/box-ui-elements')],   
    loader: "babel-loader"
 },
  {
   test: /\.s?css$/,
   use: ["style-loader", "css-loader", 'postcss-loader', 'sass-loader']
  }
]},
 plugins: [htmlPlugin]
};