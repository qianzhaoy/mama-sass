const ExtractTextPlugin = require('extract-text-webpack-plugin'),
			HtmlWebpackPlugin = require('html-webpack-plugin'),
			CleanWebpackPlugin = require('clean-webpack-plugin'),
			plugins = [];

const extractSass = new ExtractTextPlugin({
	filename: "css/mama.css",
	disable: process.env.NODE_ENV === "development"
});

const htmlWebpack = new HtmlWebpackPlugin({
	filename: './index.html',
	template: './src/index.html',
	inject: true
})


if(process.env.NODE_ENV === "production"){
	plugins.push(new CleanWebpackPlugin('dist'))
}

Array.prototype.push.apply(plugins, [extractSass,htmlWebpack])

module.exports = plugins