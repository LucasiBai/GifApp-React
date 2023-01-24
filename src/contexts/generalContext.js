import { createContext } from "react";

const generalContext = createContext();

const { Provider } = generalContext;

const GeneralProvider = ({ children }) => {
	const lastSearch = localStorage.getItem("lastSearch") || "batman";

	const value = {
		lastSearch,
	};

	return <Provider value={value}>{children}</Provider>;
};

export { GeneralProvider, generalContext };
