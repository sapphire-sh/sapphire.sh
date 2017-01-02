'use strict';

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import article from './article';

const reducers = combineReducers({
	article,
	routing: routerReducer
});

export default reducers;
