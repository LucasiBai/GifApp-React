import { useState } from "react";

const SearchInput = ({ onSubmit }) => {
	const [formData, setFormData] = useState({
		query: "",
		rating: "g",
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
				name="query"
				onChange={handleChange}
				value={formData["query"]}
			/>
			<select name="rating" value={formData.rating} onChange={handleChange}>
				<option value="g">g</option>
				<option value="pg">pg</option>
				<option value="pg-13">pg-13</option>
				<option value="r">r</option>
			</select>
			<input type="submit" />
		</form>
	);
};

export default SearchInput;
