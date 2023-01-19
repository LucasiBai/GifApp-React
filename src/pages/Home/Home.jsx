import { useGifs } from "../../hooks/useGifs";

import GifSearcher from "../../components/GifSearcher/GifSearcher";

const Home = () => {
	const lastQuery = localStorage.getItem("lastSearch");

	const [gifs] = useGifs({ query: lastQuery || "batman" });

	return (
		<main>
			<GifSearcher gifs={gifs}>
				{lastQuery ? <h5>Últimos resultados</h5> : <h5>Contenido Popular</h5>}
			</GifSearcher>
		</main>
	);
};

export default Home;
