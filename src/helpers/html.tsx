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
						href="https://fonts.googleapis.com/css?family=Lato"
						rel="stylesheet"
					/>
					<link
						rel="stylesheet"
						href={`${getBaseURL()}/dist/styles.css`}
					/>
					<script
						async={true}
						src={'https://www.googletagmanager.com/gtag/js?id=UA-85061946-1'}
					/>
					<script
						dangerouslySetInnerHTML={{
							'__html': [
								`window.dataLayer = window.dataLayer || [];`,
								`function gtag(){dataLayer.push(arguments);}`,
								`gtag('js', new Date());`,
								`gtag('config', 'UA-85061946-1');`,
							].join(';'),
						}}
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
