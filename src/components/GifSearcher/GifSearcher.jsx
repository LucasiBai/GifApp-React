import React from "react";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import { useSearcher } from "../../hooks/useSearcher";

import GifList from "../GifList/GifList";
import SearchInput from "../SearchInput/SearchInput";

import "./GifSearcher.css";

export default function GifSearcher({ gifs, children, isLoading = false }) {
	const searchGifs = useSearcher();

	return (
		<div className="gif-searcher__box">
			<SearchInput onSubmit={searchGifs} />
			{children}
			{isLoading ? (
				<div>
					<SkeletonTheme baseColor="#202020" highlightColor="#444">
						<p>
							<Skeleton count={3} />
						</p>
					</SkeletonTheme>
				</div>
			) : (
				<GifList gifs={gifs} />
			)}
		</div>
	);
}
