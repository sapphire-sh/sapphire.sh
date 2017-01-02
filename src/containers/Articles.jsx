'use strict';

import fs from 'fs';
import path from 'path';

import React, { PropTypes } from 'react';

import marked from 'marked';

class Articles extends React.Component {
	constructor(props) {
		super(props);

		this.setState({
			md: fs.readFileSync(path.resolve(__dirname, '../../articles/about.md'))
		});
	}

	render() {
		return(
			<div dangerouslySetInnerHTML={{__html: marked(this.props.md)}} />
		);
	}
}

export default About;
