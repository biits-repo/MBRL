'use client'

import React from "react";

const Button = ({ children, onClick, type = "button", variant = "primary", className = "" }) => {
  const base = "px-4 py-2 rounded font-medium transition";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-black hover:bg-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant] } ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
