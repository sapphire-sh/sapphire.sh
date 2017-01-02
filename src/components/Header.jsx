'use strict';

import React from 'react';
import { Link } from 'react-router';

import '../styles/Header.css';

class Header extends React.Component {
	render() {
		return (
			<div id="header" className="ui fixed menu">
				<div className="ui text container">
					<Link to="/" className="header item">sapphire.sh</Link>
					<Link to="/articles" className="item">articles</Link>
					<Link to="/about" className="item">about</Link>
				</div>
			</div>
		);
	}
}

export default Header;
