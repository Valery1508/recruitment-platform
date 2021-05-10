import axios from 'axios';

export const API = axios.create({
	baseURL: 'https://recruitment-platform.herokuapp.com/api/',
	timeout: 1000,
});