import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

interface Report {
	date: string;
	location: string;
	incidents: number;
}

const Reports: React.FC = () => {
	const navigate = useNavigate();

	const initialReports: Report[] = [
		{ date: "2024-11-01", location: "Manaus", incidents: 15 },
		{ date: "2024-11-02", location: "Parintins", incidents: 8 },
		{ date: "2024-11-03", location: "Itacoatiara", incidents: 10 },
		{ date: "2024-11-04", location: "Tefé", incidents: 7 },
		{ date: "2024-11-05", location: "Coari", incidents: 12 },
		{ date: "2024-11-06", location: "Manacapuru", incidents: 9 },
		{ date: "2024-11-07", location: "Eirunepé", incidents: 5 },
	];

	const [reports, setReports] = useState<Report[]>(initialReports);
	const [chartData, setChartData] = useState<any>(null);

	const updateData = () => {
		setReports((prevReports) =>
			prevReports.map((report) => ({
				...report,
				incidents:
					report.incidents +
					Math.floor(Math.random() * 5) -
					Math.floor(Math.random() * 2),
			}))
		);
	};

	useEffect(() => {
		const chartLabels = reports.map((report) => report.location);
		const chartValues = reports.map((report) => report.incidents);

		setChartData({
			labels: chartLabels,
			datasets: [
				{
					label: "Número de Queimadas",
					data: chartValues,
					backgroundColor: "rgba(255, 99, 132, 0.5)",
					borderColor: "rgba(255, 99, 132, 1)",
					borderWidth: 1,
				},
			],
		});
	}, [reports]);

	useEffect(() => {
		const intervalId = setInterval(() => {
			updateData();
		}, 10000);

		return () => clearInterval(intervalId);
	}, []);

	return (
		<div className="p-8 bg-gradient-custom min-h-screen flex flex-col">
			<h1 className="text-center text-4xl font-extrabold text-black mb-8">
				Relatórios de Queimadas no Amazonas
			</h1>

			<div className="flex flex-col lg:flex-row gap-8">
				<div className="flex-1 bg-white p-6 rounded-lg shadow-xl">
					<h2 className="text-2xl font-semibold text-gray-800 mb-4">
						Queimadas por Localidade
					</h2>
					{chartData ? (
						<Bar data={chartData} />
					) : (
						<p className="text-gray-500 text-center">Carregando gráfico...</p>
					)}
				</div>

				<div className="flex-1 bg-white p-6 rounded-lg shadow-xl">
					<h2 className="text-2xl font-semibold text-gray-800 mb-4">
						Dados de Queimadas
					</h2>
					<div className="overflow-x-auto">
						<table className="w-full border  border-gray-300 text-sm text-gray-700">
							<thead>
								<tr className="bg-gray-100 text-gray-700 text-left">
									<th className="px-4 py-2 border-b">Data</th>
									<th className="px-4 py-2 border-b">Localização</th>
									<th className="px-4 py-2 border-b">Número de Incidentes</th>
								</tr>
							</thead>
							<tbody>
								{reports.map((report, index) => (
									<tr
										key={index}
										className="hover:bg-gray-50 transition-colors"
									>
										<td className="px-4 py-2 border-b">{report.date}</td>
										<td className="px-4 py-2 border-b">{report.location}</td>
										<td className="px-4 py-2 border-b text-red-500 font-bold">
											{report.incidents}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>

			{/* Botões de navegação */}
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

export default Reports;
