'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Header from '../components/Header';
import Footer from '../components/Footer';

import 'semantic-ui-css/semantic.min.css';
import '../styles/App.css';

class App extends Component {
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

export default connect()(App);
