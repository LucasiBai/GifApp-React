import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navigate to={"/home"} />} />
				<Route path="/home" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
