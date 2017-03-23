var webpack = require('webpack');
module.exports = {
	devtool: 'source-map', //用于调试代码
	entry: __dirname + '/main.js', // __dirname当前脚本的路径
	output: {
		path: __dirname + '/public',
		filename: 'bundle.js'
	},
	//vue2.0加上此句
	resolve: {
		alias: {
			vue: 'vue/dist/vue.js',
//			'vue-router$': 'vue-router/dist/vue-router.common.js',
			'muse-components': 'muse-ui/src'
		}
	},
	module: {
		loaders: [{
			test: /\.vue$/,
			loader: 'vue-loader'
		}, {
			test: /\.css$/,
			loader: 'style-loader!css-loader'
		}, {
			test: /muse-ui.src.*?js$/,
			loader: 'babel'
		}]
	},

	//配置webpack-dev-server
	devServer: {
		contentBase: "./public",
		inline: true,
		port: 6767
	}
}