import { useState, useEffect, useCallback } from "react";

import { getGif, getGifs } from "../services/dataService";

const useGifs = ({ query, limit, offset, rating, lang, id }) => {
	const [gifs, setGifs] = useState([]);

	const getData = useCallback(async () => {
		const data = !id
			? await getGifs(query, limit, offset, rating, lang)
			: await getGif(id);

		setGifs(data["data"]);
	}, [query, limit, offset, rating, lang, id]);

	useEffect(() => {
		getData();
	}, [getData]);

	return [gifs];
};

export { useGifs };
