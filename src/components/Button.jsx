import React from 'react';

const Button = ({ type, children }) => {
	return (
		<button
			className={`text-nowrap ${
				type === 'sm' ? 'btn btn-sm py-0' : 'btn'
			} btn-primary`}>
			{children}
		</button>
	);
};

export default Button;
