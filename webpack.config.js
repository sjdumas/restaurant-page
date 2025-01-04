const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	mode: "development",
	entry: "./src/index.js",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},
	devtool: "eval-source-map",
	devServer: {
		watchFiles: ["./src/template.html"],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/template.html",
		}),
		new MiniCssExtractPlugin({
			filename: "[name].[contenthash].css",
		}),
	],
	module: {
		rules: [
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'images/',
							publicPath: 'images/'
						}
					}
				]
			},
			{
				test: /\.css$/i,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: {
							sourceMap: true,
							importLoaders: 1,
						},
					},
					"postcss-loader",
				],
			},
			{
				test: /\.html$/i,
				loader: "html-loader",
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: "asset/resource",
				generator: {
					filename: "fonts/[name][ext]",
				},
			},
		],
	},
};
