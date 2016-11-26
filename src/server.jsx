'use strict';

import path from 'path';
import { Server } from 'http';

import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';

import HTML from './helpers/HTML';

import routes from './routes';

import NotFound from './components/errors/NotFound';

const app = new Express();
const server = new Server(app);

app.use(Express.static(path.resolve(__dirname, '../dist')));

app.get('*', (req, res) => {
	match({ routes, location: req.url }, (err, redirectLocation, renderProps) => {
		if(err) {
			return res.status(500).send(err.message);
		}
		else if(redirectLocation) {
			return res.redirect(redirectLocation.pathname, redirectLocation.search);
		}
		else if(renderProps) {
			const component = (
				<RouterContext {...renderProps} />
			);

			res.status(200).send(`<!DOCTYPE html>\n${renderToString(<HTML assets={webpackIsomorphicTools.assets()} component={component} />)}`);
		}
		else {
			res.status(404).send(404);
		}
	});
});

const port = process.env.PORT || 8020;

server.listen(port, (err) => {
	if(err) {
		return console.error(err);
	}
	console.info(`http://localhost:${port}`);
});
