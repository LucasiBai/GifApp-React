import React from "react";
import { Link } from "react-router-dom";

import "./GifItem.css";

const GifItem = ({ gif }) => {
	return (
		<Link to={`/gifs/${gif.id}`}>
			<span className="gif-item__box">
				<img src={gif.images.downsized.url} alt={gif.title} />
				<h6>{gif.title}</h6>
			</span>
		</Link>
	);
};

export default GifItem;
