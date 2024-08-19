import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, Text } from 'recharts';
import { FaList, FaCompress, FaCog, FaSync, FaChevronDown } from 'react-icons/fa';

const FortinetStatus = () => {

  const cpuData = [{ name: 'Used', value: 8 }, { name: 'Remaining', value: 92 }];
  const memoryData = [{ name: 'Used', value: 30 }, { name: 'Remaining', value: 70 }];
  const diskData = [{ name: 'Used', value: 1 }, { name: 'Remaining', value: 99 }];

  const COLORS = ['#4CAF50', '#ddd']; // Colors for the chart

  const renderCustomLabel = ({ cx, cy }) => {
    return (
      <Text x={cx} y={cy} textAnchor="middle" dominantBaseline="central" className="text-xl font-bold" fill="#ffffff">
        {`${cpuData[0].value}%`}
      </Text>
    );
  };
  const chartData = {
    connectivity: [
      { name: 'Connected', value: 6, color: '#00A651' },
      { name: 'Disconnected', value: 0, color: '#ED1C24' }
    ],
    deviceConfig: [
      { name: 'In Sync', value: 6, color: '#00A651' },
      { name: 'Out of Sync', value: 0, color: '#ED1C24' }
    ],
    policyPackage: [
      { name: 'Modified', value: 3, color: '#ED1C24' },
      { name: 'Unmodified', value: 3, color: '#00A651' }
    ],
    fortiAP: [
      { name: 'Connected', value: 7, color: '#00A651' },
      { name: 'Disconnected', value: 0, color: '#ED1C24' }
    ],
    firmware: [
      { name: 'Up to Date', value: 4, color: '#00A651' },
      { name: 'Outdated', value: 2, color: '#ED1C24' }
    ],
    fortiGuard: [
      { name: 'Valid', value: 13, color: '#00A651' },
      { name: 'Expired', value: 3, color: '#ED1C24' },
      { name: 'Not Installed', value: 3, color: '#FFF200' }
    ],
    hardwareVendor: [
      { name: 'Fortinet', value: 90, color: '#00A651' },
      { name: 'Other', value: 13, color: '#ED1C24' }
    ]
  };
  const renderDonutChart = (data, label) => (
    <PieChart width={80} height={80}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        innerRadius={30}
        outerRadius={40}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
        labelLine={false}
        label={renderCustomLabel}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );

  const renderDonutChartWithLegend = (data, total) => (
    <div className="flex justify-center items-center h-full w-full">
      <PieChart width={400} height={200}>
        <Pie
          data={data}
          cx={100}
          cy={100}
          innerRadius={60}  // Donut effect
          outerRadius={80}
          dataKey="value"
          startAngle={90}
          endAngle={-270}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
        <Legend
          layout="vertical"
          align="right"
          verticalAlign="middle"
          wrapperStyle={{ color: 'white', marginLeft: '20px' }}
        />
        {/* Centered label with total devices */}
        <text
          x={100}
          y={100}
          textAnchor="middle"
          dominantBaseline="middle"
          className="text-xl font-bold"
          fill="white"  // Set the text color to white
        >
          {total} Devices
        </text>

      </PieChart>
    </div>
  );

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-4">FORTINET</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* System Information */}
        <div className="p-4 bg-gray-800 text-white rounded-lg shadow-md cursor-pointer">
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-bold">System Information</h2>
            <div className="flex space-x-2">
              <FaList className="text-sm" />
              <FaCompress className="text-sm" />
              <FaCog className="text-sm" />
              <FaSync className="text-sm" />
              <FaChevronDown className="text-sm" />
            </div>
          </div>
          <table className="text-sm w-full">
            <tbody>
              <tr>
                <td className="pr-2 text-left">Host Name:</td>
                <td className="text-left">FMG-3000G</td>
              </tr>
              <tr>
                <td className="pr-2 text-left">Serial Number:</td>
                <td className="text-left">FMG3KF222000464</td>
              </tr>
              <tr>
                <td className="pr-2 text-left">Firmware Version:</td>
                <td className="text-left">v7.4.1-build2908</td>
              </tr>
              <tr>
                <td className="pr-2 text-left">System Time:</td>
                <td className="text-left">Mon Oct 30 13:51:10 2023</td>
              </tr>
              <tr>
                <td className="pr-2 text-left">System Configuration:</td>
                <td className="text-left">Last Backup: 2023-10-28 04:16:55</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* License Information */}
        <div className="p-4 bg-gray-800 text-white rounded-lg shadow-md cursor-pointer">
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-bold">License Information</h2>
            <div className="flex space-x-2">
              <FaList className="text-sm" />
              <FaCompress className="text-sm" />
              <FaCog className="text-sm" />
              <FaSync className="text-sm" />
              <FaChevronDown className="text-sm" />
            </div>
          </div>
          <table className="text-sm w-full">
            <tbody>
              <tr>
                <td className="pr-2 text-left">FortiCloud:</td>
                <td className="text-left">Registered</td>
              </tr>
              <tr>
                <td className="pr-2 text-left">VM License:</td>
                <td className="text-left">Not Licensed</td>
              </tr>
              <tr>
                <td className="pr-2 text-left">Secure DNS Service:</td>
                <td className="text-left">Not Licensed</td>
              </tr>
              <tr>
                <td className="pr-2 text-left">Support Contract:</td>
                <td className="text-left">Valid</td>
              </tr>
              <tr>
                <td className="pr-2 text-left">Devices/VDOMs:</td>
                <td className="text-left">12 / 4000 Used</td>
              </tr>
              <tr>
                <td className="pr-2 text-left">FortiAPs:</td>
                <td className="text-left">7</td>
              </tr>
              <tr>
                <td className="pr-2 text-left">FortiExtender:</td>
                <td className="text-left">13</td>
              </tr>
              <tr>
                <td className="pr-2 text-left">FortiTokens:</td>
                <td className="text-left">10</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* System Resources */}
        <div className="p-4 bg-gray-800 text-white rounded-lg shadow-md cursor-pointer">
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-bold">System Resources</h2>
            <div className="flex space-x-2">
              <FaList className="text-sm" />
              <FaCompress className="text-sm" />
              <FaCog className="text-sm" />
              <FaSync className="text-sm" />
              <FaChevronDown className="text-sm" />
            </div>
          </div>
          <div className="flex justify-around mt-4">
            <div className="text-center">
              {renderDonutChart(cpuData)}
              <div className="text-sm mt-2">CPU Usage</div>
            </div>
            <div className="text-center">
              {renderDonutChart(memoryData)}
              <div className="text-sm mt-2">Memory Usage</div>
            </div>
            <div className="text-center">
              {renderDonutChart(diskData)}
              <div className="text-sm mt-2">Disk Usage</div>
            </div>
          </div>
        </div>

        {/* Unit Operation */}
        <div className="p-4 bg-gray-800 text-white rounded-lg shadow-md cursor-pointer">
          <h2 className="font-bold">Unit Operation</h2>
          <div className="text-center mt-4">
            <div className="text-2xl font-bold">FORTINET</div>
            <div className="text-xl">FortiManager-3000G</div>
          </div>
        </div>

        {/* Alert Message Console */}
        <div className="p-4 bg-gray-800 text-white rounded-lg shadow-md cursor-pointer">
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-bold">Alert Message Console</h2>
            <div className="flex space-x-2">
              <FaList className="text-sm" />
              <FaCompress className="text-sm" />
              <FaCog className="text-sm" />
              <FaSync className="text-sm" />
              <FaChevronDown className="text-sm" />
            </div>
          </div>
          <div className="overflow-x-auto mt-2">
            <table className="min-w-full text-sm">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left">Time</th>
                  <th className="px-4 py-2 text-left flex items-center">
                    Message
                    <FaCog className="ml-2 text-xs" />
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-t border-gray-700 px-2 py-2">Oct 30, 12:46:35</td>
                  <td className="border-t border-gray-700 px-2 py-2">login failed from GUI</td>
                </tr>
                <tr>
                  <td className="border-t border-gray-700 px-4 py-2">Oct 30, 12:46:23</td>
                  <td className="border-t border-gray-700 px-4 py-2">login failed from GUI</td>
                </tr>
                <tr>
                  <td className="border-t border-gray-700 px-4 py-2">Oct 30, 12:46:17</td>
                  <td className="border-t border-gray-700 px-4 py-2">login failed from GUI</td>
                </tr>
                <tr>
                  <td className="border-t border-gray-700 px-4 py-2">Oct 30, 11:38:05</td>
                  <td className="border-t border-gray-700 px-4 py-2">login failed from GUI</td>
                </tr>
                <tr>
                  <td className="border-t border-gray-700 px-4 py-2">Oct 30, 11:37:39</td>
                  <td className="border-t border-gray-700 px-4 py-2">login failed from GUI</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="text-right text-xs text-gray-400 mt-2">1/10</div>
        </div>

        {/* Connectivity */}
        <div className="p-4 bg-gray-800 text-white rounded-lg shadow-md cursor-pointer">
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-bold">Connectivity</h2>
            <div className="flex space-x-2">
              <FaList className="text-sm" />
              <FaCompress className="text-sm" />
              <FaCog className="text-sm" />
              <FaSync className="text-sm" />
              <FaChevronDown className="text-sm" />
            </div>
          </div>
          {renderDonutChartWithLegend(chartData.connectivity, 6)}
          <p className="text-center mt-2 text-white">6 Devices</p>
        </div>

        {/* Device Config Status */}
        <div className="p-4 bg-gray-800 text-white rounded-lg shadow-md cursor-pointer">
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-bold">Device Config Status</h2>
            <div className="flex space-x-2">
              <FaList className="text-sm" />
              <FaCompress className="text-sm" />
              <FaCog className="text-sm" />
              <FaSync className="text-sm" />
              <FaChevronDown className="text-sm" />
            </div>
          </div>
          {renderDonutChartWithLegend(chartData.deviceConfig, 6)}
          <p className="text-center mt-2 text-white">6 Devices and VDOMs</p>
        </div>

        {/* Policy Package Status */}
        <div className="p-4 bg-gray-800 text-white rounded-lg shadow-md cursor-pointer">
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-bold">Policy Package Status</h2>
            <div className="flex space-x-2">
              <FaList className="text-sm" />
              <FaCompress className="text-sm" />
              <FaCog className="text-sm" />
              <FaSync className="text-sm" />
              <FaChevronDown className="text-sm" />
            </div>
          </div>
          {renderDonutChartWithLegend(chartData.policyPackage, 6)}
          <p className="text-center mt-2 text-white">6 VDOMs</p>
        </div>

        {/* FortiAP Status */}
        <div className="p-4 bg-gray-800 text-white rounded-lg shadow-md cursor-pointer">
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-bold">FortiAP Status</h2>
            <div className="flex space-x-2">
              <FaList className="text-sm" />
              <FaCompress className="text-sm" />
              <FaCog className="text-sm" />
              <FaSync className="text-sm" />
              <FaChevronDown className="text-sm" />
            </div>
          </div>
          {renderDonutChartWithLegend(chartData.fortiAP, 7)}
        </div>

        {/* Firmware Status */}
        <div className="p-4 bg-gray-800 text-white rounded-lg shadow-md cursor-pointer">
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-bold">Firmware Status</h2>
            <div className="flex space-x-2">
              <FaList className="text-sm" />
              <FaCompress className="text-sm" />
              <FaCog className="text-sm" />
              <FaSync className="text-sm" />
              <FaChevronDown className="text-sm" />
            </div>
          </div>
          {renderDonutChartWithLegend(chartData.firmware, 6)}
        </div>

        {/* FortiGuard License Status */}
        <div className="p-4 bg-gray-800 text-white rounded-lg shadow-md cursor-pointer">
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-bold">FortiGuard License Status</h2>
            <div className="flex space-x-2">
              <FaList className="text-sm" />
              <FaCompress className="text-sm" />
              <FaCog className="text-sm" />
              <FaSync className="text-sm" />
              <FaChevronDown className="text-sm" />
            </div>
          </div>
          {renderDonutChartWithLegend(chartData.fortiGuard, 19)}
        </div>

        {/* Hardware Vendor */}
        <div className="p-4 bg-gray-800 text-white rounded-lg shadow-md cursor-pointer">
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-bold">Hardware Vendor</h2>
            <div className="flex space-x-2">
              <FaList className="text-sm" />
              <FaCompress className="text-sm" />
              <FaCog className="text-sm" />
              <FaSync className="text-sm" />
              <FaChevronDown className="text-sm" />
            </div>
          </div>
          {renderDonutChartWithLegend(chartData.hardwareVendor, 103)}
        </div>
      </div>
    </div>
  );
};



export default FortinetStatus;
