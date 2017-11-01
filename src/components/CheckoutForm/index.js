import React from 'react';
import PropTypes from 'prop-types';
import './CheckoutForm.scss';

const CheckoutForm = (props) => {

	const onClickCheckout = () => {
		alert('The total you have to pay is $' + (props.totalPrice/100));
	};

	return (
		<div className="checkout-form">
			<h3 className="checkout-form__title">Plans Added</h3>
			<div className="checkout-form__header">
				<div className="checkout-form__header__plan-name">Plan Name</div>
				<div className="checkout-form__header__quantity">Quantity</div>
				<div className="checkout-form__header__price">Price</div>
			</div>
			<div className="checkout-form__list">
				{
					props.cart.map((item, index) => {
						return (
							<div key={index} className="checkout-form__list__line-item">
								<div className="checkout-form__list__line-item__name">{item.name}</div>
								<div className="checkout-form__list__line-item__quantity">{item.quantity}</div>
								<div className="checkout-form__list__line-item__quantity">${(item.amount/100).toFixed(2)}</div>
							</div>
						);
					})
				}
				{
					props.cart.length > 0 ?
					<div className="checkout-form__list__line-item">
						<div className="checkout-form__list__line-item__name">Total</div>
						<div className="checkout-form__list__line-item__quantity">{props.totalQuantity}</div>
						<div className="checkout-form__list__line-item__quantity">${(props.totalPrice/100).toFixed(2)}</div>
					</div> :
					<div className="checkout-form__list__no-plans">No plans in the cart</div>
				}
			</div>
			{
				props.cart.length > 0 &&
				<div className="checkout-form__btn-wrapper">
					<button
						className="checkout-form__btn-wrapper__button"
						onClick={onClickCheckout}
					>Buy Now</button>
				</div>
			}
		</div>
	);
};

CheckoutForm.defaultProps = {
	cart: [],
	totalQuantity: 0,
	totalPrice: 0,
};

CheckoutForm.propTypes = {
	cart: PropTypes.array,
	totalQuantity: PropTypes.number,
	totalPrice: PropTypes.number,
};

export default CheckoutForm;
