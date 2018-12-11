import React from 'react';

import {
	ArticleListComponent,
} from '~/components';

import './MainComponent.scss';

export class MainComponent extends React.Component {
	public render() {
		return (
			<div
				id="main"
			>
				<ArticleListComponent />
			</div>
		);
	}
}
