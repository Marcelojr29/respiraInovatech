import React, { useEffect, useState } from "react";

interface Alert {
	id: number;
	location: string;
	description: string;
	severity: string;
}

const AlertSlide: React.FC = () => {
	const mockAlerts: Alert[] = [
		{
			id: 1,
			location: "Teatro Amazonas",
			description: "Aumento de CO₂ detectado na região.",
			severity: "Alto",
		},
		{
			id: 2,
			location: "Ponte Rio Negro",
			description: "Níveis moderados de poluição registrados.",
			severity: "Médio",
		},
		{
			id: 3,
			location: "Encontro das Águas",
			description: "Atividade incomum detectada nas proximidades.",
			severity: "Crítico",
		},
		{
			id: 4,
			location: "Museu da Amazônia",
			description: "Nível seguro, nenhuma atividade detectada.",
			severity: "Baixo",
		},
		{
			id: 5,
			location: "Praia da Ponta Negra",
			description: "Movimento normal, monitoramento contínuo.",
			severity: "Baixo",
		},
	];

	const [alertInfo, setAlertInfo] = useState<string>(
		"Carregando informações sobre os pontos turísticos..."
	);
	const [alerts, setAlerts] = useState<Alert[]>([]);

	useEffect(() => {
		const fetchAlerts = async () => {
			try {
				// Simula um atraso no carregamento
				await new Promise((resolve) => setTimeout(resolve, 1000));

				// Seleciona alertas aleatórios
				const shuffledAlerts = mockAlerts.sort(() => 0.5 - Math.random());
				setAlerts(shuffledAlerts.slice(0, 3)); // Exibe apenas 3 alertas
				setAlertInfo(
					`Monitoramento atualizado para os pontos turísticos de Manaus.`
				);
			} catch (error) {
				console.error("Erro ao buscar dados de alertas:", error);
				setAlertInfo(
					"Erro ao carregar informações sobre os pontos turísticos."
				);
			}
		};

		fetchAlerts();

		const intervalId = setInterval(fetchAlerts, 10000);

		return () => clearInterval(intervalId);
	}, []);

	return (
		<div className="p-8 bg-gray-200 rounded-lg shadow-lg">
			<h2 className="text-2xl font-bold mb-4 text-gray-800">
				Monitoramento dos Pontos Turísticos
			</h2>
			<p className="text-gray-700">{alertInfo}</p>

			<ul className="mt-6 space-y-4">
				{alerts.map((alert) => (
					<li
						key={alert.id}
						className={`p-4 border-l-4 rounded-md shadow-md ${
							alert.severity === "Crítico"
								? "border-red-600 bg-red-50"
								: alert.severity === "Alto"
								? "border-orange-500 bg-orange-50"
								: alert.severity === "Médio"
								? "border-yellow-500 bg-yellow-50"
								: "border-green-500 bg-green-50"
						}`}
					>
						<h3 className="text-lg font-semibold text-gray-800">
							{alert.location}
						</h3>
						<p className="text-gray-600">{alert.description}</p>
						<p className="font-bold text-gray-700">
							Severidade:{" "}
							<span
								className={`${
									alert.severity === "Crítico"
										? "text-red-600"
										: alert.severity === "Alto"
										? "text-orange-500"
										: alert.severity === "Médio"
										? "text-yellow-500"
										: "text-green-500"
								}`}
							>
								{alert.severity}
							</span>
						</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default AlertSlide;
