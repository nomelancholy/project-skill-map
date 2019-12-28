const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
// html 파일 추출 플러그인입니다
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// css 파일 추출 플러그인입니다
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// build 폴더 자동 정리를 위한 플러그인 입니다

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname + "/build")
  },
  devServer: {
    contentBase: path.resolve("./build"),
    index: "index.html",
    port: 9000
    // 변경 사항 자동 적용을 위한 설정입니다
  },
  mode: "none",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: "/node_modules",
        use: ['babel-loader'],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader,'css-loader']
      },
      {
        test: /\.json$/,
        type: "javascript/auto",
        loader: "file-loader",
        options: {
          name: "model/[name].[ext]"
        },
        include: [
          path.resolve(__dirname, "./model")
        ]
      },
      {
        test:/\.ico$/,
        loader:"file-loader?name=[name].[ext]",
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
    new CleanWebpackPlugin()
  ]
};