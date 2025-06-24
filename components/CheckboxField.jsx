'use client';

import React from 'react';
import { FaCheck } from 'react-icons/fa';

const CheckboxField = ({
  label,
  name,
  checked,
  onChange,
  error,
  disabled = false,
}) => {
  return (
    <div>
      <div className="flex items-center justify-between w-full">
        <span className="text-sm font-medium text-gray-500">{label}</span>
        <div
         className={`w-6 h-6 rounded bg-gray-200 flex items-center justify-center cursor-pointer ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={() => !disabled && onChange({ target: { name, checked: !checked } })}
        >
          {checked && <FaCheck className="text-orange-600 text-sm" />}
        </div>
      </div>

      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
};

export default CheckboxField;
