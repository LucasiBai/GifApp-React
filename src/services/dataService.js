import { environment } from "../environment";

const API = environment.API;
const APIKEY = environment.APIKEY;

const getGifs = async (
	query = "batman",
	limit = "10",
	offset = "0",
	rating = "g",
	lang = "en",
) => {
	const url =
		API +
		`/search?api_key=${APIKEY}&q=${query}&limit=${limit}&offset=${offset}&rating=${rating}&lang=${lang}`;

	const res = await fetch(url);
	const data = await res.json();

	return data;
};

export { getGifs };
