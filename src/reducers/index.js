'use strict';

import { combineReducers } from 'redux';

import repositories from './repositories';

const reducers = combineReducers({
	repositories
});

export default repositories;
