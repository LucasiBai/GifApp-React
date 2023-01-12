import { useState, useEffect, useCallback } from "react";

import { getGifs } from "../services/dataService";

const useGifs = ({ query, limit, offset, rating, lang }) => {
	const [gifs, setGifs] = useState([]);

	const getData = useCallback(async () => {
		const data = await getGifs(query, limit, offset, rating, lang);

		setGifs(data["data"]);
	}, [query, limit, offset, rating, lang]);

	useEffect(() => {
		getData();
	}, [getData]);

	return { gifs };
};

export { useGifs };
