import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AppContainer from './../containers/AppContainer';

export default class Routes extends Component {
	render() {
		return (
			<div className="routes">
				<Router base="/">
					<Switch>
						<Route path="/" component={AppContainer} />
					</Switch>
				</Router>
			</div>
		);
	}
}