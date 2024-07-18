import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';


ChartJS.register(ArcElement, Tooltip, Legend);

const healthData = {
    labels: ['Good', 'Moderate', 'Critical'],
    datasets: [
      {
        label: '# of Votes',
        data: [13, 7, 0],
        backgroundColor: ['#10B981', '#FBBF24', '#EF4444'], // colors for Good, Moderate, Critical
        hoverBackgroundColor: ['#10B981', '#FBBF24', '#EF4444'],
      },
    ],
  };
  const activeAlerts = {
    labels: ['Warning', 'Critical'],
    datasets: [
      {
        label: '# of Alerts',
        data: [7, 0],
        backgroundColor: ['#FBBF24', '#EF4444'], // colors for Warning, Critical
        hoverBackgroundColor: ['#FBBF24', '#EF4444'],
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false, // Disable tooltip
      },
    },
    cutout: '70%', // Create the donut effect
  };
const F5Status = () => {
  return (
    <div className="p-4 text-white">
          <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">F5's Status</h1>
        {/* <p className="text-gray-600 dark:text-gray-400">Home &gt; Discovery Scores</p> */}
      </div>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-800 p-4 rounded-lg shadow">
        <div className="flex items-center">
      <h2 className="text-xl font-semibold">Health</h2>
      <div className="ml-auto flex items-center">
        <div className="relative flex items-center justify-center w-24 h-24">
          <Doughnut data={healthData} options={options} />
          <div className="absolute text-3xl font-bold text-green-500">20</div>
        </div>
        <div className="ml-4">
          <div className="flex items-center">
            <span className="text-green-500">●</span>
            <span className="ml-2">Good: 13</span>
          </div>
          <div className="flex items-center">
            <span className="text-yellow-500">●</span>
            <span className="ml-2">Moderate: 7</span>
          </div>
          <div className="flex items-center">
            <span className="text-red-500">●</span>
            <span className="ml-2">Critical: 0</span>
          </div>
        </div>
      </div>
    </div>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow">
        <div className="flex items-center mt-4">
      <h2 className="text-xl font-semibold">Active Alerts</h2>
      <div className="ml-auto flex items-center">
        <div className="relative flex items-center justify-center w-24 h-24">
          <Doughnut data={activeAlerts} options={options} />
          <div className="absolute text-3xl font-bold text-yellow-500">7</div>
        </div>
        <div className="ml-4">
          <div className="flex items-center">
            <span className="text-yellow-500">●</span>
            <span className="ml-2">Warning: 7</span>
          </div>
          <div className="flex items-center">
            <span className="text-red-500">●</span>
            <span className="ml-2">Critical: 0</span>
          </div>
        </div>
      </div>
    </div>
        </div>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Health</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Instance/Locations</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Security Policies</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Last Updated</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {Array.from({ length: 20 }).map((_, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-green-500">●</span> Good
                </td>
                <td className="px-6 py-4 whitespace-nowrap">app{index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap">1</td>
                <td className="px-6 py-4 whitespace-nowrap">None</td>
                <td className="px-6 py-4 whitespace-nowrap">7 days ago</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default F5Status;
