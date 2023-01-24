import { useGifs } from "../../hooks/useGifs";

import GifSearcher from "../../components/GifSearcher/GifSearcher";
import { useContext } from "react";
import { generalContext } from "../../contexts/generalContext";

const Home = () => {
	const { lastSearch } = useContext(generalContext);

	console.log(lastSearch);

	const [gifs] = useGifs({ query: lastSearch });

	return (
		<main>
			<GifSearcher gifs={gifs}>
				{lastSearch ? <h5>Últimos resultados</h5> : <h5>Contenido Popular</h5>}
			</GifSearcher>
		</main>
	);
};

export default Home;
