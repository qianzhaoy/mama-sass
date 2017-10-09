const plugins = require("./webpack.plugins");
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
	entry: "./src/main.js",
	output: {
		path: path.resolve(__dirname, "./dist/"),
		filename: 'js/bundle.js',
		publicPath: "/"
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader?presets[]=es2015',
				exclude: /node_modules/,
			},
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
					name: 'fonts/[name].[ext]'
				}
      },
			{
				test: /\.(png|jpe?g|gif)(\?\S*)?$/,
				loader: 'file-loader',
				query: {
					name: '[name].[ext]?[hash]'
				}
      }
		]
	},
	resolve: {
		extensions: ['scss', '.js']
	},
	plugins: plugins
}
