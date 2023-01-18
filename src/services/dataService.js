import { environment } from "../environment";

const API = environment.API;
const APIKEY = environment.APIKEY;

const getGifs = async (query, limit, offset, rating, lang) => {
	const url =
		API +
		`/search?api_key=${APIKEY}&q=${query}&limit=${limit}&offset=${offset}&rating=${rating}&lang=${lang}`;

	const res = await fetch(url);
	const data = await res.json();

	return data;
};

const getGif = async (gifId) => {
	const url = API + `/${gifId}?api_key=${APIKEY}`;

	const res = await fetch(url);
	const data = await res.json();

	return data;
};

export { getGifs, getGif };
