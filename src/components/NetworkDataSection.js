import React from 'react';

function NetworkDataSection({ data }) {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-md shadow-md mb-6">
      <h2 className="text-xl font-semibold mb-4">Network Data Section</h2>
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Device Name</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">IP Address</th>
              {/* Add more table headers as needed */}
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td className="border px-4 py-2">{item.deviceName}</td>
                <td className="border px-4 py-2">{item.status}</td>
                <td className="border px-4 py-2">{item.ipAddress}</td>
                {/* Add more table cells based on the data properties */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default NetworkDataSection;
