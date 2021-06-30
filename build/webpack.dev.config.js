process.env.NODE_ENV = process.env.NODE_ENV || "development";

const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: {
    app: ["./src/main.jsx"]
  },
  output: {
    path: path.resolve(process.cwd(), "src"),
    publicPath: "/",
    filename: "[name].js"
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      assets: path.resolve(process.cwd(), "src/assets")
    }
  },
  module: {
    rules: [
      {
        test: /\.(m?js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "static/images"
            }
          }
        ]
      }
    ]
  },
  devtool: "eval-source-map",
  devServer: {
    contentBase: path.resolve(process.cwd(), "src"),
    historyApiFallback: true,
    hot: true,
    port: 3000,
    noInfo: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(process.cwd(), "src/index.html"),
      inject: true
    }),
    new Dotenv({
      path: path.resolve(process.cwd(), `${process.env.NODE_ENV}.env`)
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
