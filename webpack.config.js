const fs = require('fs');
const path = require('path');

const webpack = require('webpack');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const env = process.env.NODE_ENV === 'production' ? 'production' : 'development';

const distPath = path.resolve(__dirname, './dist');
const pagesPath = path.resolve(__dirname, './_pages');

module.exports = {
	'entry': path.resolve(__dirname, 'src', 'index.tsx'),
	'output': {
		'path': distPath,
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
			{
				'test': /\.s?css$/,
				'use': [
					{
						'loader': MiniCssExtractPlugin.loader,
					},
					{
						'loader': 'css-loader',
					},
					{
						'loader': 'sass-loader',
					},
				],
			},
			{
				'test': /\.md$/,
				'use': [
					'raw-loader',
				],
			},
			{
				'test': /\.png$/,
				'use': [
					'file-loader',
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
		'alias': {
			'~': path.resolve('./src/'),
		},
	},
	'plugins': [
		new webpack.DefinePlugin({
			'__dev': process.env.NODE_ENV === 'development',
			'__test': process.env.NODE_ENV === 'test',
			'__travis': process.env.TRAVIS === 'true',
			'__dist_path': JSON.stringify(distPath),
			'__pages_path': JSON.stringify(pagesPath),
		}),
		new MiniCssExtractPlugin({
			'filename': 'styles.css',
		}),
		new webpack.ProgressPlugin(),
	],
	'target': 'node',
	'node': {
		'__dirname': true,
	},
	'mode': env,
	'devServer': {
		'watchContentBase': true,
		'host': 'localhost',
		'port': 8016,
		'open': true,
	},
};
