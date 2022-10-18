import axios from '../lib/axios';
import { movies } from '../config/apiEndpoints';

export function getMovies({ category }) {
	switch (category.toLowerCase()) {
		case 'actions':
			return axios.get(movies.actions);
		case 'comedies':
			return axios.get(movies.comedies);
		case 'documentaries':
			return axios.get(movies.documentaries);
		case 'horrors':
			return axios.get(movies.horrors);
		case 'netflix':
			return axios.get(movies.netflix);
		case 'romances':
			return axios.get(movies.romances);
		case 'trendings':
			return axios.get(movies.trendings);
		default:
			return null;
	}
}

export function getTrending() {
	return axios.get(movies.trendings);
}

export function getTrailer(id) {
	return axios.get(movies.getTrailer(id));
}
