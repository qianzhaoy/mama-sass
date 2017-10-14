var ExtractTextPlugin = require('extract-text-webpack-plugin'),
			HtmlWebpackPlugin = require('html-webpack-plugin'),
			CleanWebpackPlugin = require('clean-webpack-plugin'),
			CopyWebpackPlugin = require('copy-webpack-plugin'),
			plugins = [];

var extractSass = new ExtractTextPlugin({
	filename: "css/mama.css",
	disable: process.env.NODE_ENV === "development"
});

var htmlWebpack = new HtmlWebpackPlugin({
	filename: './index.html',
	template: './src/index.html',
	inject: true
})

var copyStatic =  new CopyWebpackPlugin([{
    from: __dirname + '/src/static',
		to: "./static"
}]);


if(process.env.NODE_ENV === "production"){
	plugins.push(new CleanWebpackPlugin('dist'))
}

Array.prototype.push.apply(plugins, [extractSass,htmlWebpack,copyStatic])

module.exports = plugins