'use client';

import React, { useState } from 'react';
import SidebarItem from './SidebarItem';
import { menuGroups } from './menuConfig';
import Divider from '../Divider';

const Sidebar = ({ onLogout }) => {
  const [selectedMenu, setSelectedMenu] = useState('/home');

  return (
    <div className="h-full w-64 bg-white shadow-lg flex flex-col justify-between rounded-2xl">
      <div>
        <div className="flex justify-center mt-5 gap-3">
          <div className="text-end font-bold text-gray-600">MBRL <br />Admin Portal</div>
          <img src="/brandLogo.png" alt="Logo" className="h-10" />
        </div>
        <Divider />

        {menuGroups.map((group, idx) => (
          <div key={idx} className="px-2 space-y-1 mb-6">
            {group.title && (
              <>
                <div className="text-center text-gray-600 font-semibold">{group.title}</div>
                <Divider />
              </>
            )}
            {group.items.map((item) => (
              <SidebarItem
                key={item.to}
                {...item}
                isSelected={selectedMenu === item.to}
                onClick={() => {
                  item.isLogout
                    ? onLogout?.()
                    : setSelectedMenu(item.to);
                }}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="p-4">
        <div
          className="w-full rounded-xl p-5 text-white overflow-hidden"
          style={{
            backgroundImage: "url('/footerCardBg.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="flex flex-col gap-5">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-[#FF5B00] font-bold text-xl select-none">?</span>
            </div>
            <div>
              <h6 className="font-bold text-lg">Need help?</h6>
              <p className="text-xs">Please check our docs</p>
            </div>
            <button className="mt-auto bg-white text-gray-900 font-bold text-xs rounded-lg py-2 w-full">
              DOCUMENTATION
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
