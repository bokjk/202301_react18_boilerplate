const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    open: false,
    hot: true,
    compress: true,
    port: 8081,
    historyApiFallback: true, // 새로고침해도 주소를 찾을 수있도록. 안하면 새로고침하면 주소를 못찾음
    liveReload: true,
    // proxy: {
    //   // 이 설정을 안해주면 다른주소로 api를 날렸을때 오류가 난다.
    //   '/api/': {
    //     target: 'http://localhost:3095',
    //     changeOrigin: true,
    //   },
    // },
  },
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
});