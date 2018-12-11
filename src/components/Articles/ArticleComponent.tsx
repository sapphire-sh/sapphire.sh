import React from 'react';

import ReactMarkdown from 'react-markdown';
import { getBaseURL } from '~/helpers';

interface ComponentProps {
	id: string;
}

interface ComponentState {
	text: string;
}

export class ArticleComponent extends React.Component<ComponentProps, ComponentState> {
	constructor(props: ComponentProps) {
		super(props);

		const {
			id,
		} = this.props;

		const text = (require(`${__pages_path}/${id}/index.md`));

		this.state = {
			'text': text,
		};
	}

	public render() {
		const {
			id,
		} = this.props;
		const {
			text,
		} = this.state;

		return (
			<div>
				<a
					href={`${getBaseURL()}/${id}`}
				>
					{'1234'}
				</a>
				<ReactMarkdown
					source={text}
				/>
			</div>
		);
	}
}
