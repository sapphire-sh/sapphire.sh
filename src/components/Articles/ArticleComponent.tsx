import React from 'react';

import ReactMarkdown from 'react-markdown';

import {
	ArticleBorderComponent,
} from '~/components';

import {
	getBaseURL,
} from '~/helpers';

import './ArticleComponent.scss';

interface ComponentProps {
	id: string;
	isLast: boolean;
}

interface ComponentState {
	metadata: any;
	markdown: string;
}

export class ArticleComponent extends React.Component<ComponentProps, ComponentState> {
	constructor(props: ComponentProps) {
		super(props);

		const {
			id,
		} = this.props;

		const markdown = require(`${__pages_path}/${id}/index.md`);
		const metadata = require(`${__pages_path}/${id}/metadata.json`);

		this.state = {
			'metadata': metadata,
			'markdown': markdown,
		};
	}

	public render() {
		const {
			id,
			isLast,
		} = this.props;

		const {
			metadata,
			markdown,
		} = this.state;

		return (
			<React.Fragment>
				<div
					className="article"
				>
					<div
						className="article_header"
					>
						<div
							className="article_title"
						>
							<a
								href={`${getBaseURL()}/${id}`}
							>
								{metadata.title}
							</a>
						</div>
						<div
							className="article_metadata"
						>
							<div
								className="article_date"
							>
								{metadata.date}
							</div>
							<div
								className="article_tags"
							>
								{metadata.tags.map((tag: string) => {
									return (
										<a
											key={tag}
											href={`${getBaseURL()}/tags/${tag}`}
										>
											{`#${tag}`}
										</a>
									);
								})}
							</div>
						</div>
					</div>
					<div
						className="article_content"
					>
						<ReactMarkdown
							source={markdown}
						/>
					</div>
				</div>

				{(() => {
					if(isLast === true) {
						return null;
					}
					return (
						<ArticleBorderComponent />
					);
				})()}
			</React.Fragment>
		);
	}
}
