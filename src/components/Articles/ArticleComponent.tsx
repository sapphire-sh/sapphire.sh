import React from 'react';

import ReactMarkdown from 'react-markdown';

interface ComponentProps {
	id: string;
}

interface ComponentState {
	text: string;
}

export class ArticleComponent extends React.Component<ComponentProps, ComponentState> {
	constructor(props: ComponentProps) {
		super(props);

		this.state = {
			'text': '',
		};
	}

	public async componentDidMount() {
		const {
			id,
		} = this.props;

		const text = (await import(`../../../articles/${id}/index.md`)).default;

		this.setState({
			'text': text,
		});
	}

	public render() {
		const {
			text,
		} = this.state;

		return (
			<ReactMarkdown
				source={text}
			/>
		);
	}
}
