import React from "react";
import { Link } from "react-router-dom";

import "./GifItem.css";

const GifItem = ({ gif }) => {
	return (
		<span className="gif-item__box  ">
			<Link to={`/gifs/${gif.id}`}>
				<img src={gif.images.downsized.url} alt={gif.title} />
				<h6>{gif.title}</h6>
			</Link>
		</span>
	);
};

export default React.memo(GifItem, (prevProps, newProps) => {
	return prevProps.gif.id === newProps.gif.id;
});
