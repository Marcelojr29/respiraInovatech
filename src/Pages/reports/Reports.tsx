import React, { useEffect, useState } from "react";
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
import { fetchReports } from "../../lib/api";


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


interface Report {
  date: string;
  location: string;
  incidents: number;
}

const Reports: React.FC = () => {
  const [reports, setReports] = useState<Report[]>([]);
  const [chartData, setChartData] = useState<any>(null);

  useEffect(() => {
    // Chamada à API para buscar dados
    const loadReports = async () => {
      const data: Report[] = await fetchReports();
      setReports(data);

      const chartLabels = data.map((report) => report.date);
      const chartValues = data.map((report) => report.incidents);

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
    };

    loadReports();
  }, []);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">Relatórios de Queimadas</h1>

      {/* Gráfico */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-xl font-semibold mb-4">Queimadas por Dia</h2>
        {chartData ? <Bar data={chartData} /> : <p>Carregando gráfico...</p>}
      </div>

      {/* Tabela */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Dados de Queimadas</h2>
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Data</th>
              <th className="border border-gray-300 px-4 py-2">Localização</th>
              <th className="border border-gray-300 px-4 py-2">Número de Incidentes</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report: Report, index: number) => (
              <tr key={index} className="text-center">
                <td className="border border-gray-300 px-4 py-2">{report.date}</td>
                <td className="border border-gray-300 px-4 py-2">{report.location}</td>
                <td className="border border-gray-300 px-4 py-2">{report.incidents}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reports;
