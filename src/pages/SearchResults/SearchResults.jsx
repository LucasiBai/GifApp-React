import { useSearchParams } from "react-router-dom";

import { useGifs } from "../../hooks/useGifs";
import { useNavigate } from "react-router-dom";

import GifList from "../../components/GifList/GifList";
import SearchInput from "../../components/SearchInput/SearchInput";

const SearchResults = () => {
	const [queryParams] = useSearchParams();

	const query = queryParams.get("q");
	const rating = queryParams.get("rating");

	const [gifs] = useGifs({ query, rating });

	const navigate = useNavigate();

	const searchGifs = ({ query, rating }) => {
		localStorage.setItem("lastSearch", query);

		navigate(`/search?q=${query}&rating=${rating}`);
	};

	return (
		<main>
			<SearchInput onSubmit={searchGifs} />
			<h5>Results of '{query}'</h5>
			<GifList gifs={gifs} />
		</main>
	);
};

export default SearchResults;
