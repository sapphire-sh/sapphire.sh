import {
	promises as fsPromises,
} from 'fs';
import path from 'path';

import React from 'react';

import {
	renderToString,
} from 'react-dom/server';

import {
	StaticRouter,
} from 'react-router';

import {
	AppContainer,
} from './AppContainer';

import {
	HTML,
} from './helpers';

const basePath = path.resolve(__dirname, '../');

async function generatePage(filePath: string, page: string) {
	const context = {};

	const app = (
		<StaticRouter
			location={`/${page}`}
			context={context}
		>
			<AppContainer />
		</StaticRouter>
	);

	const html = `<!DOCTYPE html>${renderToString(
		<HTML
			container={app}
		/>,
	)}`;

	await fsPromises.writeFile(`${filePath}/${page === '404' ? page : 'index'}.html`, html);
}

(async () => {
	await generatePage(basePath, '');
	await generatePage(basePath, '404');

	for(const page of __pages) {
		const structure = page.split('/');
		let filePath = basePath;
		while(structure.length > 0) {
			filePath = path.join(filePath, structure.shift()!);
			try {
				await fsPromises.lstat(filePath);
			}
			catch(err) {
				if(err.code === 'ENOENT') {
					await fsPromises.mkdir(filePath);
				}
				else {
					throw err;
				}
			}
		}
		await generatePage(filePath, page);
	}
})();
