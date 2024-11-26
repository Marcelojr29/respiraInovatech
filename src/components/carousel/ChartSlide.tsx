import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

interface ChartData {
	labels: string[];
	datasets: {
		label: string;
		data: number[];
		fill: boolean;
		borderColor: string;
		pointBackgroundColor: string;
		tension: number;
		backgroundColor?: string;
	}[];
}

const ChartSlide: React.FC = () => {
	const [chartData, setChartData] = useState<ChartData>({
		labels: ["10:00", "10:02", "10:04", "10:06", "10:08"],
		datasets: [
			{
				label: "Variação de CO₂ em Manaus (ppm)",
				data: [350, 400, 450, 500, 550],
				fill: true,
				borderColor: "rgba(75, 192, 192, 1)",
				pointBackgroundColor: "rgba(75, 192, 192, 1)",
				tension: 0.4,
				backgroundColor: "rgba(75, 192, 192, 0.2)",
			},
		],
	});

	useEffect(() => {
		// Simula a atualização dos dados de CO₂
		const intervalId = setInterval(() => {
			const newCO2Level = Math.floor(Math.random() * (1200 - 300 + 1)) + 300;
			const currentTimeLabel = new Date().toLocaleTimeString();

			setChartData((prevData) => {
				const updatedLabels = [...prevData.labels, currentTimeLabel].slice(-10);
				const updatedData = [...prevData.datasets[0].data, newCO2Level].slice(
					-10
				);

				return {
					...prevData,
					labels: updatedLabels,
					datasets: [
						{
							...prevData.datasets[0],
							data: updatedData,
						},
					],
				};
			});
		}, 5000); // Atualiza os dados a cada 5 segundos

		return () => clearInterval(intervalId);
	}, []);

	const chartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				labels: {
					color: "#4B5563", // Cinza escuro
					font: {
						size: 14,
						weight: "bold" as "bold", // Corrigido com tipo explícito
					},
				},
				position: "top" as "top", // Define explicitamente como "top"
			},
			tooltip: {
				backgroundColor: "rgba(0, 0, 0, 0.8)",
				titleColor: "#FFFFFF",
				bodyColor: "#F3F4F6",
				cornerRadius: 8,
				borderColor: "#9CA3AF",
				borderWidth: 1,
			},
		},
		scales: {
			y: {
				beginAtZero: true,
				grace: "10%",
				ticks: {
					color: "#4B5563",
					font: {
						size: 12,
					},
					callback: function (value: number | string) {
						if (typeof value === "number") {
							if (value <= 400) {
								return `${value} ppm (Seguro)`;
							} else if (value <= 1000) {
								return `${value} ppm (Moderado)`;
							} else {
								return `${value} ppm (Perigoso)`;
							}
						}
						return value;
					},
				},
				grid: {
					color: "#E5E7EB",
				},
			},
			x: {
				ticks: {
					color: "#4B5563",
					font: {
						size: 12,
					},
				},
				grid: {
					color: "#E5E7EB",
				},
			},
		},
	};

	return (
		<div className="w-full h-full p-6 bg-gray-200 rounded-lg shadow-xl">
			{/* Header */}
			<div className="mb-6">
				<h2 className="text-2xl font-bold text-gray-800 border-l-4 border-blue-500 pl-4">
					Medição de CO₂ em Manaus
				</h2>
				<p className="text-sm text-gray-600 mt-2">
					Monitoramento em tempo real do nível de CO₂ na região.
				</p>
			</div>

			{/* Gráfico */}
			<div className="w-full h-[350px] bg-white rounded-lg shadow-lg p-4">
				<Line data={chartData} options={chartOptions} />
			</div>
		</div>
	);
};

export default ChartSlide;
