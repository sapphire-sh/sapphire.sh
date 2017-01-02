'use strict';

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { fetchArticle } from '../actions';

import marked from 'marked';

class About extends React.Component {
	componentWillMount() {
		const { dispatch } = this.props;

		dispatch(fetchArticle('about.md'));
	}

	render() {
		const { article } = this.props;

		return(
			<div dangerouslySetInnerHTML={{__html: marked(article)}} />
		);
	}
}

About.propTypes = {
	article: PropTypes.string.isRequired,
	dispatch: PropTypes.func.isRequired
};

export default connect((state) => {
	const { article } = state.article;

	if(article === undefined) {
		return {
			article: ''
		};
	}
	else {
		return {
			article
		};
	}
})(About);
