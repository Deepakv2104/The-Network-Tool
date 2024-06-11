import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold">Dashboard</div>
          <div>
            <button className="text-white hover:text-gray-300 mr-4">Settings</button>
            <button className="text-white hover:text-gray-300">Logout</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
