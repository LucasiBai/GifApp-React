import { useSearchParams } from "react-router-dom";

import { useGifs } from "../../hooks/useGifs";

import GifSearcher from "../../components/GifSearcher/GifSearcher";
import { useEffect, useState } from "react";

const SearchResults = () => {
	const [isLoading, setIsLoading] = useState(false);

	const [queryParams] = useSearchParams();

	const query = queryParams.get("q");
	const rating = queryParams.get("rating");

	const [gifs] = useGifs({ query, rating });

	useEffect(() => {
		if (gifs.length < 1) {
			setIsLoading(true);
		} else {
			setIsLoading(false);
		}
	}, [gifs, query]);

	return (
		<main>
			<GifSearcher gifs={gifs} isLoading={isLoading}>
				<h5>Resultados de '{query}'</h5>
			</GifSearcher>
		</main>
	);
};

export default SearchResults;
