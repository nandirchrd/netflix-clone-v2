import { themeMovieDB as baseUrl } from '../constants/url';
const API_KEY = process.env.REACT_APP_API_KEY;

export const movies = {
	netflix:
		baseUrl +
		`/3/discover/tv?with_networks=213&language=en-US&api_key=${API_KEY}`,
	trendings:
		baseUrl + `/3/trending/all/week?&language=en-US&api_key=${API_KEY}`,
	actions: baseUrl + `/3/discover/movie?with_genres=28&api_key=${API_KEY}`,
	comedies: baseUrl + `/3/discover/movie?with_genres=35&api_key=${API_KEY}`,
	horrors: baseUrl + `/3/discover/movie?with_genres=27&api_key=${API_KEY}`,
	romances:
		baseUrl + `/3/discover/movie?with_genres=10749&api_key=${API_KEY}`,
	documentaries:
		baseUrl + `/3/discover/movie?with_genres=99&api_key=${API_KEY}`,
	getTrailer: (idmovie) => {
		return baseUrl + `/3/movie/${idmovie}/videos?api_key=${API_KEY}`;
	},
};
