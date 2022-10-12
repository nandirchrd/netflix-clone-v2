import React from 'react';
import HeroImage from '../assets/images/bg.jpg';
import TV from '../assets/images/tv.png';
import Mobile from '../assets/images/mobile.jpg';
import Device from '../assets/images/device.png';
import Kids from '../assets/images/kids.png';

const Landing = () => {
	return (
		<main className='text-dark bg-black'>
			{/* WELCOME SECTION */}
			<section
				className='hero text-white d-flex align-items-center'
				style={{
					backgroundImage: `url(${HeroImage})`,
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
					boxShadow:
						'inset 0px 900px 0px rgba(0,0,0,0.4), inset 0 50px 150px #000, inset 0 -50px 150px #000',
				}}>
				<div className='container-md'>
					<div className='py-5 text-center mt-5 row justify-content-center'>
						<div className='col-lg-10 col-xl-8'>
							<h5 className='my-2 text title col-md-10 mx-auto'>
								Unlimited movies, TV shows, and more.
							</h5>
							<p className='my-2 description'>
								Watch anywhere. Cancel anytime.
							</p>
							<p className='my-2 text description col-10 col-md-8 mx-auto'>
								Ready to watch? Enter your email to create or
								restart your membership.
							</p>
							<form className='d-md-flex align-items-center'>
								<input
									className='form-control rounded-0'
									type='text'
									placeholder='Email address'
								/>
								<button className='btn btn-primary my-2 text-nowrap rounded-0'>
									Get Started
								</button>
							</form>
						</div>
					</div>
				</div>
			</section>
			{/* FEATURES SECTION */}
			<section className='bg-black text-white'>
				{/* TV */}
				<div className='border-top border-line border-dark'>
					<div className='container feature row mx-auto align-items-center py-5'>
						<div className='col-lg-7'>
							<h4>Enjoy on your TV.</h4>
							<p className='m-0'>
								Watch on Smart TVs, Playstation, Xbox,
								Chromecast, Apple TV, Blu-ray players, and more.
							</p>
						</div>
						<div className='col-lg-5'>
							<img src={TV} alt='tv' className='w-100' />
						</div>
					</div>
				</div>
				{/* MOBILE */}
				<div className='border-top border-line border-dark'>
					<div className='container feature row mx-auto align-items-center py-5'>
						<div className='col-lg-7 order-lg-2'>
							<h4>Download your shows to watch offline.</h4>
							<p>
								Save your favorites easily and always have
								something to watch.
							</p>
						</div>
						<div className='col-lg-5 order-lg-1'>
							<img src={Mobile} alt='tv' className='w-100' />
						</div>
					</div>
				</div>
				{/* DEVICES */}
				<div className='border-top border-line border-dark'>
					<div className='container feature row mx-auto align-items-center py-5'>
						<div className='col-lg-7'>
							<h4>Watch everywhere.</h4>
							<p>
								Stream unlimited movies and TV shows on your
								phone, tablet, laptop, and TV.
							</p>
						</div>
						<div className='col-lg-5'>
							<img src={Device} alt='tv' className='w-100' />
						</div>
					</div>
				</div>
				{/* KIDS */}
				<div className='border-top border-line border-dark'>
					<div className='container feature row mx-auto align-items-center py-5'>
						<div className='col-lg-7 order-lg-2'>
							<h4>Create profiles for kids.</h4>
							<p>
								Send kids on adventures with their favorite
								characters in a space made just for them—free
								with your membership.
							</p>
						</div>
						<div className='col-lg-5 order-lg-1'>
							<img src={Kids} alt='tv' className='w-100' />
						</div>
					</div>
				</div>
			</section>
			{/* FAQS */}
			<section className='border-top border-line border-dark py-5'>
				<div className='container-md col-md-8 mx-auto text-white'>
					<h5 className='text-center'>Frequently Asked Questions</h5>
					<div
						class='accordion accordion-flush'
						id='accordionFlushExample'>
						<div class='accordion-item'>
							<h2 class='accordion-header' id='flush-headingOne'>
								<button
									class='accordion-button border-bottom border-black collapsed'
									type='button'
									data-bs-toggle='collapse'
									data-bs-target='#flush-collapseOne'
									aria-expanded='false'
									aria-controls='flush-collapseOne'>
									What is Netflix?
								</button>
							</h2>
							<div
								id='flush-collapseOne'
								class='accordion-collapse collapse'
								aria-labelledby='flush-headingOne'
								data-bs-parent='#accordionFlushExample'>
								<div class='accordion-body'>
									Placeholder content for this accordion,
									which is intended to demonstrate the{' '}
									<code>.accordion-flush</code> class. This is
									the first item's accordion body.
								</div>
							</div>
						</div>
						<div class='accordion-item mt-2'>
							<h2 class='accordion-header' id='flush-headingTwo'>
								<button
									class='accordion-button border-bottom border-black collapsed'
									type='button'
									data-bs-toggle='collapse'
									data-bs-target='#flush-collapseTwo'
									aria-expanded='false'
									aria-controls='flush-collapseTwo'>
									How much does Netflix cost?
								</button>
							</h2>
							<div
								id='flush-collapseTwo'
								class='accordion-collapse collapse'
								aria-labelledby='flush-headingTwo'
								data-bs-parent='#accordionFlushExample'>
								<div class='accordion-body'>
									Placeholder content for this accordion,
									which is intended to demonstrate the{' '}
									<code>.accordion-flush</code> class. This is
									the second item's accordion body. Let's
									imagine this being filled with some actual
									content.
								</div>
							</div>
						</div>
						<div class='accordion-item mt-2'>
							<h2
								class='accordion-header'
								id='flush-headingThree'>
								<button
									class='accordion-button border-bottom border-black collapsed'
									type='button'
									data-bs-toggle='collapse'
									data-bs-target='#flush-collapseThree'
									aria-expanded='false'
									aria-controls='flush-collapseThree'>
									Where can I watch?
								</button>
							</h2>
							<div
								id='flush-collapseThree'
								class='accordion-collapse collapse'
								aria-labelledby='flush-headingThree'
								data-bs-parent='#accordionFlushExample'>
								<div class='accordion-body'>
									Placeholder content for this accordion,
									which is intended to demonstrate the{' '}
									<code>.accordion-flush</code> class. This is
									the third item's accordion body. Nothing
									more exciting happening here in terms of
									content, but just filling up the space to
									make it look, at least at first glance, a
									bit more representative of how this would
									look in a real-world application.
								</div>
							</div>
						</div>
						<div class='accordion-item mt-2'>
							<h2 class='accordion-header' id='flush-headingFour'>
								<button
									class='accordion-button border-bottom border-black collapsed'
									type='button'
									data-bs-toggle='collapse'
									data-bs-target='#flush-collapseFour'
									aria-expanded='false'
									aria-controls='flush-collapseFour'>
									How do I cancel?
								</button>
							</h2>
							<div
								id='flush-collapseFour'
								class='accordion-collapse collapse'
								aria-labelledby='flush-headingFour'
								data-bs-parent='#accordionFlushExample'>
								<div class='accordion-body'>
									Placeholder content for this accordion,
									which is intended to demonstrate the{' '}
									<code>.accordion-flush</code> class. This is
									the third item's accordion body. Nothing
									more exciting happening here in terms of
									content, but just filling up the space to
									make it look, at least at first glance, a
									bit more representative of how this would
									look in a real-world application.
								</div>
							</div>
						</div>
						<div class='accordion-item mt-2'>
							<h2 class='accordion-header' id='flush-headingFive'>
								<button
									class='accordion-button border-bottom border-black collapsed'
									type='button'
									data-bs-toggle='collapse'
									data-bs-target='#flush-collapseFive'
									aria-expanded='false'
									aria-controls='flush-collapseFive'>
									What can I watch on Netflix?
								</button>
							</h2>
							<div
								id='flush-collapseFive'
								class='accordion-collapse collapse'
								aria-labelledby='flush-headingFive'
								data-bs-parent='#accordionFlushExample'>
								<div class='accordion-body'>
									Placeholder content for this accordion,
									which is intended to demonstrate the{' '}
									<code>.accordion-flush</code> class. This is
									the third item's accordion body. Nothing
									more exciting happening here in terms of
									content, but just filling up the space to
									make it look, at least at first glance, a
									bit more representative of how this would
									look in a real-world application.
								</div>
							</div>
						</div>
						<div class='accordion-item mt-2'>
							<h2 class='accordion-header' id='flush-headingSix'>
								<button
									class='accordion-button border-bottom border-black collapsed'
									type='button'
									data-bs-toggle='collapse'
									data-bs-target='#flush-collapseSix'
									aria-expanded='false'
									aria-controls='flush-collapseSix'>
									Is Netflix good for kids?
								</button>
							</h2>
							<div
								id='flush-collapseSix'
								class='accordion-collapse collapse'
								aria-labelledby='flush-headingSix'
								data-bs-parent='#accordionFlushExample'>
								<div class='accordion-body'>
									Placeholder content for this accordion,
									which is intended to demonstrate the{' '}
									<code>.accordion-flush</code> class. This is
									the third item's accordion body. Nothing
									more exciting happening here in terms of
									content, but just filling up the space to
									make it look, at least at first glance, a
									bit more representative of how this would
									look in a real-world application.
								</div>
							</div>
						</div>
					</div>
					{/*  */}
					<p className='small mt-2 text-center mb-1'>
						Ready to watch? Enter your email to create or restart
						your membership.
					</p>
					<form className='d-md-flex align-items-center'>
						<input
							className='form-control rounded-0'
							type='text'
							placeholder='Email address'
						/>
						<button className='btn btn-primary d-block my-2 text-nowrap rounded-0 mx-auto'>
							Get Started
						</button>
					</form>
				</div>
			</section>
		</main>
	);
};

export default Landing;
