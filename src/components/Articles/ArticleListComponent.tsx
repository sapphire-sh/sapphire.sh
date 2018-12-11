import React from 'react';

import {
	ArticleComponent,
} from '~/components';

interface ComponentProps {
	pages: string[];
}

export class ArticleListComponent extends React.Component<ComponentProps> {
	public render() {
		const {
			pages,
		} = this.props;

		return (
			<div>
				{pages.filter((page) => {
					return page.startsWith('articles/');
				}).reverse().map((e, i, a) => {
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
