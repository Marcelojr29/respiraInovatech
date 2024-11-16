import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

// Configurações da API para Rio de Janeiro
const CITY = "Rio de Janeiro";
const PARAMETER = "co2";
const API_URL = `https://api.openaq.org/v2/latest?city=${CITY}&parameter=${PARAMETER}`;

// Tipagem para os dados do gráfico
interface ChartData {
	labels: string[];
	datasets: {
		label: string;
		data: number[];
		fill: boolean;
		borderColor: string;
		pointBackgroundColor: string;
		tension: number;
	}[];
}

// Função para buscar dados de CO₂ da API
const fetchCO2DataFromAPI = async (): Promise<number> => {
	try {
		const response = await fetch(API_URL);
		const data = await response.json();

		// Verifica se existe dado de CO₂ e retorna o valor
		const co2Value = data.results[0]?.measurements[0]?.value;
		return co2Value || 0; // Retorna 0 caso não haja dados de CO₂
	} catch (error) {
		console.error("Erro ao buscar dados de CO₂:", error);
		return 0;
	}
};

const ChartSlide: React.FC = () => {
	// Estado para armazenar dados do gráfico
	const [chartData, setChartData] = useState<ChartData>({
		labels: [],
		datasets: [
			{
				label: "Variação de CO₂ no Rio de Janeiro (ppm)",
				data: [],
				fill: false,
				borderColor: "rgb(75, 192, 192)",
				pointBackgroundColor: "rgb(75, 192, 192)",
				tension: 0.1,
			},
		],
	});

	// Função para atualizar o estado do gráfico com novos dados
	const updateChartData = async () => {
		const newCO2Level = await fetchCO2DataFromAPI();
		const currentTimeLabel = new Date().toLocaleTimeString();

		setChartData((prevData) => {
			const updatedLabels = [...prevData.labels, currentTimeLabel].slice(-10); // Mantém últimos 10 pontos
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
	};

	useEffect(() => {
		// Atualiza os dados do gráfico a cada 2 minutos
		const intervalId = setInterval(updateChartData, 120000);
		updateChartData(); // Atualiza imediatamente ao montar o componente

		return () => clearInterval(intervalId); // Limpa o intervalo ao desmontar
	}, []);

	// Opções de configuração do gráfico
	const chartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				labels: {
					color: "#666", // Cor mais clara para a legenda
				},
			},
		},
		scales: {
			y: {
				beginAtZero: true,
				grace: "10%",
				ticks: {
					color: "#666", // Cor mais clara para os valores do eixo Y
				},
				grid: {
					color: "#e0e0e0", // Cor mais clara para as linhas de grade
				},
			},
			x: {
				ticks: {
					color: "#666", // Cor mais clara para os valores do eixo X
				},
				grid: {
					color: "#e0e0e0", // Cor mais clara para as linhas de grade
				},
			},
		},
	};

	return (
		<div className="w-full h-full">
			<Line data={chartData} options={chartOptions} className="w-full h-full" />
		</div>
	);
};

export default ChartSlide;
