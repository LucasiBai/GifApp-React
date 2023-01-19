import { useNavigate } from "react-router-dom";

const useSearcher = () => {
	const navigate = useNavigate();

	const searchGifs = ({ query, rating }) => {
		localStorage.setItem("lastSearch", query);

		navigate(`/search?q=${query}&rating=${rating}`);
	};

	return searchGifs;
};

export { useSearcher };
