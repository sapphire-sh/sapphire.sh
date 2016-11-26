'use strict';

import React from 'react';

class Footer extends React.Component {
	render() {
		return (
			<div className="ui vertical footer segment">
				<div className="ui center aligned container">
					<div className="ui section divider"></div>
					<div className="ui stackable divided grid">
						<div className="three wide column">
							<h4 className="ui header">Group 1</h4>
							<div className="ui link list">
								<a href="#" className="item">Link One</a>
								<a href="#" className="item">Link Two</a>
								<a href="#" className="item">Link Three</a>
								<a href="#" className="item">Link Four</a>
							</div>
						</div>
						<div className="three wide column">
							<h4 className="ui header">Group 2</h4>
							<div className="ui link list">
								<a href="#" className="item">Link One</a>
								<a href="#" className="item">Link Two</a>
								<a href="#" className="item">Link Three</a>
								<a href="#" className="item">Link Four</a>
							</div>
						</div>
						<div className="three wide column">
							<h4 className="ui header">Group 3</h4>
							<div className="ui link list">
								<a href="#" className="item">Link One</a>
								<a href="#" className="item">Link Two</a>
								<a href="#" className="item">Link Three</a>
								<a href="#" className="item">Link Four</a>
							</div>
						</div>
						<div className="seven wide column">
							<h4 className="ui header">Footer Header</h4>
							<p>Extra space for a call to action inside the footer that could help re-engage users.</p>
						</div>
					</div>
					<div className="ui section divider"></div>
				</div>
			</div>
		);
	}
}

export default Footer;
