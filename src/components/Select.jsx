import React from 'react';

const Select = ({ className }) => {
	return (
		<select className={`form-select form-select-sm ${className}`}>
			<option className='' value='english'>
				English
			</option>
			<option className='' value='indonesia'>
				Indonesia
			</option>
		</select>
	);
};

export default Select;
