import React from "react";
import { HiOutlineTrash } from "react-icons/hi";

const sizeClasses = {
  sm: "py-1.5 px-3 text-xs",
  md: "py-2 px-4 text-sm",
  lg: "py-2.5 px-5 text-base",
};

const CancelButton = ({
  size = "md",
  label = "Cancel",
  icon,
  className = "",
  ...props
}) => {
  return (
    <button
      type="button"
      className={`flex items-center rounded-md bg-red-600 border border-transparent text-white shadow-sm transition-all hover:bg-red-700 focus:bg-red-700 active:bg-red-800 hover:shadow-lg focus:shadow-none active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {icon !== null ? icon || <HiOutlineTrash className="w-4 h-4 mr-1.5" /> : null}
      {label}
    </button>
  );
};

export default CancelButton;
