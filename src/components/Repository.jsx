'use strict';

import React, { PropTypes } from 'react';

class Repository extends React.Component {
	render() {
		const {
			name,
			description,
			html_url
		} = this.props.repository;

		return (
			<li>
				<a href={html_url}>{name}</a>
				<ul>
					<li>{description}</li>
				</ul>
			</li>
		);
	}
}

Repository.propTypes = {
	repository: PropTypes.object.isRequired
};

export default Repository;
