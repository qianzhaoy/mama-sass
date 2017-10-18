var plugins = require("./webpack.plugins");
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
	entry: "./src/main.js",
	output: {
		path: path.resolve(__dirname, "./dist/"),
		filename: 'js/bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'postcss-loader', 'sass-loader']
				})
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
				loader: 'file-loader',
				query: {
					name: 'fonts/[name].[ext]',
					publicPath: "../"
				}
			},
			{
				test: /\.(png|jpe?g|gif)(\?\S*)?$/,
				loader: 'file-loader',
				query: {
					name: '[name].[ext]?[hash]'
				}
			},
			{
				test: /\.html$/,
				// loader: 'html-loader'
				loader: "html-loader?-minimize"
			}
			]
	},
	resolve: {
		extensions: ['scss', '.js']
	},
	externals: {
		jquery: 'window.$',
		$: 'window.$'
	},
	plugins: plugins
}
