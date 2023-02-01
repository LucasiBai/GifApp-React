import { useGifs } from "../../hooks/useGifs";

import GifSearcher from "../../components/GifSearcher/GifSearcher";
import { useContext, useEffect } from "react";
import { generalContext } from "../../contexts/generalContext";
import { useState } from "react";

const Home = () => {
	const [isLoading, setIsLoading] = useState(false);

	const { lastSearch } = useContext(generalContext);

	const [gifs] = useGifs({ query: lastSearch });

	useEffect(() => {
		if (gifs.length < 1) {
			setIsLoading(true);
		} else {
			setIsLoading(false);
		}
	}, [gifs]);

	return (
		<main>
			<GifSearcher gifs={gifs} isLoading={isLoading}>
				{lastSearch ? <h5>Last Results</h5> : <h5>Popular Content</h5>}
			</GifSearcher>
		</main>
	);
};

export default Home;
