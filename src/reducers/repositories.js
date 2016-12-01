'use strict';

const repositories = (state = [], action) => {
	switch(action.type) {
		case 'FETCH_REPOSITORIES':
			return state;
		default:
			return state;
	}
}

export default repositories;
