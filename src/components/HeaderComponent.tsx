import React from 'react';

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
						href="/"
					>
						{'sapphire.sh'}
					</a>
				</div>
				<div
					id="header_section_b"
				>
					<a
						href="/about"
					>
						{'about'}
					</a>
					<a
						href="/archives"
					>
						{'archives'}
					</a>
				</div>
			</div>
		);
	}
}
