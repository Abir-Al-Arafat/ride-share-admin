import React from "react";
import { FaUserCircle } from "react-icons/fa";

const Sidebar = () => {
  const navItems = [
    { icon: "🏠", label: "Dashboard", active: true },
    { icon: "🚗", label: "Rides", active: false },
    { icon: "👨‍✈️", label: "Drivers", active: false },
    { icon: "👪", label: "Parents", active: false },
    { icon: "📅", label: "Schedule", active: false },
    { icon: "⚙️", label: "Settings", active: false },
  ];

  return (
    <div className="w-64 bg-[#5B7A7D] text-white h-screen flex flex-col">
      <div className="p-6 text-xl font-bold border-b border-gray-600">
        KidsRide
      </div>
      <nav className="flex-1 p-4">
        <ul>
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`mb-2 ${
                item.active ? "bg-gray-700" : "hover:bg-gray-600"
              } rounded-lg`}
            >
              <a href="#" className="flex items-center p-3 rounded-lg">
                {item.icon}
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-600">
        <div className="flex items-center">
          <FaUserCircle className="w-8 h-8 mr-3" />
          <div>
            <div className="font-medium">Admin</div>
            <div className="text-sm text-gray-300">admin@kidsride.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
