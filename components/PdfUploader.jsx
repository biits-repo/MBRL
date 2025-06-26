'use client'

import React, { useState, useRef } from 'react';
import FileReview from './FilePreview';

const PdfUploader = ({
    file,
    setFile,
    onChange,
    accept = "application/pdf",
    error,
    className = "",
    uploadingFile,
    setUploadingFile
}) => {
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

    return (
        <div className={`w-9/10 ${className}`}>
            <div
                onClick={() => inputRef.current?.click()}
                onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                onDragLeave={() => setDragOver(false)}
                onDrop={handleDrop}
                className={`
          relative h-36 w-full flex flex-col items-center justify-center text-center cursor-pointer
          transition-all duration-200
          ${dragOver ? 'bg-blue-50 border-blue-500' : error ? 'bg-red-50 border-red-400' : 'border-gray-300 hover:bg-gray-100 hover:border-gray-400'}
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
                    <FileReview
                        file={file}
                        onRemove={clear}
                        uploadingFile={uploadingFile}
                        setUploadingFile={setUploadingFile}
                    />
                ) : (
                    <>
                        <img src='/pdfIcon.svg' alt="upload pdf" className="w-12 h-12 mb-2" />
                        <p className="text-sm font-medium text-gray-600">Click to upload or drag and drop</p>
                        <p className="text-xs text-gray-400">PDF files only, max 10MB</p>
                        <button
                            className="bg-orange-600 text-white text-xs mt-3 py-2 px-6 rounded-full font-semibold hover:bg-orange-700 transition cursor-pointer"
                        >
                            Browse Files
                        </button>
                    </>
                )}
            </div>

            {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </div>
    );
};

export default PdfUploader;
