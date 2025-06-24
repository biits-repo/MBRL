'use client'

import React from "react";
import { FaAngleDown } from "react-icons/fa6";

const FormSelect = ({
  label,
  name,
  value,
  onChange,
  options = [],
  error,
  placeholder = "Select an option",
}) => {
  return (
    <div className="col-span-3">
      <label htmlFor={name} className="block text-xs font-medium text-gray-500 mb-1">
        {label}
      </label>

      <div className="relative">
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={`appearance-none w-full text-sm font-medium text-gray-500 px-4 py-2 focus:outline-none bg-gray-100 rounded-sm ${
            error ? "border border-red-500" : ""
          }`}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <FaAngleDown
          className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 pointer-events-none"
          size={16}
        />
      </div>

      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
};

export default FormSelect;
