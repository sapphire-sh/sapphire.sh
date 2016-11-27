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
					<div className="ui simple dropdown item">
						articles
						<i className="dropdown icon" />
						<div className="menu">
							<a className="item" href="#">general</a>
							<a className="item" href="#">dev</a>
							<a className="item" href="#">astronomy</a>
							<div className="divider"></div>
							<Link to="/archives" className="item">archives</Link>
						</div>
					</div>
					<Link to="/about" className="item">about</Link>
				</div>
			</div>
		);
	}
}

export default Header;
