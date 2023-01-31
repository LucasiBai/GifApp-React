import { useParams } from "react-router-dom";
import { useGifs } from "../../hooks/useGifs";

import "./GifDetail.css";

const GifDetail = () => {
	const { gifId: id } = useParams();

	const [gifData] = useGifs({ id });

	return (
		<main>
			<section className="gif-detail__box">
				<article>
					<img src={gifData?.images?.downsized.url} alt={gifData?.title} />
					<h4>{gifData?.title}</h4>
				</article>
			</section>
		</main>
	);
};

export default GifDetail;
