import React from 'react';

import {
	ArticleComponent,
} from '~/components';

export class ArticleListComponent extends React.Component {
	public render() {
		return (
			<div>
				{__pages.filter((page) => {
					return page.startsWith('articles/');
				}).map((e, i, a) => {
					return (
						<ArticleComponent
							key={e}
							id={e}
							isLast={i === a.length - 1}
						/>
					);
				})}
			</div>
		);
	}
}
