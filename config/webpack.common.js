const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const {ProvidePlugin} = require("webpack");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
// BundleAnalyzer는 Bundle 최적화 용도로 보통 저는 사용합니다.

module.exports = {
  entry: `${path.resolve(__dirname, "../")}/index.tsx`,
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
    new ProvidePlugin({
      React: "react",
    }),
    new CleanWebpackPlugin()
    // CopyWebpackPlugin: 그대로 복사할 파일들을 설정하는 플러그인
		// 아래 patterns에 설정한 파일/폴더는 빌드 시 dist 폴더에 자동으로 생성됩니다.
		// patterns에 설정한 경로에 해당 파일이 없으면 에러가 발생합니다.
		// 사용하는 파일이나 폴더 이름이 다르다면 변경해주세요.
		// 그대로 사용할 파일들이 없다면 CopyWebpackPlugin을 통째로 주석 처리 해주세요.
    // new CopyWebpackPlugin({
		// 	patterns: [
				// { from: "./src/main.css", to: "./main.css" },
				// { from: "./src/images", to: "./images" },
				// { from: "./src/models", to: "./models" },
				// { from: "./src/sounds", to: "./sounds" }
		// 	],
		// })
  ],
  resolve: {
    alias: {
      '@layouts': path.resolve(__dirname, '../src/layouts/'),
      '@pagess': path.resolve(__dirname, '../src/pages/'),
    },
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css", ".json"],
  },
};