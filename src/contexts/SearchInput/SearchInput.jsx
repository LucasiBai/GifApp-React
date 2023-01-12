import { useState } from "react";

const SearchInput = ({ onSubmit }) => {
	const [formData, setFormData] = useState({
		"gif-name": "",
	});

	const handleChange = (e) => {
		const { value, name } = e.target;

		const updatedFormData = { ...formData };
		updatedFormData[name] = value;

		setFormData(updatedFormData);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		onSubmit(formData);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				name="gif-name"
				onChange={handleChange}
				value={formData["gif-name"]}
			/>
			<input type="submit" />
		</form>
	);
};

export default SearchInput;
