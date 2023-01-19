import GifItem from "../GifItem/GifItem";

const GifList = ({ gifs }) => {
	return (
		<div className="gif-list__box">
			{gifs?.map((gif, idx) => (
				<GifItem gif={gif} key={idx} />
			))}
		</div>
	);
};

export default GifList;
