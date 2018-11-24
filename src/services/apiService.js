import axios from 'axios';
const REACT_APP_API_SERVER = "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json";

export const getPopulation = () => {
	const url = REACT_APP_API_SERVER;
	return axios.get(url)
		.then( response => response.data )
};
