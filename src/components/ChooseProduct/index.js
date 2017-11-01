import React, { Component } from 'react';
import Constants from './../../constants';
import PlansList from './../PlansList';
import CheckoutForm from './../CheckoutForm';
import SelectCheckout from './../Select';
import './ChooseProduct.scss';

class ChooseProduct extends Component {
	constructor(props) {
		super(props);
		this.onCustomerChanged = this.onCustomerChanged.bind(this);
	}

	componentDidMount() {
		this.props.getPlans();
		this.props.getDiscounts();
		this.props.getCustomers();
	}

	onCustomerChanged(val) {
	  this.props.onCustomerChanged(val);
	}
	render() {
		const totalQuantity = this.props.cart.reduce((total, currentValue) => total + currentValue.quantity, 0);
		const totalPrice = this.props.cart.reduce((total, currentValue) => total + currentValue.amount, 0);
		return (
			<div className="choose-product">
				<div className="choose-product__product-list">
					<SelectCheckout
					  name="choose-customer"
					  value={this.props.customer}
					  labelKey="name"
					  placeholder="Choose a customer"
					  options={this.props.customers}
					  onChange={this.onCustomerChanged}
					  label="Choose Customer"
					/>
					<PlansList
						plans={this.props.plans}
						customer={this.props.customer}
						onQuantityChanged={this.props.onQuantityChanged}
						addToCart={this.props.addToCart}
						discounts={this.props.discounts}
					/>
				</div>
				<CheckoutForm
					cart={this.props.cart}
					totalQuantity={totalQuantity}
					totalPrice={totalPrice}
				/>
			</div>
		);
		}
}

export default ChooseProduct;
