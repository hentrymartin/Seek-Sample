import React from 'react';
import Select from 'react-select';
import './Select.scss';
import PropTypes from 'prop-types';

const SelectCheckout = (props) => {
	return (
		<div className="select-co">
			<label>{props.label}</label>
			<Select
		 	 	name={props.name}
			  value={props.value}
			  labelKey={props.labelKey}
			  placeholder={props.placeholder}
			  options={props.options}
			  onChange={props.onChange}
			  clearable={false}
			/>
		</div>
	);
};

SelectCheckout.defaultProps = {
	name: '',
	value: '',
	lableKey: '',
	placehoder: 'Select',
	options: [],
	onChange: () => {},
	label: 'Select',
};

SelectCheckout.propTypes = {
	name: PropTypes.string,
	value: PropTypes.string,
	lableKey: PropTypes.string,
	placehoder: PropTypes.string,
	options: PropTypes.array,
	onChange: PropTypes.func,
	label: PropTypes.string,
};

export default SelectCheckout;
