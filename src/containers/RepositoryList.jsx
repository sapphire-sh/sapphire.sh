'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Repository from '../components/Repository';

class RepositoryList extends Component {
	render() {
		const {
			repositories
		} = this.props.repositories;

		return (
			<ul>
				{
					repositories.map((repository) => {
						return (
							<Repository key={repository.id} repository={repository} />
						);
					})
				}
			</ul>
		);
	}
}

RepositoryList.propTypes = {
	repositories: PropTypes.object.isRequired,
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
