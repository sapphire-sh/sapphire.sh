'use strict';

export const fetchRepositories = (repositories) => {
	return {
		type: 'FETCH_REPOSITORIES',
		repositories
	}
};
