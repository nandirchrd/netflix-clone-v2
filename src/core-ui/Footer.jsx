import React, { useContext } from 'react';
import Select from '../components/Select';
import NotFoundContext from '../context/NotFoundContext';

const Footer = () => {
	const { value } = useContext(NotFoundContext);

	if (value) return null;
	return (
		<footer className='bg-black text-grey border-top border-dark border-line py-5'>
			<div className='container-md col-md-8 mx-auto'>
				<p>Questions? Call 007-803-321-2130</p>
				<div className='row'>
					<p className='small col-6 col-sm-4 col-lg-3 text-nowrap'>
						FAQ
					</p>
					<p className='small col-6 col-sm-4 col-lg-3 text-nowrap'>
						Help Center
					</p>
					<p className='small col-6 col-sm-4 col-lg-3 text-nowrap'>
						Account
					</p>
					<p className='small col-6 col-sm-4 col-lg-3 text-nowrap'>
						Media Center
					</p>
					<p className='small col-6 col-sm-4 col-lg-3 text-nowrap'>
						Investor Relations
					</p>
					<p className='small col-6 col-sm-4 col-lg-3 text-nowrap'>
						Jobs
					</p>
					<p className='small col-6 col-sm-4 col-lg-3 text-nowrap'>
						Redeem Gift Cards
					</p>
					<p className='small col-6 col-sm-4 col-lg-3 text-nowrap'>
						Buy Gift Cards
					</p>
					<p className='small col-6 col-sm-4 col-lg-3 text-nowrap'>
						Ways to Watch
					</p>
					<p className='small col-6 col-sm-4 col-lg-3 text-nowrap'>
						Term of Use
					</p>
					<p className='small col-6 col-sm-4 col-lg-3 text-nowrap'>
						Privacies
					</p>
					<p className='small col-6 col-sm-4 col-lg-3 text-nowrap'>
						Cookie Prefferences
					</p>
					<p className='small col-6 col-sm-4 col-lg-3 text-nowrap'>
						Corporate Information
					</p>
					<p className='small col-6 col-sm-4 col-lg-3 text-nowrap'>
						Contact Use
					</p>
					<p className='small col-6 col-sm-4 col-lg-3 text-nowrap'>
						Speed Test
					</p>
					<p className='small col-6 col-sm-4 col-lg-3 text-nowrap'>
						Legal Notices
					</p>
					<p className='small col-6 col-sm-4 col-lg-3 text-nowrap'>
						Only on Netflix
					</p>
				</div>
				<span className='col-6 col-sm-5 col-lg-3 d-block'>
					<Select className='form-select-lg py-1 px-2' />
				</span>
				<p className='small mt-2'>Netflix Indonesia</p>
				<p className='small text-center'>Made with React & Bootstrap</p>
			</div>
		</footer>
	);
};

export default Footer;
