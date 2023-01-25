import { createContext, useState } from "react";

const generalContext = createContext();

const { Provider } = generalContext;

const GeneralProvider = ({ children }) => {
	const [lastSearch, setLastSearch] = useState(
		localStorage.getItem("lastSearch") || "batman",
	);

	const setLastQuery = (query) => {
		localStorage.setItem("lastSearch", query);
		setLastSearch(query);
	};

	const value = {
		lastSearch,
		setLastQuery,
	};

	return <Provider value={value}>{children}</Provider>;
};

export { GeneralProvider, generalContext };
