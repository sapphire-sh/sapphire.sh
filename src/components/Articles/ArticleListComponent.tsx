import React from 'react';

import {
	ArticleComponent,
} from '~/components';

export class ArticleListComponent extends React.Component {
	public render() {
		return (
			<div>
				{__pages.filter((page) => {
					return page.startsWith('articles');
				}).map((e) => {
					return (
						<ArticleComponent
							key={e}
							id={e}
						/>
					);
				})}
			</div>
		);
	}
}
