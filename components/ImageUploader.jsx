'use client'

import React, { useState, useRef } from 'react';
import CancelButton from './CancelButton';

const ImageUploader = ({
  label = "Upload Image",
  onChange,
  accept = "image/png, image/jpeg, image/jpg, image/gif, image/webp",
  error,
  className = ""
}) => {

  const [file, setFile] = useState(null);
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef(null);

  const isValidFileType = (file) => {
    const accepted = accept.split(',').map(t => t.trim());

    return accepted.some(type =>
      type.includes('/*') ? file.type.startsWith(type.split('/')[0] + '/') : file.type === type
    );
  };

  const handleFile = (file) => {
    if (!isValidFileType(file)) return;
    setFile(file);
    onChange?.({ target: { files: [file] } });
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]);
  };

  const clear = (e) => {
    e.stopPropagation();
    setFile(null);
    inputRef.current.value = '';
    onChange?.({ target: { files: [] } });
  };

  const formatSize = (bytes) =>
    bytes < 1024 ? `${bytes} B` : `${(bytes / 1024).toFixed(1)} KB`;

  return (
    <div className={`w-full ${className}`}>
      {label && <label className="text-sm font-medium text-gray-700 block mb-2">{label}</label>}

      <div
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        className={`
          relative h-48 w-full flex flex-col items-center justify-center text-center rounded-lg border-2 border-dashed cursor-pointer
          transition-all duration-200
          ${dragOver ? 'bg-blue-50 border-blue-500' : error ? 'bg-red-50 border-red-400' : 'bg-gray-50 border-gray-300 hover:bg-gray-100 hover:border-gray-400'}
        `}
      >
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          className="hidden"
          onChange={(e) => e.target.files[0] && handleFile(e.target.files[0])}
        />

        {file ? (
          <>
            <p className="text-sm font-medium text-gray-700">{file.name}</p>
            <p className="text-xs text-gray-500">{file.type}</p>
            <p className="text-xs text-gray-400 mb-2">{formatSize(file.size)}</p>
            <CancelButton
              className='mt-2 cursor-pointer'
              size="sm"
              onClick={clear}
              label='Remove'
            />
          </>
        ) : (
          <>
            <img src="/uploadImageIcon.svg" alt="upload" className="w-8 h-8 mb-2" />
            <p className="text-sm font-medium text-gray-600">Click to upload or drag and drop</p>
            <p className="text-xs text-gray-400">PNG, JPG, GIF, WebP up to 10MB</p>
          </>
        )}
      </div>

      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default ImageUploader;
