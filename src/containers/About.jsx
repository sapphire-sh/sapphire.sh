'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import RepositoryList from './RepositoryList';

class About extends Component {
	render() {
		return(
			<div>
				<h2>about</h2>
				<h3>sapphire</h3>
				<h4>contacts</h4>
				<ul>
					<li><a href="mailto:info@sapphire.sh">info@sapphire.sh</a></li>
					<li><a href="https://twitter.com/sapphire_dev">@sapphire_dev</a></li>
					<li><a href="https://keybase.io/sapphire">keybase.io/sapphire</a></li>
				</ul>
				<h4>projects</h4>
				<RepositoryList />
			</div>
		);
	}
}

export default connect()(About);
