const path = require('path');

const webpack = require('webpack');

const env = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
	'entry': path.resolve(__dirname, 'src', 'index.tsx'),
	'output': {
		'path': path.resolve(__dirname, 'assets'),
		'publicPath': '/assets',
		'filename': 'main.js',
	},
	'module': {
		'rules': [
			{
				'test': /\.tsx?$/,
				'use': [
					'ts-loader',
				],
			},
		],
	},
	'devtool': false,
	'resolve': {
		'extensions': [
			'.ts',
			'.tsx',
			'.js',
			'.json',
		],
	},
	'plugins': [
		new webpack.DefinePlugin({
			'__dev': process.env.NODE_ENV === 'development',
			'__test': process.env.NODE_ENV === 'test',
		}),
		new webpack.ProgressPlugin(),
	],
	'mode': env,
};
