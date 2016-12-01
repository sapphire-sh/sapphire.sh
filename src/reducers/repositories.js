'use strict';

import {
	REQUEST_REPOSITORIES,
	RECEIVE_REPOSITORIES
} from '../actions';

const repositories = (state = {
	repositories: []
}, action) => {
	switch(action.type) {
		case REQUEST_REPOSITORIES:
			return state;
		case RECEIVE_REPOSITORIES:
			return Object.assign({}, state, {
				repositories: action.repositories
			});
		default:
			return state;
	}
}

export default repositories;
