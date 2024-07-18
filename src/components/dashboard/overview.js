import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import GaugeChart from 'react-gauge-chart';
import ForceGraph2D from 'react-force-graph-2d';
import DeviceCommandsComponent from '../DeviceCommandsComponent';
import QueryInterface from '../QueryInterface';
import NetworkDataSection from '../NetworkDataSection';
import ClientOnboarding from '../ClientOnBoarding';
import ShowResults from '../ShowResults';
import Modal from '../Modal';



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
const Overview = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [showQueryInterface, setShowQueryInterface] = useState(false);
    const [selectedTool, setSelectedTool] = useState('');
    const [selectedTask, setSelectedTask] = useState('');
    const [results, setResults] = useState(null);
    const meterData = [
      { label: 'Device42 Status', value: Math.random() },
      { label: 'Solarwinds Status', value: Math.random() },
      { label: 'F5s Status', value: Math.random() },
      { label: 'Fotinet Status', value: Math.random() },
      { label: 'Meter 5', value: Math.random() },
      { label: 'Meter 6', value: Math.random() },
    ];
    
    const toggleQueryInterface = () => {
      setShowQueryInterface(!showQueryInterface);
    };
  
    const handleQuerySubmit = (query) => {
      console.log(`Query submitted for ${selectedTool}: ${query}`);
      // Implement the logic to process the query here
    };
    const handleMeterClick = (label) => {
      navigate(`/dashboard/meter/${label}`);
    };
  
  return (
    <div className="flex-1 flex flex-col z-30">
    <div className="flex flex-wrap justify-center p-4">
      {meterData.map((meter, index) => (
        <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2">
          <div className="p-4 bg-gray-800 text-white rounded-lg shadow-md cursor-pointer"
            onClick={() => handleMeterClick(meter.label)} >
            <h2 className="text-lg font-semibold mb-4">{meter.label}</h2>
            <GaugeChart
              id={`gauge-chart-${index}`}
              nrOfLevels={20}
              colors={['#4CAF50', '#FFC107']}
              arcWidth={0.3}
              percent={meter.value}
            />
          </div>
        </div>
      ))}
    </div>

    {/* Side by side grid cards */}
    <div className="flex flex-wrap justify-center mb-8">
      <div className="w-full md:w-1/2 p-2">
        <DeviceCommandsComponent />
      </div>
      <div className="w-full md:w-1/2 p-2">
        <NetworkDataSection data={dummyData} />
        <button className="bg-gray-800 hover:bg-gray-700 text-blue-500 font-bold py-2 px-4 rounded-md border border-blue-500 mr-4" onClick={toggleQueryInterface}>
          {showQueryInterface ? 'Hide' : 'Show'} Advanced Tool Selection
        </button>
      </div>
    </div>

    {/* Additional components */}

    <Modal isOpen={showQueryInterface} onClose={toggleQueryInterface}>          <div className="bg-gray-800 p-6 rounded-md shadow-md">
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
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md mt-4" onClick={toggleQueryInterface}>
          Close
        </button>
      </div>
    </Modal>

    {results && <ShowResults data={results} />}

    <div className="mb-8" style={{ margin: '20px' }}>
<ClientOnboarding />
</div>

  </div>
  )
}

export default Overview