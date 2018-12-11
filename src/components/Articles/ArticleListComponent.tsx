import React from 'react';

import {
	ArticleComponent,
} from '../../components';

export class ArticleListComponent extends React.Component {
	public render() {
		return (
			<div>
				{__article_ids.map((e) => {
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
