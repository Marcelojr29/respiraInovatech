import React, { useEffect, useState } from "react";
import {
	FaFireAlt,
	FaMapMarkedAlt,
	FaChartLine,
	FaGlobe,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
	const navigate = useNavigate();

	const user = { name: "Usuário Teste" };

	const [mockData, setMockData] = useState({
		totalIncidents: 42,
		regionsMonitored: 10,
		activeSensors: 120,
		globalRank: 15,
		lastUpdate: new Date().toLocaleString(),
	});

	useEffect(() => {
		const intervalId = setInterval(() => {
			setMockData((prevData) => ({
				totalIncidents:
					prevData.totalIncidents + Math.floor(Math.random() * 5) + 1,
				regionsMonitored:
					prevData.regionsMonitored + Math.floor(Math.random() * 2),
				activeSensors: prevData.activeSensors + Math.floor(Math.random() * 3),
				globalRank: prevData.globalRank - (Math.random() > 0.5 ? 1 : 0),
				lastUpdate: new Date().toLocaleString(),
			}));
		}, 5000);

		return () => clearInterval(intervalId);
	}, []);

	return (
		<div className="p-8 bg-custom-color min-h-screen flex flex-col items-center">
			<div className="text-center mb-10">
				<h1 className="text-4xl font-bold text-gray-800 mb-4">
					Bem-vindo, {user.name}!
				</h1>
				<p className="text-lg text-gray-700">
					Aqui está um resumo avançado do monitoramento de incêndios e regiões.
				</p>
			</div>

			<div className="flex justify-center items-center space-x-6 mb-10">
				<div className="bg-white p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition duration-300">
					<FaFireAlt className="text-red-500 text-4xl mx-auto mb-4" />
					<h2 className="text-xl font-semibold text-gray-700">
						Total de Incidentes
					</h2>
					<p className="text-4xl font-bold text-red-500">
						{mockData.totalIncidents}
					</p>
				</div>
				<div className="bg-white p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition duration-300">
					<FaMapMarkedAlt className="text-blue-500 text-4xl mx-auto mb-4" />
					<h2 className="text-xl font-semibold text-gray-700">
						Regiões Monitoradas
					</h2>
					<p className="text-4xl font-bold text-blue-500">
						{mockData.regionsMonitored}
					</p>
				</div>
				<div className="bg-white p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition duration-300">
					<FaChartLine className="text-green-500 text-4xl mx-auto mb-4" />
					<h2 className="text-xl font-semibold text-gray-700">
						Sensores Ativos
					</h2>
					<p className="text-4xl font-bold text-green-500">
						{mockData.activeSensors}
					</p>
				</div>
				<div className="bg-white p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition duration-300">
					<FaGlobe className="text-purple-500 text-4xl mx-auto mb-4" />
					<h2 className="text-xl font-semibold text-gray-700">
						Posição Global
					</h2>
					<p className="text-4xl font-bold text-purple-500">
						#{mockData.globalRank}
					</p>
				</div>
			</div>

			<div className="w-full max-w-2xl bg-gray-100 p-6 rounded-lg shadow-md text-center">
				<h2 className="text-lg font-semibold text-gray-700">
					Última Atualização
				</h2>
				<p className="text-md text-gray-600">{mockData.lastUpdate}</p>
			</div>

			<div className="mt-10 flex justify-center space-x-4">
				<button
					onClick={() => navigate("/")}
					className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md text-lg font-semibold transform hover:scale-105 transition duration-300"
				>
					Voltar para Home
				</button>
				<button
					onClick={() => console.log("Logout chamado")}
					className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow-md text-lg font-semibold transform hover:scale-105 transition duration-300"
				>
					Logout
				</button>
			</div>
		</div>
	);
};

export default Dashboard;
