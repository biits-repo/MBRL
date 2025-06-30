import React, { useState } from 'react';
import { IoDocumentText, IoClose } from 'react-icons/io5';
import axios from 'axios';
import { showSuccessAlert } from './successAlert';
import { showErrorAlert } from './errorAlert';
import { showWarningAlert } from './warningAlert';

const formatSize = (bytes) =>
  bytes < 1024 ? `${bytes} B` :
    bytes < 1024 * 1024 ? `${(bytes / 1024).toFixed(1)} KB` :
      `${(bytes / 1024 / 1024).toFixed(1)} MB`;

const FileReview = ({ file, onRemove, uploadingFile, setUploadingFile, setPublishedCount }) => {

  if (!file) {
    showWarningAlert('No file selected.');
    return;
  };

  const [uploadProgress, setUploadProgress] = useState(0);

  const uploadFile = async (e) => {
    e.stopPropagation();

    const formData = new FormData();
    formData.append('file', file);

    setUploadingFile(true);
    setUploadProgress(0);

    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/upload_zip_file/',
        formData,
        {
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setUploadProgress(percentCompleted);
          },
        }
      );

      const filename = response?.data?.filename || file.name;

      if (response?.statusText === 'OK') {
        setPublishedCount((prevCount) => prevCount + 1);
      }

      showSuccessAlert(filename);
    } catch (error) {
      const message = error.response?.data?.detail || error.message;
      showErrorAlert(message);
    } finally {
      setUploadingFile(false);
      onRemove();
      setUploadProgress(0);
    }
  };

  return (
    <>
      {uploadingFile ? (
        <div className="flex flex-col items-center justify-center space-y-4 p-6 text-center w-full">
          <img src='/uploadLoader.gif' alt="upload-spinner" className="w-18 h-18 mb-2" />

          <p className="text-sm font-bold text-gray-600">
            Processing file....  This may take a while.
          </p>

          <div className="w-full max-w-sm bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-orange-600 h-full rounded-full transition-all duration-200"
              style={{ width: `${uploadProgress}%` }}
            ></div>
          </div>

          <p className="text-sm text-gray-500">
            {uploadProgress}% completed
          </p>
        </div>
      ) : (
        <div className="bg-white rounded-lg p-6 border border-gray-200 w-full">
          <div className="flex items-center justify-between bg-gray-50 rounded-lg p-4 mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                <IoDocumentText className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-medium text-gray-800">{file.name}</div>
                <div className="text-sm text-gray-500">{formatSize(file.size)}</div>
              </div>
            </div>

            <button className="p-1 hover:bg-gray-200 rounded-full transition-colors cursor-pointer" onClick={onRemove}>
              <IoClose className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          <div className="text-center">
            <button
              onClick={uploadFile}
              disabled={uploadingFile}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-colors cursor-pointer"
            >
              Upload File
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FileReview;
