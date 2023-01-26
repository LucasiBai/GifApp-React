import { useState } from "react";

import "./SearchInput.css";

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
		<form className="search-input__box" onSubmit={handleSubmit}>
			<div>
				<input
					className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-l-lg border-l-gray-100 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
					type="text"
					name="query"
					placeholder="Search a Gif..."
					onChange={handleChange}
					value={formData["query"]}
				/>
				{errors.empty && (
					<label>El input debe contener al menos 2 caracteres</label>
				)}
			</div>
			<select
				className="block p-1 z-20 text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
				name="rating"
				value={formData.rating}
				onChange={handleChange}
			>
				<option value="g">g</option>
				<option value="pg">pg</option>
				<option value="pg-13">pg-13</option>
				<option value="r">r</option>
			</select>
			<input
				type="submit"
				className="p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			/>
		</form>
	);
};

export default SearchInput;
