'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Repository from '../components/Repository';

class RepositoryList extends Component {
	render() {
		const {
			repositories
		} = this.props;

		return (
			<ul>
				{
					repositories.map((repository) => {
						return (
							<Repository key={repository.id} title={repository.title} description={repository.description} />
						);
					})
				}
			</ul>
		);
	}
}

RepositoryList.propTypes = {
	repositories: PropTypes.array.isRequired,
	dispatch: PropTypes.func.isRequired
};

export default connect((state) => {
	const { repositories } = state;

	if(repositories === undefined) {
		return {
			repositories: []
		}
	}
	return {
		repositories
	};
})(RepositoryList);
