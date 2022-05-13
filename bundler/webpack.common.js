
const path = require('path')

module.exports = {
	entry: './src/index.tsx',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: ['ts-loader']
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			}
		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx', '.ts', '.tsx']
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, '../dist'),
	}
}