import React from "react";

import { useSearcher } from "../../hooks/useSearcher";

import GifList from "../GifList/GifList";
import SearchInput from "../SearchInput/SearchInput";

import "./GifSearcher.css";
import "react-loading-skeleton/dist/skeleton.css";
import GifSkeleton from "../GifSkeleton/GifSkeleton";

export default function GifSearcher({ gifs, children, isLoading = false }) {
	const searchGifs = useSearcher();

	return (
		<div className="gif-searcher__box">
			<SearchInput onSubmit={searchGifs} />
			{children}
			{isLoading ? (
				<div className="gif-list__box">
					<GifSkeleton />
					<GifSkeleton />
					<GifSkeleton />
					<GifSkeleton />
					<GifSkeleton />
					<GifSkeleton />
					<GifSkeleton />
					<GifSkeleton />
					<GifSkeleton />
					<GifSkeleton />
					<GifSkeleton />
					<GifSkeleton />
					<GifSkeleton />
					<GifSkeleton />
					<GifSkeleton />
					<GifSkeleton />
				</div>
			) : (
				<GifList gifs={gifs} />
			)}
		</div>
	);
}
