'use client'

import React from "react";
import { FiSearch, FiUser, FiSettings, FiBell } from "react-icons/fi";

const Header = () => {
  return (
    <header className="bg-gray-50 space-y-6 font-sans">
      <nav className="flex items-center justify-between">
        <div className="text-gray-400 font-semibold select-none">
          Good Morning, Ahmed
        </div>

        <div className="flex items-center space-x-6 text-gray-400">
          <div className="relative">
            <FiSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Type here..."
              className="pl-10 pr-4 py-1.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm w-56 bg-white"
            />
          </div>

          <button className="flex items-center space-x-1 text-sm hover:text-orange-500 transition-colors">
            <FiUser className="text-lg" />
            <span>Sign In</span>
          </button>

          <button className="hover:text-orange-500 transition-colors">
            <FiSettings className="text-lg" />
          </button>

          <button className="relative hover:text-orange-500 transition-colors">
            <FiBell className="text-lg" />
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-orange-500" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
