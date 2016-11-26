'use strict';

import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
	render() {
		return (
			<div className="ui fixed menu">
				<div className="ui container">
					<Link to="/" className="header item">sapphire.sh</Link>
					<Link to="/" className="item">Home</Link>
					<div className="ui simple dropdown item">
						Dropdown
						<i className="dropdown icon" />
						<div className="menu">
							<a className="item" href="#">Link Item</a>
							<a className="item" href="#">Link Item</a>
							<div className="divider"></div>
							<div className="header">Header Item</div>
							<div className="item">
								<i className="dropdown icon"></i>
								Sub Menu
								<div className="menu">
									<a className="item" href="#">Link Item</a>
									<a className="item" href="#">Link Item</a>
								</div>
							</div>
							<a className="item" href="#">Link Item</a>
						</div>
					</div>
					<Link to="/about" className="item">About</Link>
				</div>
			</div>
		);
	}
}

export default Header;
