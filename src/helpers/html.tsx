import React from 'react';

import {
	renderToString,
} from 'react-dom/server';

import {
	getBaseURL,
} from '~/helpers';

interface ComponentProps {
	container: JSX.Element;
}

export class HTML extends React.Component<ComponentProps> {
	public render() {
		const {
			container,
		} = this.props;

		return (
			<html>
				<head>
					<title>sapphire.sh</title>
					<meta
						charSet="utf-8"
					/>
					<link
						href="https://fonts.googleapis.com/css?family=Noto+Sans"
						rel="stylesheet"
					/>
					<link
						rel="stylesheet"
						href={`${getBaseURL()}/dist/styles.css`}
					/>
				</head>
				<body>
					<div
						id="app"
						dangerouslySetInnerHTML={{
							'__html': renderToString(container),
						}}
					/>
				</body>
			</html>
		);
	}
}
