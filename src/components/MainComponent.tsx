import React from 'react';

import {
	ArticleComponent,
} from '../components';

import '../styles/MainComponent.scss';

export class MainComponent extends React.Component {
	public render() {
		return (
			<div>
				<div>main</div>
				<ArticleComponent
					id={'0001'}
				/>
				<ArticleComponent
					id={'0002'}
				/>
			</div>
		)
	}
}
