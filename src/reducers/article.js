'use strict';

import {
	REQUEST_ARTICLE,
	RECEIVE_ARTICLE
} from '../actions';

const article = (state = {}, action) => {
	switch(action.type) {
		case REQUEST_ARTICLE:
			return state;
		case RECEIVE_ARTICLE:
			return Object.assign({}, state, {
				article: action.article
			});
		default:
			return state;
	}
}

export default article;
