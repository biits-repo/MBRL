'use client';

import React from 'react';
import Link from 'next/link';
import IconRenderer from './IconRenderer';

const SidebarItem = ({ icon, label, to, isSelected, isLogout = false, onClick }) => (
  <Link href={to} onClick={onClick} className="block">
    <div className={`flex items-center gap-3 px-4 py-2 font-medium text-sm cursor-pointer rounded-lg transition-colors ${
      isSelected
        ? (isLogout ? 'bg-red-50 hover:bg-red-100' : 'bg-orange-50 hover:bg-orange-100')
        : 'hover:bg-gray-50'
    }`}>
      <IconRenderer icon={icon} isSelected={isSelected} isLogout={isLogout} />
      <span className={`font-semibold ${
        isSelected
          ? (isLogout ? 'text-red-700' : 'text-orange-700')
          : isLogout
            ? 'text-red-500'
            : 'text-gray-400'
      }`}>{label}</span>
    </div>
  </Link>
);

export default SidebarItem;
