var path = require('path')
var webpack = require('webpack')

var config = {
	entry: [
		'webpack/hot/dev-server',
		path.join(__dirname, 'src', 'main')
	],
	output: {
	    path: path.join(__dirname, 'dist'),
	    filename: 'bundle.js',
	    publicPath: '/dist/'
	  },
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/
			},
			{
				test: /\.vue$/,
				loader: 'vue'
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.vue'],
		alias: {
			vue: 'vue/dist/vue.js'
		}
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
}

module.exports = config