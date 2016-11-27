'use strict';

import React from 'react';
import { Link } from 'react-router';

import Header from './Header';
import Footer from './Footer';

import 'semantic-ui-css/semantic.min.css';
import '../styles/App.css';

class App extends React.Component {
	render() {
		return (
			<div>
				<Header />

				<div className="ui main text container">
					<div className="ui piled segment">
						{this.props.children}
					</div>
				</div>

				<Footer />
			</div>
		);
	}
}

export default App;
