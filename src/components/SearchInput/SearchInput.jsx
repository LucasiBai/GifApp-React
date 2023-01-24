import { useState } from "react";

const SearchInput = ({ onSubmit }) => {
	const [formData, setFormData] = useState({
		query: "",
		rating: "g",
	});

	const errors = {
		empty: false,
	};

	const handleChange = (e) => {
		const { value, name } = e.target;

		const updatedFormData = { ...formData };
		updatedFormData[name] = value;

		setFormData(updatedFormData);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const { query } = formData;

		if (query.length > 1) {
			errors["empty"] = false;
			onSubmit(formData);
		} else {
			errors["empty"] = true;
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<input
					type="text"
					name="query"
					onChange={handleChange}
					value={formData["query"]}
				/>
				{errors.empty && (
					<label>El input debe contener al menos 2 caracteres</label>
				)}
			</div>
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
