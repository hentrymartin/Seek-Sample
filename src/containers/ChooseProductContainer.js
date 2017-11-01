import React from 'react';
import { connect } from 'react-redux';
import {
	onCustomerChanged,
	onQuantityChanged,
	addToCart,
	getPlans,
	getCustomers,
	getDiscounts,
} from './../actions';
import ChooseProduct from './../components/ChooseProduct';

const mapStateToProps = (state) => {
	return {
		customer: state.ChooseProductReducer.customer,
		customers: state.ChooseProductReducer.customers,
		plans: state.ChooseProductReducer.plans,
		cart: state.ChooseProductReducer.cart,
		discounts: state.ChooseProductReducer.discounts,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onCustomerChanged: (customer) => {
			dispatch(onCustomerChanged(customer));
		},
		onQuantityChanged: (value, plan) => {
			dispatch(onQuantityChanged(value, plan));
		},
		addToCart: (plan) => {
			dispatch(addToCart(plan));
		},
		getPlans: () => {
			getPlans()(dispatch);
		},
		getCustomers: () => {
			getCustomers()(dispatch);
		},
		getDiscounts: () => {
			getDiscounts()(dispatch);
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ChooseProduct);