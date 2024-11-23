import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { useChartApi } from "@/hooks/useGraphic";

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
	const { getCO2Levels } = useChartApi();
	const [chartData, setChartData] = useState<ChartData>({
		labels: [],
		datasets: [
			{
				label: "Variação de CO₂ em Manaus (ppm)",
				data: [],
				fill: true,
				borderColor: "rgba(75, 192, 192, 1)",
				pointBackgroundColor: "rgba(75, 192, 192, 1)",
				tension: 0.4,
				backgroundColor: "rgba(75, 192, 192, 0.2)",
			},
		],
	});

	const updateChartData = async () => {
		try {
			const response = await getCO2Levels();
			const newCO2Level = response.data[0]?.measurements[0]?.value || 0;
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
		} catch (error) {
			console.error("Erro ao buscar dados de CO₂:", error);
		}
	};

	useEffect(() => {
		const intervalId = setInterval(updateChartData, 120000);
		updateChartData();

		return () => clearInterval(intervalId);
	}, []);

	const chartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				labels: {
					color: "#333",
					font: {
						size: 14,
					},
				},
			},
			tooltip: {
				backgroundColor: "rgba(0, 0, 0, 0.7)",
				titleColor: "#fff",
				bodyColor: "#fff",
			},
		},
		scales: {
			y: {
				beginAtZero: true,
				grace: "10%",
				ticks: {
					color: "#333",
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
					color: "#e0e0e0",
				},
			},
			x: {
				ticks: {
					color: "#333",
					font: {
						size: 12,
					},
				},
				grid: {
					color: "#e0e0e0",
				},
			},
		},
	};

	return (
		<div className="w-full h-full p-4 bg-white rounded-lg shadow-lg">
			<h2 className="text-xl font-semibold text-gray-700 mb-4">
				Medição de CO₂ em Manaus
			</h2>
			<Line data={chartData} options={chartOptions} className="w-full h-full" />
		</div>
	);
};

export default ChartSlide;
