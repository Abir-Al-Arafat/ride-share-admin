import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  
  const navItems = [
    { icon: "📊", label: "Dashboard", path: "/" },
    { icon: "📝", label: "Manage Rides", path: "/rides" },
    { icon: "🧑‍🤝‍🧑", label: "Manage Users", path: "/users" },
    { icon: "👨‍✈️", label: "Drivers", path: "/drivers" },
    { icon: "👪", label: "Parents", path: "/parents" },
    { icon: "🚌", label: "Vehicles", path: "/vehicles" },
    { icon: "📋", label: "Ride Requests", path: "/requests" },
    { icon: "📊", label: "Reports", path: "/reports" },
    { icon: "⚙️", label: "Settings", path: "/settings" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="w-64 bg-[#5B7A7D] text-white h-screen flex flex-col">
      <div className="p-6 text-xl font-bold border-b border-gray-600">
        KidsRide
      </div>
      <nav className="flex-1 p-4">
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className={`flex items-center p-3 rounded-lg mb-2 ${
                  isActive(item.path) ? 'bg-gray-700' : 'hover:bg-gray-600'
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-600">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center text-xl mr-3">
            👤
          </div>
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
