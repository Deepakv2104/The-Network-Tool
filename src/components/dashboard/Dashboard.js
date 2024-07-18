import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';




const Dashboard = () => {
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
    navigate(`/meter/${label}`);
  };


  return (
    <div className="flex flex-col bg-gray-900">
      <nav className="bg-gray-800 text-white p-4">
        <div className="flex justify-between items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden block z-40">
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          <div className="text-xl font-bold">Network Tools Dashboard</div>
          <div></div>
        </div>
      </nav>

    <Outlet/>
    </div>
  );
};

export default Dashboard;
