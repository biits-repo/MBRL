import React from "react";
import {
  FaHome,
  FaUserAlt,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const SidebarItem = ({ icon, label }) => (
  <button className="flex items-center w-full gap-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition">
    {icon}
    <span>{label}</span>
  </button>
);

const Sidebar = ({ onLogout }) => {
  return (
    <div className="h-full w-64 bg-white shadow-lg flex flex-col justify-between rounded-2xl">

      <div>
        <div className="flex justify-center my-5">
          <div className="flex gap-2 items-center h-14 font-bold text-gray-700 border-b border-gray-200 dark:border-gray-700 px-4">
            <div className="text-end">
              MBRL <br /> Admin Portal
            </div>
            <div className="h-full">
              <img
                src="https://picsum.photos/200/300"
                alt="Logo"
                className="w-auto h-full object-contain"
              />
            </div>
          </div>
        </div>



        {/* Menu Items */}
        <nav className="px-4 space-y-2">
          <SidebarItem icon={<FaHome />} label="Dashboard" />
          <SidebarItem icon={<FaUserAlt />} label="Profile" />
          <SidebarItem icon={<FaCog />} label="Settings" />
        </nav>
      </div>

      {/* Bottom: Logout */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <button
          onClick={onLogout}
          className="flex items-center w-full gap-2 text-red-500 hover:text-red-600 transition"
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
