import React from 'react';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: string;
  trend: {
    value: string;
    isPositive: boolean;
  };
  bgColor?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon, trend, bgColor = 'bg-white' }) => {
  return (
    <div className={`${bgColor} rounded-xl p-6 shadow-sm`}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="text-2xl font-bold mt-1">{value}</p>
          <p className={`text-sm mt-2 ${trend.isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {trend.isPositive ? '↑' : '↓'} {trend.value}
          </p>
        </div>
        <div className="text-3xl">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
