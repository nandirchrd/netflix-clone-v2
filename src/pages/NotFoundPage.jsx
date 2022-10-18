import React, { useContext, useEffect } from 'react';
import NotFoundContext from '../context/NotFoundContext';
import NotFound from '../assets/images/not-found.png';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
	const { setValue } = useContext(NotFoundContext);
	useEffect(() => {
		setValue(true);
	}, [setValue]);

	return (
		<main>
			<section
				style={{
					backgroundImage: `url("${NotFound}")`,
					backgroundSize: 'cover',
					width: '100%',
					height: '100vh',
				}}>
				<div className='container-md h-100 text-white d-flex justify-content-center align-items-center text-center'>
					<div className=''>
						<h1 className='fw-bold'>Lost your way?</h1>
						<p className='fw-semibold'>
							Sorry we can't find that page. You'll find a lots to
							explore on the home page.
						</p>
						<Link to='/' onClick={() => setValue(false)}>
							<button className='btn btn-sm btn-primary'>
								Netflix Home
							</button>
						</Link>
						<h4 className='border-start border-2 border-primary text-nowrap w-50 px-2 mx-auto mt-2'>
							Error Code <span className='fw-bold'>NSES-404</span>
						</h4>
					</div>
				</div>
			</section>
		</main>
	);
};

export default NotFoundPage;
