import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Logo from '../components/Logo';
import Select from '../components/Select';
import NotFoundContext from '../context/NotFoundContext';

const Navbar = () => {
	const { value } = useContext(NotFoundContext);
	return (
		<nav
			className={`navbar navbar-expand position-absolute w-100 z-index-1 ${
				value && 'bg-black'
			}`}>
			<div className='container-md'>
				<div className='navbar-brand logo'>
					<Logo />
				</div>
				{!value && (
					<div className='d-flex'>
						<Select className='me-2 d-none d-md-block' />
						<Link to='/home'>
							<Button type='sm'>Sign In</Button>
						</Link>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
