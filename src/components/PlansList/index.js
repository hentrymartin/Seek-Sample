import React from 'react';
import {hashCode} from './../../utils';
import Constants from './../../constants';
import './PlansList.scss';

const PlansList = (props) => {
	console.log(props.customer);
	const discountsBasedOnPlan = props.customer && props.discounts[props.customer.id] || [];

	const onQuantityChanged = (plan, event) => {
		props.onQuantityChanged(event.target.value, plan);
	};

	return (
		<section className="plans-list">
			<h3 className="plans-list__title">List Of Plans</h3>
			<div className="plans-list__list">
				{
					props.plans.map((plan) => {
						const style = {
							color: hashCode(plan.name),
						};
						const discountsForThisPlan = discountsBasedOnPlan && discountsBasedOnPlan.filter(each => each.planId === plan.id) || [];
						console.log(discountsForThisPlan, plan.id);
						return (
							<div className="plans-list__plan" style={style}>
								<div className="plans-list__plan__name">
									{plan.name}
								</div>
								<div className="plans-list__plan__features">
									<div className="plans-list__plan__features__title">Features</div>
									{
										plan.features.map(feature => <div>{feature}</div>)
									}
								</div>
								<div className="plans-list__plan__discounts">
									{
										discountsForThisPlan.length === 0 &&
										<div>No Discounts Available for this customer</div>
									}
									{
										discountsForThisPlan.map((discount) => {
											return (
												<div className="plans-list__plan__discounts__discount">
													{discount.display}
												</div>
											);
										})
									}
								</div>
								<div className="plans-list__plan__quantity">
									<input
										placeholder="Enter Quantity"
										onChange={onQuantityChanged.bind(this, plan)}
										value={plan.quantity}
										type="number"
									/>
								</div>

								<div className="plans-list__plan__price">
									${plan.price/100}/quantity
								</div>
								<div className="plans-list__plan__btn-wrapper">
									<button
										className="plans-list__plan__btn-wrapper__add-plan"
										onClick={props.addToCart.bind(this, plan)}
									>
										Add to Cart
									</button>
								</div>
							</div>
						);
					})
				}
			</div>
		</section>
	);
};

export default PlansList;
