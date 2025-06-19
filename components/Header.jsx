import React from "react";
import { FaBell, FaCog, FaChevronDown } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 shadow-md rounded-xl">
      
      <div className="text-lg font-semibold text-gray-800 dark:text-gray-100">
        Welcome, JohnDoe
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <button className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
            Options
            <FaChevronDown className="text-xs" />
          </button>
        </div>

        <input
          type="text"
          placeholder="Search..."
          className="px-3 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
        />

        <button className="px-4 py-1 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
          Sign In
        </button>

        <button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
          <FaCog size={18} />
        </button>

        <button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white relative">
          <FaBell size={18} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
