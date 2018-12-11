import React from 'react';

import {
	ArticleListComponent,
	HeaderComponent,
} from '~/components';

import './MainComponent.scss';

export class MainComponent extends React.Component {
	public render() {
		return (
			<div
				id="main"
			>
				<HeaderComponent />
				<ArticleListComponent />
			</div>
		);
	}
}
