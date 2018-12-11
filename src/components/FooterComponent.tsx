import React from 'react';

import './FooterComponent.scss';

export class FooterComponent extends React.Component {
	public render() {
		return (
			<div
				id="footer"
			>
				<div
					id="footer_section_a"
				>
					<p>
						<a
							href="https://twitter.com/sapphire_dev"
						>
							{'@sapphire_dev'}
						</a>
					</p>
					<p>
						<a
							href="https://github.com/sapphiredev/sapphire.sh"
						>
							<i
								className="icon icon_github"
							/>
						</a>
					</p>
				</div>
				<div
					id="footer_section_b"
				>
					<p>
						{'Powered by '}
						<a
							href="https://pages.github.com/"
						>
							{'GitHub Pages'}
						</a>
					</p>
				</div>
			</div>
		);
	}
}
