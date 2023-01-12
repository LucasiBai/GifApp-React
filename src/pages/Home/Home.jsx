import { useGifs } from "../../hooks/useGifs";

import SearchInput from "../../contexts/SearchInput/SearchInput";

const Home = () => {
	const { gifs } = useGifs({ query: "robin" });

	return (
		<main>
			<SearchInput />
			<ul>
				{gifs?.map((gif, idx) => (
					<img src={gif.images.downsized.url} alt={gif.title} key={idx} />
				))}
			</ul>
		</main>
	);
};

export default Home;
