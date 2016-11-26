'use strict';

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Main from './components/Main';
import About from './components/About';

import NotFound from './components/errors/NotFound';

const routes = (
	<Route path="/" component={App}>
		<IndexRoute component={Main} />
		<Route path="/about" component={About} />
		<Route path="*" component={NotFound} />
	</Route>
);

export default routes;
