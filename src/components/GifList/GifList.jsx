const GifList = ({ gifs }) => {
	return (
		<div>
			<ul>
				{gifs?.map((gif, idx) => (
					<img src={gif.images.downsized.url} alt={gif.title} key={idx} />
				))}
			</ul>
		</div>
	);
};

export default GifList;
