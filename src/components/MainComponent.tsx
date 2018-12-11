import React from 'react';

import {
	ArticleListComponent,
	HeaderComponent,
} from '~/components';

import '~/styles/MainComponent.scss';

export class MainComponent extends React.Component {
	public render() {
		return (
			<div>
				<HeaderComponent />

				<ArticleListComponent />
			</div>
		);
	}
}
