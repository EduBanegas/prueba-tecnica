// Dependencies
import axios from 'axios';

const apiCall = async (method, url, data = null, config = null) => {
	return await axios[method](url, data, config);
};

export default apiCall;
