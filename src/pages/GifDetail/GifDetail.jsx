import { useCallback, useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { getGif } from "../../services/dataService";

const GifDetail = () => {
	const { gifId } = useParams();

	const [gifData, setGifData] = useState({});

	const getData = useCallback(async () => {
		const data = await getGif(gifId);

		setGifData(data["data"]);
	}, [gifId]);

	useEffect(() => {
		getData();
	}, [getData, gifId]);

	return (
		<div>
			<img src={gifData?.images?.downsized.url} alt={gifData?.title} />
		</div>
	);
};

export default GifDetail;
