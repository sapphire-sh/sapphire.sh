'use strict';

import React, { PropTypes } from 'react';

class Repository extends React.Component {
	render() {
		return (
			<li>
				{title}
			</li>
		);
	}
}

Repository.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired
};

export default Repository;
