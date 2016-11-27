'use strict';

import React from 'react';

class Footer extends React.Component {
	render() {
		return (
			<div className="ui vertical footer segment">
				<div className="ui center aligned text container">
					<div className="ui section divider"></div>
					<div className="ui stackable divided grid">
						<div className="seven wide column">
							<h4 className="ui header">categories</h4>
							<p>hello world</p>
						</div>
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
					</div>
					<div className="ui section divider"></div>
				</div>
			</div>
		);
	}
}

export default Footer;
