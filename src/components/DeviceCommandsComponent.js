import React, { useState } from 'react';

const DeviceCommandsComponent = () => {
  const [ipAddresses, setIpAddresses] = useState('');
  const [deviceType, setDeviceType] = useState('');
  const [commands, setCommands] = useState('');

  const handleExecute = () => {
    console.log("Executing commands on:", ipAddresses, "Device Type:", deviceType, "Commands:", commands);
    // Implement the logic to execute commands here
  };

  return (
    <div className="bg-gray-800 text-white p-6 rounded-md shadow-md">
      <h2 className="text-2xl mb-4">Device Command Execution</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="ipAddresses" className="block mb-1">IP Addresses</label>
          <input
            type="text"
            id="ipAddresses"
            className="w-full px-3 py-2 rounded-md bg-gray-700 text-white outline-none focus:bg-gray-600"
            value={ipAddresses}
            onChange={(e) => setIpAddresses(e.target.value)}
            placeholder="Enter IP addresses separated by commas"
          />
        </div>
        <div>
          <label htmlFor="deviceType" className="block mb-1">Device Type</label>
          <select
            id="deviceType"
            className="w-full px-3 py-2 rounded-md bg-gray-700 text-white outline-none focus:bg-gray-600"
            value={deviceType}
            onChange={(e) => setDeviceType(e.target.value)}
          >
            <option value="">Select Device Type</option>
            <option value="router">Router</option>
            <option value="switch">Switch</option>
            <option value="firewall">Firewall</option>
            {/* Add more device types as needed */}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="commands" className="block mb-1">Commands</label>
        <textarea
          id="commands"
          className="w-full px-3 py-2 rounded-md bg-gray-700 text-white outline-none focus:bg-gray-600"
          value={commands}
          onChange={(e) => setCommands(e.target.value)}
          placeholder="Enter commands separated by commas"
          rows={4}
        ></textarea>
      </div>
      <button
className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md border border-blue-500 mt-4"
onClick={handleExecute}
>
Execute Commands
</button>


    </div>
  );
};

export default DeviceCommandsComponent;
