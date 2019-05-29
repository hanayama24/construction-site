import React, { Component } from 'react';

import { default as RootContainerModuleCss } from './RootContainer.module.css';
import { default as bemCssModules } from 'bem-css-modules';

const blockStyle = bemCssModules(RootContainerModuleCss);

class RootContainer extends Component {
	render(): JSX.Element {
		return (
			<div className={blockStyle()}>
				<header className={blockStyle('header')}>
					<p>
						Add new component to <code>src/components/</code> and save to reload.
					</p>
					<a
						className={blockStyle('link')}
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						React docs
					</a>
				</header>
			</div>
		);
	}
}

export default RootContainer;
