import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import SearchResults from "./pages/SearchResults/SearchResults";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navigate to={"/home"} />} />
				<Route path="/home" element={<Home />} />
				<Route path="/search/:query" element={<SearchResults />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
