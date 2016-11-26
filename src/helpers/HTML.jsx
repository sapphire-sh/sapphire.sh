'use strict';

import React from 'react';
import { renderToString } from 'react-dom/server';

class HTML extends React.Component {
	render() {
		const { assets, component } = this.props;
		const content = component ? renderToString(component) : '';

		return (
			<html>
				<head>
					<title>sapphire.sh</title>
				</head>
				<body>
					<div id="app" dangerouslySetInnerHTML={{__html: content}} />
					<script src={assets.javascript.main} />
				</body>
			</html>
		)
	}
}

export default HTML;
