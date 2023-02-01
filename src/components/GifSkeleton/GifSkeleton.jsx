import Skeleton from "react-loading-skeleton";

import "./GifSkeleton.css";

const GifSkeleton = () => {
	return (
		<span className="gif-skeleton">
			<Skeleton width={300} height={600} />
			{/* 
			<h6>
				<Skeleton width={120} />
			</h6> */}
		</span>
	);
};

export default GifSkeleton;
