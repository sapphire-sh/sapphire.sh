import React from 'react';

import {
	withRouter,
	Switch,
	Route,
	RouteComponentProps,
} from 'react-router';

import {
	HeaderComponent,
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
								/>
							);
						}}
					/>
					<Route
						component={NotFoundComponent}
					/>
				</Switch>
			</div>
		);
	}
}

export const AppContainer = withRouter(AppComponent);
