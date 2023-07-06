import axios, { AxiosError, AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";

//export const baseURL: string = 'http://localhost:5000/';
export const baseURL: string = 'https://lady-shery-egorplat.amvera.io/';

export const instance = axios.create({
	baseURL: baseURL,
})
instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
	if(localStorage.getItem('access-token') !== '') {
        config.headers['Content-Type'] = 'application/json';
        config.headers['Authorization'] = 'Bearer ' + localStorage.getItem('access-token');
	}
	return config;
}, (errors: AxiosError) => {
	return Promise.reject(errors);
})
instance.interceptors.response.use((response) => {
	return response;
}, (error: AxiosError) => {
	const ec: AxiosRequestConfig | undefined = error.config;
	const ers: number | undefined = error.response?.status;
	if(ers === 401) {
		/*setIsAsyncLoaded(false);
		updateTokens().then(async (res: any) => {
			if(res.status === 200) {
				ec.headers = {
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ' + localStorage.getItem('access-token')
				}
				const response = await axios.request(ec);
				return response;
			} else {
				localStorage.removeItem('access-token');
				localStorage.removeItem('refrash-token');
				return error.response;
			}
		})*/
        console.log(401);
	}
	return error;
})