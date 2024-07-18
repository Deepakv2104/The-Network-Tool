import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const PieChartWithLegend = ({ data, title }) => (
  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
    <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">{title}</h2>
    <div className="flex items-center">
      <PieChart width={150} height={150}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={60}
          fill="#8884d8"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
      <div className="ml-4">
        {data.map((entry, index) => (
          <div key={index} className="flex items-center mb-2">
            <div className="w-3 h-3 mr-2" style={{ backgroundColor: entry.color }}></div>
            <span className="text-sm text-gray-600 dark:text-gray-300">{entry.name}: {entry.value}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Discovery42 = () => {
  const discoverySuccessData = [
    { name: 'Success', value: 85, color: '#22c55e' },
    { name: 'Auth Failure', value: 10, color: '#f59e0b' },
    { name: 'Port Check Failure', value: 3, color: '#ef4444' },
    { name: 'Other Errors', value: 2, color: '#6b7280' },
  ];

  const discoveryScoresData = [
    { name: 'Score OK', value: 90, color: '#22c55e' },
    { name: 'Score Partial', value: 8, color: '#f59e0b' },
    { name: 'Score Failed', value: 2, color: '#ef4444' },
  ];

  const discoveryQueueData = [
    { name: 'Score OK', value: 98, color: '#22c55e' },
    { name: 'Score Partial', value: 1, color: '#f59e0b' },
    { name: 'Score Failed', value: 1, color: '#ef4444' },
  ];

  const tableData = [
    { id: 1, target: '10.90.4.16', jobName: 'Florida Dev', startTime: 'Oct 18, 2021, noon', subType: 'TCP Port Scan', portCheck: true, auth: true, successful: true, object: 'Florida Dev - windows (autocreated)', queue: '1/1', score: 60 },
    { id: 2, target: '10.90.4.17', jobName: 'New York Prod', startTime: 'Nov 5, 2021, 10:30 AM', subType: 'Vulnerability Scan', portCheck: false, auth: true, successful: true, object: 'New York Prod - linux (manual)', queue: '2/3', score: 80 },
    { id: 3, target: '10.90.4.18', jobName: 'Chicago Test', startTime: 'Sep 30, 2021, 3:45 PM', subType: 'Web Application Scan', portCheck: true, auth: false, successful: false, object: 'Chicago Test - web (autocreated)', queue: '0/2', score: 40 },
    { id: 4, target: '10.90.4.19', jobName: 'Los Angeles Prod', startTime: 'Oct 2, 2021, 9:00 AM', subType: 'Network Scan', portCheck: false, auth: true, successful: true, object: 'Los Angeles Prod - linux (manual)', queue: '3/3', score: 90 },
    { id: 5, target: '10.90.4.20', jobName: 'Seattle Dev', startTime: 'Nov 12, 2021, 1:15 PM', subType: 'Database Scan', portCheck: true, auth: true, successful: false, object: 'Seattle Dev - database (autocreated)', queue: '1/2', score: 50 },
    { id: 6, target: '10.90.4.21', jobName: 'Miami Test', startTime: 'Dec 8, 2021, 11:20 AM', subType: 'Endpoint Scan', portCheck: false, auth: false, successful: true, object: 'Miami Test - endpoint (manual)', queue: '2/2', score: 70 },
    { id: 7, target: '10.90.4.22', jobName: 'San Francisco Prod', startTime: 'Nov 20, 2021, 4:30 PM', subType: 'Compliance Scan', portCheck: true, auth: true, successful: true, object: 'San Francisco Prod - linux (autocreated)', queue: '2/3', score: 85 },
    { id: 8, target: '10.90.4.23', jobName: 'Boston Dev', startTime: 'Oct 29, 2021, 2:00 PM', subType: 'Wireless Scan', portCheck: true, auth: true, successful: false, object: 'Boston Dev - wireless (manual)', queue: '0/1', score: 55 },
    { id: 9, target: '10.90.4.24', jobName: 'Dallas Prod', startTime: 'Sep 15, 2021, 9:45 AM', subType: 'Application Scan', portCheck: false, auth: false, successful: true, object: 'Dallas Prod - web (autocreated)', queue: '3/3', score: 75 },
    { id: 10, target: '10.90.4.25', jobName: 'Houston Test', startTime: 'Nov 18, 2021, 12:00 PM', subType: 'Penetration Test', portCheck: true, auth: true, successful: true, object: 'Houston Test - linux (manual)', queue: '1/2', score: 80 },
    { id: 11, target: '10.90.4.26', jobName: 'Phoenix Dev', startTime: 'Dec 5, 2021, 10:15 AM', subType: 'Cloud Security Scan', portCheck: false, auth: true, successful: false, object: 'Phoenix Dev - cloud (autocreated)', queue: '2/2', score: 65 },
    { id: 12, target: '10.90.4.27', jobName: 'Atlanta Prod', startTime: 'Oct 8, 2021, 8:30 AM', subType: 'IoT Device Scan', portCheck: true, auth: false, successful: true, object: 'Atlanta Prod - IoT (manual)', queue: '0/1', score: 70 },
    { id: 13, target: '10.90.4.28', jobName: 'Washington DC Test', startTime: 'Sep 25, 2021, 3:00 PM', subType: 'Network Device Scan', portCheck: true, auth: true, successful: true, object: 'Washington DC Test - network (autocreated)', queue: '3/3', score: 85 },
    { id: 14, target: '10.90.4.29', jobName: 'Denver Dev', startTime: 'Nov 15, 2021, 11:45 AM', subType: 'Security Audit', portCheck: false, auth: true, successful: false, object: 'Denver Dev - security (manual)', queue: '1/2', score: 60 },
    { id: 15, target: '10.90.4.30', jobName: 'Las Vegas Prod', startTime: 'Oct 12, 2021, 1:30 PM', subType: 'Asset Discovery Scan', portCheck: true, auth: true, successful: true, object: 'Las Vegas Prod - assets (autocreated)', queue: '2/3', score: 75 },
  ];
  
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white min-h-screen p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Divice42</h1>
        {/* <p className="text-gray-600 dark:text-gray-400">Home &gt; Discovery Scores</p> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <PieChartWithLegend data={discoverySuccessData} title="Discovery Success" />
        <PieChartWithLegend data={discoveryScoresData} title="Discovery Scores" />
        <PieChartWithLegend data={discoveryQueueData} title="Discovery Queue" />
      </div>

      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Select Discovery Score to view</h2>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <input type="text" placeholder="Search..." className="px-3 py-2 border rounded-l dark:bg-gray-700 dark:border-gray-600" />
            <button className="px-4 py-2 bg-blue-500 text-white rounded-r">Search</button>
          </div>
          <div className="flex items-center">
            <span className="mr-2">926 results (67934 total)</span>
            <select className="px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600">
              <option>Action</option>
            </select>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs uppercase bg-gray-200 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3">Discovery Target</th>
                <th className="px-6 py-3">Job Name</th>
                <th className="px-6 py-3">Job Start Time</th>
                <th className="px-6 py-3">Sub Type</th>
                <th className="px-6 py-3">Port Check</th>
                <th className="px-6 py-3">Auth</th>
                <th className="px-6 py-3">Discovery Successful</th>
                <th className="px-6 py-3">Object</th>
                <th className="px-6 py-3">Queue</th>
                <th className="px-6 py-3">Cumulative Score</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row) => (
                <tr key={row.id} className="border-b dark:border-gray-700">
                  <td className="px-6 py-4">{row.target}</td>
                  <td className="px-6 py-4">{row.jobName}</td>
                  <td className="px-6 py-4">{row.startTime}</td>
                  <td className="px-6 py-4">{row.subType}</td>
                  <td className="px-6 py-4">{row.portCheck ? '✓' : '✗'}</td>
                  <td className="px-6 py-4">{row.auth ? '✓' : '✗'}</td>
                  <td className="px-6 py-4">{row.successful ? '✓' : '✗'}</td>
                  <td className="px-6 py-4">{row.object}</td>
                  <td className="px-6 py-4">{row.queue}</td>
                  <td className="px-6 py-4">{row.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Discovery42;