import * as types from './../actions/types';
import Constants from './../constants';
import {isEmpty} from './../utils';

// This is useful to apply the discount rules and get the revised price
// based on discount rules
function calculateLineItemAmount(lineItem, discounts, customer) {
	const total = lineItem.quantity * lineItem.price;
	if (isEmpty(customer)) {
		lineItem.amount = total;
	} else {
		const discountsByCustomer = discounts[customer.id];

		if (discountsByCustomer) {
			let amount = 0;
			// This flag is useful to find out whether any discount available or not
			let isDiscountAvailable = false;
			// Iterate through the discounts to apply the rules if discount available
			discountsByCustomer.forEach((discount) => {
				if (discount.planId !== lineItem.id) return;
				// Once the code execution comes here, it depicts that the discount is available
				isDiscountAvailable = true;
				// Check whether the discount is applicable for the quanitity selected by the user
				if (lineItem.quantity >= discount.minItems) {
					let remaningAmount = 0;
					let quantity = lineItem.quantity;
					// Check whether the rule is applicable only for divisible counts like
					// if 3 for 2 is avaliable but the user choosen 7 items, then for 6 items the cost of 4 is applicable
					// but for the remaining 1 item the original price without discount is applicable
					if (discount.isClustered) {
						const remaning = quantity % discount.minItems;
						if (remaning !== 0) {
							remaningAmount = remaning * lineItem.price;
							quantity = quantity - remaning;
						}
					}
					lineItem.amount = total * discount.discountRate + remaningAmount;
				} else {
					lineItem.amount = total;
				}
			});

			// If discount is not available for this plan, then calculate the amount normally
			if (!isDiscountAvailable) {
				lineItem.amount = total;
			}
		} else {
			lineItem.amount = total;
		}
		
	}
}

export default function ChooseProductReducer(state = {
	customer: {},
	plans: [],
	discounts: [],
	cart: [],
	customers: [],
}, action) {
	switch(action.type) {
		case types.ON_CHANGE_CUSTOMER:
			return Object.assign({}, state, {
				customer: action.customer,
				cart: state.cart.map((item) => {
					calculateLineItemAmount(item, state.discounts, action.customer);
					return item;
				}),
			});
		case types.ON_QUANTITY_CHANGED:
			return Object.assign({}, state, {
				plans: state.plans.map((plan) => {
					if (plan.id === action.plan.id) {
						plan.quantity = action.value;
					}
					return plan;
				}),
			});
		case types.ADD_TO_CART:
			let isPlanAlreadyAvailable = false;
			let cart = state.cart.map((each) => {
				if (each.id === action.plan.id) {
					isPlanAlreadyAvailable = true;
					each.quantity = parseInt(each.quantity) + parseInt(action.plan.quantity);
				}
				calculateLineItemAmount(each, state.discounts, state.customer);
				return each;
			});
			if (!isPlanAlreadyAvailable) {
				calculateLineItemAmount(action.plan, state.discounts, state.customer);
				cart.push(Object.assign({}, action.plan));
			}
			return Object.assign({}, state, {
				cart,
			});
		case types.RECEIVED_CUSTOMERS:
			return Object.assign({}, state, {
				customers: action.customers,
			});
		case types.RECEIVED_PLANS:
			return Object.assign({}, state, {
				plans: action.plans.map((plan) => {
					plan.quantity = 1;
					return plan;
				}),
			});
		case types.RECEIVED_DISCOUNTS:
			return Object.assign({}, state, {
				discounts: action.discounts,
			});
		default:
		return state;
	}
}