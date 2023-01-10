import { useState, useEffect } from "react";
import { getGifs } from "../../services/dataService";

const Home = () => {
	const [gifs, setGifs] = useState([]);

	const getData = async () => {
		const data = await getGifs();

		setGifs(data["data"]);
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<div>
			<ul>
				{gifs?.map((gif, idx) => (
					<img src={gif.images.downsized.url} key={idx} />
				))}
			</ul>
		</div>
	);
};

export default Home;
