import { Link } from "react-router-dom";

const GifList = ({ gifs }) => {
	return (
		<div className="gif-list__box">
			{gifs?.map((gif, idx) => (
				<Link to={`/gifs/${gif.id}`} key={idx}>
					<img src={gif.images.downsized.url} alt={gif.title} />
				</Link>
			))}
		</div>
	);
};

export default GifList;
