import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import NotFoundContext from '../context/NotFoundContext';
import { FaHome } from 'react-icons/fa';

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
						{/* <Select className='d-none d-md-block' /> */}
						<Link to='/home'>
							<button className='btn btn-sm text-white d-flex align-items-center'>
								<FaHome className='me-1' />
								Home
							</button>
						</Link>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
