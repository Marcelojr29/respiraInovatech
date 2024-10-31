import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const ChartSlide: React.FC = () => {
  const chartData = {
    labels: ['0s', '2s', '4s', '6s', '8s', '10s'], // Rótulos simulados
    datasets: [
      {
        label: 'Temperatura (°C)',
        data: [22, 23, 25, 28, 30, 32], // Dados simulados (substitua pelos dados do ESP32)
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="w-full h-full">
      <Line data={chartData} />
    </div>
  );
};

export default ChartSlide;
