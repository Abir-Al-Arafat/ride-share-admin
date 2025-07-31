import React from 'react';
import StatsCard from '../components/Dashboard/StatsCard';

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Rides',
      value: '1,234',
      icon: '🚗',
      trend: { value: '12% from last month', isPositive: true },
    },
    {
      title: 'Active Users',
      value: '845',
      icon: '👥',
      trend: { value: '8% from last month', isPositive: true },
    },
    {
      title: 'Scheduled Rides',
      value: '156',
      icon: '📅',
      trend: { value: '3% from last month', isPositive: false },
    },
    {
      title: 'Total Revenue',
      value: '$12,450',
      icon: '💰',
      trend: { value: '15% from last month', isPositive: true },
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Overview</h2>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <StatsCard
            key={index}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            trend={stat.trend}
          />
        ))}
      </div>

      {/* Recent Rides Table */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold">Recent Rides</h3>
          <button className="text-blue-500 hover:text-blue-700 text-sm font-medium">
            View All
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ride ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Driver</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pickup</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dropoff</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[1, 2, 3, 4, 5].map((item) => (
                <tr key={item} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#R{1000 + item}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Driver {item}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Location {item}A</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">School {item}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Completed
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <a href="#" className="text-blue-600 hover:text-blue-900">View</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
