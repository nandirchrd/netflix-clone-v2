import React from 'react';

const Select = ({ className }) => {
	return (
		<select className={`form-select form-select-sm ${className}`}>
			<option className='small' selected value='english'>
				English
			</option>
			<option className='small' value='indonesia'>
				Indonesia
			</option>
		</select>
	);
};

export default Select;
