import * as types from './types';
import Constants from './../constants';

export function onCustomerChanged(customer) {
	return {
		type: types.ON_CHANGE_CUSTOMER,
		customer,
	};
}

export function onQuantityChanged(value, plan) {
	return {
		type: types.ON_QUANTITY_CHANGED,
		value,
		plan,
	};
}

export function addToCart(plan) {
	return {
		type: types.ADD_TO_CART,
		plan,
	};
}

export function receivedCustomers(customers) {
	return {
		type: types.RECEIVED_CUSTOMERS,
		customers,
	};
}

export function receivedPlans(plans) {
	return {
		type: types.RECEIVED_PLANS,
		plans,
	};
}

export function receivedDiscounts(discounts) {
	return {
		type: types.RECEIVED_DISCOUNTS,
		discounts,
	};
}

export function getCustomers() {
	return (dispatch) => {
		const options = {
		  method: 'GET',
		  headers: {
		    'Content-Type': 'application/json',
		  },
		  mode: 'cors',
		  cache: 'default',
		};

		fetch(Constants.API_URL + 'customers', options)
		.then(res => res.json())
		.then((json) => {
			dispatch(receivedCustomers(json));
		});
	};
}

export function getPlans() {
	return (dispatch) => {
		const options = {
		  method: 'GET',
		  headers: {
		    'Content-Type': 'application/json',
		  },
		  mode: 'cors',
		  cache: 'default',
		};

		fetch(Constants.API_URL + 'plans', options)
		.then(res => res.json())
		.then((json) => {
			dispatch(receivedPlans(json));
		});
	};
}

export function getDiscounts() {
	return (dispatch) => {
		const options = {
		  method: 'GET',
		  headers: {
		    'Content-Type': 'application/json',
		  },
		  mode: 'cors',
		  cache: 'default',
		};

		fetch(Constants.API_URL + 'discounts', options)
		.then(res => res.json())
		.then((json) => {
			dispatch(receivedDiscounts(json));
		});
	};
}
