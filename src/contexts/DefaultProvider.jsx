import { SkeletonTheme } from "react-loading-skeleton";
import { ReactQueryDevtools } from "react-query/devtools";

import { GeneralProvider } from "./generalContext";

const DefaultProvider = ({ children }) => {
	return (
		<GeneralProvider>
			<SkeletonTheme baseColor="#374151" highlightColor="#54637a">
				{children}
			</SkeletonTheme>
		</GeneralProvider>
	);
};

export default DefaultProvider;
