'use strict';

require('isomorphic-fetch');

export const REQUEST_REPOSITORIES = 'REQUEST_REPOSITORIES';
export const RECEIVE_REPOSITORIES = 'RECEIVE_REPOSITORIES';

export function requestRepositories() {
	return {
		type: REQUEST_REPOSITORIES
	};
};

export function receiveRepositories(repositories) {
	return {
		type: RECEIVE_REPOSITORIES,
		repositories
	};
};

export function fetchRepositories() {
	return (dispatch) => {
		dispatch(requestRepositories());

		return fetch(`https://api.github.com/users/sapphiredev/repos`)
		.then((res) => {
			return res.json();
		})
		.then((json) => {
			dispatch(receiveRepositories(json));
		});
	};
};
