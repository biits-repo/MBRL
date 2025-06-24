'use client'

import React from "react";

const TextareaField = ({
  label,
  name,
  value,
  onChange,
  error,
  placeholder = "",
  rows = 4,
}) => {
  return (
    <div className="col-span-3">
      <label htmlFor={name} className="block text-xs font-medium text-gray-500 mb-1">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className={`w-full text-sm font-medium text-gray-500 px-4 py-2 focus:outline-none bg-gray-100 resize-none rounded-sm ${
          error ? "border border-red-500" : ""
        }`}
      />
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
};

export default TextareaField;
