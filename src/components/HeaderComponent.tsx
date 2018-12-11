import React from 'react';

import {
	getBaseURL,
} from '~/helpers';

import './HeaderComponent.scss';

export class HeaderComponent extends React.Component {
	public render() {
		return (
			<div
				id="header"
			>
				<div
					id="header_section_a"
				>
					<a
						href={getBaseURL()}
					>
						{'sapphire.sh'}
					</a>
				</div>
				<div
					id="header_section_b"
				>
					<a
						href={`${getBaseURL()}/about`}
					>
						{'about'}
					</a>
					<a
						href={`${getBaseURL()}/archives`}
					>
						{'archives'}
					</a>
				</div>
			</div>
		);
	}
}
