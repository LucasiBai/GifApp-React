import { useNavigate } from "react-router-dom";

import { useGifs } from "../../hooks/useGifs";

import SearchInput from "../../components/SearchInput/SearchInput";
import GifList from "../../components/GifList/GifList";

const Home = () => {
	const { gifs } = useGifs({ query: "robin" });

	const navigate = useNavigate();

	const searchGifs = ({ query }) => {
		navigate(`/search?q=${query}`);
	};

	return (
		<main>
			<SearchInput onSubmit={searchGifs} />
			<GifList gifs={gifs} />
		</main>
	);
};

export default Home;
