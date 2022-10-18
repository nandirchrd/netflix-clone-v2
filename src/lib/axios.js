import axios from 'axios';

const defaultEndpoint = {
	get: axios.get,
	post: axios.post,
	put: axios.put,
	delete: axios.delete,
};

export default defaultEndpoint;
