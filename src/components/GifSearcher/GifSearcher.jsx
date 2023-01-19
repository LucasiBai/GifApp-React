import React from "react";
import { useSearcher } from "../../hooks/useSearcher";
import GifList from "../GifList/GifList";
import SearchInput from "../SearchInput/SearchInput";

export default function GifSearcher({ gifs, children }) {
	const searchGifs = useSearcher();

	return (
		<>
			<SearchInput onSubmit={searchGifs} />
			{children}
			<GifList gifs={gifs} />
		</>
	);
}
