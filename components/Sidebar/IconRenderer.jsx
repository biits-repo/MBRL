'use client';

import React from 'react';
import BrandLogo from '../../public/BrandLogo';

const IconRenderer = ({ icon, isSelected, isLogout }) => {
  const containerClasses = `w-8 h-8 flex items-center justify-center rounded-lg ${
    isSelected ? (isLogout ? "bg-red-600" : "bg-orange-600") : ""
  }`;

  if (typeof icon === 'string') {
    return (
      <div className={containerClasses}>
        <img
          src={icon}
          alt="icon"
          className={`w-4 h-4 ${
            isSelected
              ? 'brightness-0 invert'
              : isLogout && !isSelected
                ? 'brightness-0 saturate-100 invert-[0.2] sepia-[1] saturate-[5] hue-rotate-[315deg]'
                : 'opacity-60'
          }`}
        />
      </div>
    );
  }

  if (icon === BrandLogo) {
    return (
      <div className={containerClasses}>
        <BrandLogo width={16} height={16} />
      </div>
    );
  }

  return (
    <div className={containerClasses}>
      <icon
        size={16}
        className={
          isLogout && !isSelected
            ? "text-red-500"
            : isSelected
              ? "text-white"
              : "text-gray-400"
        }
      />
    </div>
  );
};

export default IconRenderer;
