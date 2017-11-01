import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './index';

configure({ adapter: new Adapter() });

test('Test Header Component', () => {
  const component = mount(
  	<Header />
	);
	expect(component.find('header').text()).toEqual("Checkout Plan");
});