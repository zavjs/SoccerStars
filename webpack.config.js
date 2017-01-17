const path = require('path');
const resolve = path.resolve;
const join = path.join;
const webpack = require('webpack');
const root = resolve(__dirname);
const src = join(root, 'src');

module.exports = {
	entry: './src/app.js',
	output: {
		path: join(src, 'static', 'js'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{ 
				test: /.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	},
	plugins: [
    	new webpack.DefinePlugin({
      		'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    	}),
    	new webpack.optimize.DedupePlugin(),
    	new webpack.optimize.OccurenceOrderPlugin(),
    	new webpack.optimize.UglifyJsPlugin({
      		compress: { warnings: false },
      		mangle: true,
      		sourcemap: false,
      		beautify: false,
      		dead_code: true
    	})
  	],
  	resolve: {
		alias: {
			components: join(src, 'components'),
			data: join(src, 'data')
		}
	},
	devServer: {
		inline: true
	}
};