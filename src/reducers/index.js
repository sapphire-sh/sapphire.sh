'use strict';

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import repositories from './repositories';

const reducers = combineReducers({
	repositories,
	routing: routerReducer
});

export default reducers;
