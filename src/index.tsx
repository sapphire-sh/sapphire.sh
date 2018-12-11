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
const pagesPath = path.resolve(basePath, './_pages');

async function getPages(parentPath: string, file?: string): Promise<string[] | null> {
	const directoryPath = file === undefined ? parentPath : path.resolve(parentPath, file);
	const stat = await fsPromises.lstat(directoryPath);
	if(stat.isDirectory()) {
		const files = await fsPromises.readdir(directoryPath);

		const pages = await Promise.all(files.map(async (file) => {
			return getPages(directoryPath, file);
		}));
		return pages.reduce<string[]>((a, b) => {
			if(b === null) {
				return a;
			}
			return [
				...a,
				...b,
			];
		}, []);
	}
	if(file === 'index.md') {
		return [
			path.relative(pagesPath, parentPath),
		];
	}
	return null;
}

async function generatePage(pages: string[], filePath: string, page: string) {
	const context = {};

	const app = (
		<StaticRouter
			location={`/${page}`}
			context={context}
		>
			<AppContainer
				pages={pages}
			/>
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
	const pages = await getPages(pagesPath);
	if(pages === null) {
		return;
	}

	await generatePage(pages, basePath, '');
	await generatePage(pages, basePath, '404');

	for(const page of pages) {
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

		await generatePage(pages, filePath, page);
	}
})();
