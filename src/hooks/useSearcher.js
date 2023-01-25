import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import { generalContext } from "../contexts/generalContext";

const useSearcher = () => {
	const navigate = useNavigate();
	const { setLastQuery } = useContext(generalContext);

	const searchGifs = ({ query, rating }) => {
		setLastQuery(query);

		navigate(`/search?q=${query}&rating=${rating}`);
	};

	return searchGifs;
};

export { useSearcher };
