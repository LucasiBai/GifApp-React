import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header>
			<Link to={"/home"}>
				<h1>Gif App</h1>
			</Link>
		</header>
	);
};

export default Header;
