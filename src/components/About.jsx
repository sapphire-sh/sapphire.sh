'use strict';

import React from 'react';

class About extends React.Component {
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
			</div>
		);
	}
}

export default About;
