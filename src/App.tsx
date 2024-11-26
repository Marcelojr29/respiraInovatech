import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../src/Pages/home/home";
import Dashboard from "../src/Pages/dashboard/Dashboard";
import Reports from "../src/Pages/reports/Reports";
import Login from "../src/Pages/login/Login";

const App: React.FC = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/reports" element={<Reports />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</Router>
	);
};

export default App;
