import React, { useEffect, useState } from "react";
import { useAlertApi } from "@/hooks/useAlert";

const AlertSlide: React.FC = () => {
	const { getAllAlerts } = useAlertApi();
	const [alertInfo, setAlertInfo] = useState<string>(
		"Carregando informações sobre focos de incêndio..."
	);

	useEffect(() => {
		const fetchAlerts = async () => {
			try {
				const response = await getAllAlerts();
				const totalAlerts = response.data.length;
				setAlertInfo(`Total de focos de incêndio detectados: ${totalAlerts}`);
			} catch (error) {
				console.error("Erro ao buscar dados de alertas:", error);
				setAlertInfo("Erro ao carregar informações sobre focos de incêndio.");
			}
		};

		fetchAlerts();
	}, []);

	return (
		<div className="p-8">
			<h2 className="text-2xl font-bold mb-4">
				Informação sobre Foco de Incêndio
			</h2>
			<p className="text-gray-700">{alertInfo}</p>
		</div>
	);
};

export default AlertSlide;
