import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm p-4 flex items-center justify-between">
      <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="🔍 Search..."
            className="pl-4 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
          🔔
        </button>
        <div className="flex items-center space-x-2 cursor-pointer">
          <span className="text-2xl">👤</span>
          <span className="font-medium">Admin</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
