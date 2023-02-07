import Skeleton from "react-loading-skeleton";

import "./GifSkeleton.css";

const GifSkeleton = () => {
	return (
		<span className="gif-skeleton">
			<Skeleton width={1000} height={500} />
		</span>
	);
};

export default GifSkeleton;
