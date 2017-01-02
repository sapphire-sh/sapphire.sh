'use strict';

import fetch from 'isomorphic-fetch';

export const REQUEST_ARTICLE = 'REQUEST_ARTICLE';
export const RECEIVE_ARTICLE = 'RECEIVE_ARTICLE';

export function requestArticle() {
	return {
		type: REQUEST_ARTICLE
	};
};

export function receiveArticle(article) {
	return {
		type: RECEIVE_ARTICLE,
		article
	};
};

export function fetchArticle(filename) {
	return (dispatch) => {
		dispatch(requestArticle());

		return fetch(`/apis/articles/${filename}`)
		.then(res => res.json())
		.then((json) => {
			dispatch(receiveArticle(json));
		});
	};
};
