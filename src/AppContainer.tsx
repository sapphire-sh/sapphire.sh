import React from 'react';

import {
	withRouter,
	Switch,
	Route,
	RouteComponentProps,
} from 'react-router';

import {
	HeaderComponent,
	FooterComponent,
	MainComponent,
	NotFoundComponent,
	ArticleComponent,
} from '~/components';

import './AppContainer.scss';

type ComponentProps = RouteComponentProps;

class AppComponent extends React.Component<ComponentProps> {
	public render() {
		return (
			<div
				id="app"
			>
				<HeaderComponent />
				<Switch>
					<Route
						exact={true}
						path={'/'}
						component={MainComponent}
					/>
					<Route
						exact={true}
						path="/articles/:id"
						render={(props) => {
							const {
								match,
							} = props;

							return (
								<ArticleComponent
									id={match!.url.replace(/^\//, '')}
									isLast={true}
								/>
							);
						}}
					/>
					<Route
						component={NotFoundComponent}
					/>
				</Switch>
				<FooterComponent />
			</div>
		);
	}
}

export const AppContainer = withRouter(AppComponent);
