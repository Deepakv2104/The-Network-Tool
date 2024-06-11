import React from 'react';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <div className={`bg-gray-900 h-screen w-64 ${isOpen ? 'block' : 'hidden'} md:block`}>
      <div className="text-white text-xl font-bold p-4">Menu</div>
      <ul>
        <li className="text-white p-4 hover:bg-gray-800">Dashboard</li>
        <li className="text-white p-4 hover:bg-gray-800">Reports</li>
        <li className="text-white p-4 hover:bg-gray-800">Analytics</li>
        <li className="text-white p-4 hover:bg-gray-800">Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
