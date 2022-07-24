import axios, { AxiosError } from "axios";

const client = axios.create({
	baseURL: `https://api.themoviedb.org/3/`,
});

export const RequestInterceptor = ({ ...options }) => {
	// client.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('t')}`;

	const onSuccess = (response: any) => response.data;
	const onError = (error: AxiosError) => {
		if (error.response?.status === 401) {
			console.log(error);
		}
		return error;
	};

	return client(options).then(onSuccess).catch(onError);
};
