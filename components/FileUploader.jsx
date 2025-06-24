'use client'

import React from 'react';
import { FiImage } from 'react-icons/fi';

const FileUploader = ({
  label = "Upload File",
  onChange,
  accept = "image/png, image/jpeg",
  multiple = false,
  error,
}) => {
  return (
    <>
      <label className="text-xs font-semibold text-gray-500 block mb-1">
        {label}
      </label>
      <label
        className={`w-full  h-50 border-2 border-dashed ${
          error ? 'border-red-500' : 'border-black/50'
        } rounded flex flex-col items-center justify-center gap-2 cursor-pointer select-none bg-gray-100 transition hover:border-black`}
      >
        <input
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={onChange}
          className="hidden"
        />
        <FiImage className="w-8 h-8 text-gray-400" />
        <span className="text-xs text-gray-400 select-none">
          Drag and drop {multiple ? 'files' : 'a file'} here or click to upload
        </span>
      </label>
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </>
  );
};

export default FileUploader;
