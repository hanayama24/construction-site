import React, { Component } from 'react';
import { IntlProvider } from 'react-intl';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { default as bemCssModules } from 'bem-css-modules';
import { createRootStore, IRootStore } from './stores/createRootStore';
import RootContainer from './containers/RootContainer';

// Setup CSS injection order
import { JssProvider } from 'react-jss';
import { create, GenerateClassName, JSS } from 'jss';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';

class NameApp extends Component {
	rootStore: IRootStore = createRootStore();

	private readonly classNameGenerator: GenerateClassName = createGenerateClassName();
	private readonly jssInstance: JSS = create({
		...jssPreset(),
		insertionPoint: 'jss-insertion-point',
	});

	render(): JSX.Element {
		bemCssModules.setSettings({
			modifierDelimiter: '--',
			throwOnError: true,
		});

		return (
			<Provider {...this.rootStore}>
				<IntlProvider locale="en">
					<JssProvider jss={this.jssInstance} generateClassName={this.classNameGenerator}>
						<Router>
							<RootContainer />
						</Router>
					</JssProvider>
				</IntlProvider>
			</Provider>
		);
	}
}

export default NameApp;
