import { useSearchParams } from "react-router-dom";

import { useGifs } from "../../hooks/useGifs";

import GifSearcher from "../../components/GifSearcher/GifSearcher";

const SearchResults = () => {
	const [queryParams] = useSearchParams();

	const query = queryParams.get("q");
	const rating = queryParams.get("rating");

	const [gifs] = useGifs({ query, rating });

	return (
		<main>
			<GifSearcher gifs={gifs}>
				<h5>Resultados de '{query}'</h5>
			</GifSearcher>
		</main>
	);
};

export default SearchResults;
