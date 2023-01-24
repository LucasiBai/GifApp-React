import { useParams } from "react-router-dom";
import { useGifs } from "../../hooks/useGifs";

const GifDetail = () => {
	const { gifId: id } = useParams();

	const [gifData] = useGifs({ id });

	return (
		<main>
			<img src={gifData?.images?.downsized.url} alt={gifData?.title} />
		</main>
	);
};

export default GifDetail;
