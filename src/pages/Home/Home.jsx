import { useNavigate } from "react-router-dom";

import { useGifs } from "../../hooks/useGifs";

import SearchInput from "../../components/SearchInput/SearchInput";
import GifList from "../../components/GifList/GifList";

const Home = () => {
	const lastQuery = localStorage.getItem("lastSearch");

	const [gifs] = useGifs({ query: lastQuery || "batman" });

	const navigate = useNavigate();

	const searchGifs = ({ query, rating }) => {
		localStorage.setItem("lastSearch", query);

		navigate(`/search?q=${query}&rating=${rating}`);
	};

	return (
		<main>
			<SearchInput onSubmit={searchGifs} />
			{lastQuery ? <h5>Última búsqueda</h5> : <></>}
			<GifList gifs={gifs} />
		</main>
	);
};

export default Home;
