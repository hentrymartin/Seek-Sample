import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlansList from './index';

configure({ adapter: new Adapter() });

test('Test PlansList Component', () => {
	const plans = [
		{
			"id": "Classic",
			"name": "Classic Ad",
			"price": 26999,
			"features": ["Basic"]
		},
		{
			"id": "Standout",
			"name": "Standout Ad",
			"price": 32299,
			"features": ["Basic", "Use Logo", "Longer Presentation text"]
		},
		{
			"id": "Premium",
			"name": "Premium Ad",
			"price": 39499,
			"features": ["Basic", "Use Logo", "Longer Presentation text", "Higher Visibility"]
		}
	];

	const customer = {
		"name": "Unilever",
		"id": "unilever"
	};

	const discounts = {
		"unilever": [
			{
				"display": "Gets a “3 for 2” deal on Classic Ads",
				"discountRate": 0.6666666666666666,
				"minItems": 3,
				"isClustered": true,
				"planId": "Classic"
			}
		]
	};

  const component = mount(
  	<PlansList
  		plans={plans}
  		customer={customer}
  		discounts={discounts}
  	/>
	);
	console.log();
	// expect(component.find('.plans-list__plan').length).toEqual(3);
});