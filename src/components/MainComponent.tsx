import React from 'react';

import {
	ArticleListComponent,
} from '~/components';

import './MainComponent.scss';

interface ComponentProps {
	pages: string[];
}

export class MainComponent extends React.Component<ComponentProps> {
	public render() {
		return (
			<div
				id="main"
			>
				<ArticleListComponent
					{...this.props}
				/>
			</div>
		);
	}
}
