import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Header from './../Header';
import ChooseProduct from './../../containers/ChooseProductContainer';

const AppWrapper = () => {
	return (
		<div className="app-wrapper">
			<Header/>
			<Switch>
				<Route path="/" component={ChooseProduct} />
			</Switch>
		</div>
	);
};

export default AppWrapper;
