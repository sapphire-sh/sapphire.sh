'use strict';

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Main from './containers/Main';
import About from './containers/About';

import NotFound from './containers/errors/NotFound';

const routes = (
	<Route path="/" component={App}>
		<IndexRoute component={Main} />
		<Route path="/about" component={About} />
		<Route path="*" component={NotFound} />
	</Route>
);

export default routes;
