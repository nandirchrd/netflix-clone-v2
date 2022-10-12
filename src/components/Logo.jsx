import React from 'react';
import Netflix from '../assets/svg/logo.svg';

const Logo = ({ ...rest }) => {
	return <img src={Netflix} alt='Logo Netflix' {...rest} />;
};

export default Logo;
