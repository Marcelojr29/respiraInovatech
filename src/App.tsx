import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/home/home";
import Login from "./components/login/login"; // Importa o componente de Login

export function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} /> {/* Rota para a página inicial */}
				<Route path="/login" element={<Login />} />{" "}
				{/* Rota para a página de login */}
			</Routes>
		</Router>
	);
}

export default App;
