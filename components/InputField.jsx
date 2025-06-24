'use client'

import React from "react";

const InputField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  placeholder = "",
}) => {
  return (
    <div className="col-span-3">
      <label htmlFor={name} className="block text-xs font-medium text-gray-500 mb-1">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full text-sm font-medium text-gray-500 px-4 py-2 focus:outline-none bg-gray-100 rounded-sm ${
          error ? "border border-red-500" : ""
        }`}
      />
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
};

export default InputField;
