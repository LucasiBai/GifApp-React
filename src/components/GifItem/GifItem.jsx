import React from "react";
import { Link } from "react-router-dom";

const GifItem = ({ gif }) => {
	return (
		<Link to={`/gifs/${gif.id}`}>
			<img src={gif.images.downsized.url} alt={gif.title} />
		</Link>
	);
};

export default GifItem;
