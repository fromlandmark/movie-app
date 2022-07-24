import { RequestInterceptor } from "./utils/axios.utils";

export const fetchPopularMovies = async (type: string) => {
	return RequestInterceptor({ url: `movie/${type}?api_key=${process.env.REACT_APP_MOVIES_KEY}` });
};

export const fetchSearchResults = async (query: string) => {
	return RequestInterceptor({
		url: `search/movie?api_key=${process.env.REACT_APP_MOVIES_KEY}&language=en-US&query=${query}&page=1&include_adult=false`,
	});
};

export const fetchMovieByID = async (movieID: any) => {
	return RequestInterceptor({
		url: `movie/${movieID}?api_key=${process.env.REACT_APP_MOVIES_KEY}`,
	});
};
