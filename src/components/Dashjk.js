import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DeviceCommandsComponent from './DeviceCommandsComponent';
import QueryInterface from './QueryInterface';
import NetworkDataSection from './NetworkDataSection';
import ShowResults from './ShowResults';
import ClientOnboarding from './ClientOnBoarding';

const tasks = [
  { label: 'Certs', value: 'certs' },
  { label: 'Pre-post checks', value: 'pre-post-checks' },
  { label: 'Tacas updates', value: 'tacas-updates' },
  { label: 'ACI Management', value: 'aci-management' },
];

const dummyData = [
  { id: 1, deviceName: 'Router 1', status: 'Online', ipAddress: '192.168.1.1' },
  { id: 2, deviceName: 'Switch 1', status: 'Offline', ipAddress: '192.168.1.2' },
  { id: 3, deviceName: 'Firewall 1', status: 'Online', ipAddress: '192.168.1.3' },
  // Add more dummy data items as needed
];

function Dashjk() {
  const [selectedTool, setSelectedTool] = useState('');
  const [selectedTask, setSelectedTask] = useState('');
  const [showQueryInterface, setShowQueryInterface] = useState(false);
  const [results, setResults] = useState(null);

  const toggleQueryInterface = () => {
    setShowQueryInterface(!showQueryInterface);
  };
  const handleQuerySubmit = (query) => {
    console.log(`Query submitted for ${selectedTool}: ${query}`);
    // Implement the logic to process the query here
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-6 text-white">Network Tools Dashboard</h1>
      <Link to="/ai-feature" className="block mb-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mr-4">
          AI Feature
        </button>
      </Link>

      <DeviceCommandsComponent className="mb-8" />

      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mr-4" onClick={toggleQueryInterface}>
        {showQueryInterface ? 'Hide' : 'Show'} Advanced Tool Selection
      </button>

      {/* Other components and buttons */}

      {/* Conditional Rendering of Query Interface */}
      {showQueryInterface && (
        <div className="bg-gray-800 p-6 rounded-md shadow-md mb-8">
          <select className="w-full bg-gray-900 border border-gray-600 rounded-md p-2 text-white mb-4" value={selectedTool} onChange={(e) => setSelectedTool(e.target.value)}>
            {/* Tool options */}
          </select>
          <select className="w-full bg-gray-900 border border-gray-600 rounded-md p-2 text-white mb-4" value={selectedTask} onChange={(e) => setSelectedTask(e.target.value)}>
            <option value="">Select a Task</option>
            {tasks.map((task) => (
              <option value={task.value} key={task.value}>{task.label}</option>
            ))}
          </select>
          {selectedTool && selectedTask && <QueryInterface tool={selectedTool} onQuerySubmit={handleQuerySubmit} />}
        </div>
      )}

      <NetworkDataSection data={dummyData} className="mb-8" />

      {results && <ShowResults data={results} />}

      <ClientOnboarding className="mb-8" />
    </div>
  );
}

export default Dashjk;
