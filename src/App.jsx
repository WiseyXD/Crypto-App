import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
	Navbar,
	Footer,
	Homepage,
	Exchange,
	Cryptocurrencies,
	CryptoDetails,
	News,
	// Asd
} from "./Components";
function App() {
	return (
		<div className="app">
			<div className="navbar">
				<Navbar />
			</div>
			<div className="main">
				<Layout>
					<div className="routes">
						<Routes>
							<Route exact path="/" element={<Homepage />} />
							<Route
								exact
								path="/exchanges"
								element={<Exchange />}
							/>

							<Route
								exact
								path="/cryptocurrencies"
								element={<Cryptocurrencies />}
							/>

							<Route
								exact
								path="/crypto/:coinId"
								element={<CryptoDetails />}
							/>

							<Route exact path="/news" element={<News />} />
						</Routes>
					</div>
				</Layout>
				<div className="footer">
					<Footer />
				</div>
			</div>
		</div>
	);
}

export default App;
