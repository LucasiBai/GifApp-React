import GifItem from "../GifItem/GifItem";

import "./GifList.css";

const GifList = ({ gifs }) => {
	return (
		<div className="gif-list__box">
			{gifs?.map((gif, idx) => (
				<GifItem gif={gif} key={idx} />
			))}
			<div></div>
		</div>
	);
};

export default GifList;
