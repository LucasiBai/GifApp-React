import { useParams } from "react-router-dom";
import { useGifs } from "../../hooks/useGifs";

const GifDetail = () => {
	const { gifId: id } = useParams();

	const [gifData] = useGifs({ id });

	return (
		<div>
			<img src={gifData?.images?.downsized.url} alt={gifData?.title} />
		</div>
	);
};

export default GifDetail;
