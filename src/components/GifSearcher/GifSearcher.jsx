import React from "react";

import { useSearcher } from "../../hooks/useSearcher";

import GifList from "../GifList/GifList";
import SearchInput from "../SearchInput/SearchInput";

import "./GifSearcher.css";
import "react-loading-skeleton/dist/skeleton.css";
import GifSkeleton from "../GifSkeleton/GifSkeleton";

export default function GifSearcher({ gifs, children, isLoading = false }) {
	const searchGifs = useSearcher();

	const skeletons = [];

	for (let i = 0; i < 20; i++) {
		skeletons.push(i);
	}

	return (
		<div className="gif-searcher__box">
			<SearchInput onSubmit={searchGifs} />
			{children}
			{isLoading ? (
				<div className="gif-skeleton-list__box">
					{skeletons.map((item) => (
						<GifSkeleton />
					))}
				</div>
			) : (
				<GifList gifs={gifs} />
			)}
		</div>
	);
}
