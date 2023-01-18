import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import GifDetail from "./pages/GifDetail/GifDetail";
import Home from "./pages/Home/Home";
import SearchResults from "./pages/SearchResults/SearchResults";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Navigate to={"/home"} />} />
				<Route path="/home" element={<Home />} />
				<Route path="/search" element={<SearchResults />} />
				<Route path="/gifs/:gifId" element={<GifDetail />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
