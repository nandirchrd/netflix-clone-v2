import React from 'react';
import { tmdbImage } from '../constants/url';

const Movies = ({ title, movies, onMovieClicked }) => {
	return (
		<div className='category text-white position-relative'>
			<h6 className='title'>
				{title}
			</h6>
			<div className='movies d-flex overflow-auto p-1 mb-4'>
			{movies.map(
				movie => <div key={movie.id} onClick={()=>onMovieClicked(movie)}
					className='bg-primary me-2 d-flex align-items-end rounded position-relative overflow-hidden'
					style={{
						minWidth: '130px',
						maxHeight: '200px',
					}}>
					<img
						className='movie-poster position-absolute start-0 w-100 top-0 h-100 z-1 pointer'
						src={tmdbImage + movie.poster_path}
						alt='img'
					/>
				</div>
			)}
			</div>
		</div>
	);
};

export default Movies;
