import React from "react";
import { useSearcher } from "../../hooks/useSearcher";
import GifList from "../GifList/GifList";
import SearchInput from "../SearchInput/SearchInput";

import "./GifSearcher.css";

export default function GifSearcher({ gifs, children }) {
	const searchGifs = useSearcher();

	return (
		<div className="gif-searcher__box">
			<SearchInput onSubmit={searchGifs} />
			{children}
			<GifList gifs={gifs} />
		</div>
	);
}
