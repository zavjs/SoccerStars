const path = require('path');
const resolve = path.resolve;
const join = path.join;
const webpack = require('webpack');
const root = resolve(__dirname);
const src = join(root, 'src');
const dist = join(root, 'dist');

module.exports = {
	entry: './src/app.js',
	output: {
		path: join(dist, 'static', 'js'),
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
			},
			{
				test: /\.json$/,
				loader: 'json'
			}
		]
	},
	plugins: [
    	new webpack.optimize.DedupePlugin(),
    	new webpack.optimize.OccurenceOrderPlugin(),
    	new webpack.optimize.UglifyJsPlugin({
      		compress: { warnings: false },
      		mangle: true,
      		sourcemap: false,
      		beautify: false,
      		dead_code: true
    	}),
    	new webpack.DefinePlugin({
		  "process.env": { 
		     NODE_ENV: JSON.stringify("production") 
		   }
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