import { useGifs } from "../../hooks/useGifs";

import GifSearcher from "../../components/GifSearcher/GifSearcher";
import { useContext } from "react";
import { generalContext } from "../../contexts/generalContext";
import { useState } from "react";

const Home = () => {
	const [isLoading, setIsLoading] = useState(true);

	const { lastSearch } = useContext(generalContext);

	const [gifs] = useGifs({ query: lastSearch });

	return (
		<main>
			<GifSearcher gifs={gifs} isLoading={isLoading}>
				{lastSearch ? <h5>Last Results</h5> : <h5>Popular Content</h5>}
			</GifSearcher>
		</main>
	);
};

export default Home;
