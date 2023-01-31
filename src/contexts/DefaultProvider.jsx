import { ReactQueryDevtools } from "react-query/devtools";

import { GeneralProvider } from "./generalContext";

const DefaultProvider = ({ children }) => {
	return <GeneralProvider>{children}</GeneralProvider>;
};

export default DefaultProvider;
