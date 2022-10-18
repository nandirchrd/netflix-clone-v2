import React, { useEffect, useState } from 'react';
import truncate from '../utils/truncate';
import Movies from '../components/Movies';
import { tmdbImage } from '../constants/url';
import { getTrending, getMovies, getTrailer } from '../services/movies';

const HomePage = () => {
	const [hero, setHero] = useState({});
	const [trailer, setTrailer] = useState()
	const [movies, setMovies] = useState({
		actions: [],
		comedies: [],
		documentaries: [],
		horrors: [],
		netflix: [],
		romances: [],
		trendings: [],
	});
	const handleHero = (movie)=>{
		setHero(movie)
		setTrailer(null)
	}
	const handleTrailer = async (id) => {
		if(id){
			const {data: {results}} = await getTrailer(id)
			if(results.length) return setTrailer(`https://www.youtube.com/embed/${results[0].key}?controls=1&rel=0`)
			alert("Sorry we dont have the trailer about this movie")
		}
	}
	console.log(trailer);
	useEffect(() => {
		async function fetchData() {
			const trendings = await getTrending();
			const actions = await getMovies({ category: 'actions' });
			const comedies = await getMovies({ category: 'comedies' });
			const documentaries = await getMovies({
				category: 'documentaries',
			});
			const horrors = await getMovies({ category: 'horrors' });
			const netflix = await getMovies({ category: 'netflix' });
			const romances = await getMovies({ category: 'romances' });
			setHero(trendings.data.results[0]);

			// console.log(topRates);
			setMovies({
				actions: actions.data.results,
				comedies: comedies.data.results,
				documentaries: documentaries.data.results,
				horrors: horrors.data.results,
				netflix: netflix.data.results,
				romances: romances.data.results,
				trendings: trendings.data.results,
			});
		}
		fetchData();
	}, []);
	return (
		<main>
			<section
				className='hero text-white d-flex align-items-center'
				style={{
					backgroundImage: `url(${hero.backdrop_path && tmdbImage + hero.backdrop_path})`,
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'contain',
					boxShadow:
						'inset 40vw 0px 60px 0px rgba(0,0,0,0.8), inset 0px 0px 10px rgba(0,0,0,0.4), inset 0 10px 20px #000, inset 0 -50px 150px #000, inset 0 -5px 10px #000',
				}}>
				<div className='container-md px-4 mt-4'>
					<div className='col-lg-5'>
						<h1>{hero.name || hero.title}</h1>
						<p className=''>{truncate(hero.overview)}</p>
						<div>
							<button className='btn btn-primary' onClick={()=>handleTrailer(hero.id)}>Play</button>
						</div>
					</div>
				</div>
			</section>
			{/* IFRAME */}
			{trailer &&
			<section>
				<div className='container-md ratio ratio-16x9'>
					<iframe title={hero.title || hero.original_title} src={trailer}/>	
				</div>
			</section>}
			<section className='py-4'>
				<div className='container-md'>
					<Movies onMovieClicked={handleHero} title='Trendings' movies={movies.trendings} />
					<Movies onMovieClicked={handleHero} title='Netflix Original' movies={movies.netflix} />
					<Movies onMovieClicked={handleHero} title='Actions' movies={movies.actions} />
					<Movies onMovieClicked={handleHero} title='Comedies' movies={movies.comedies} />
					<Movies onMovieClicked={handleHero}
						title='Documentaries'
						movies={movies.documentaries}
					/>
					<Movies onMovieClicked={handleHero} title='Horrors' movies={movies.horrors} />
					<Movies onMovieClicked={handleHero} title='Romances' movies={movies.romances} />
				</div>
			</section>
		</main>
	);
};

export default HomePage;
