'use client'

import React, { useState } from 'react'
import { FaGlobe, FaUsers, FaFileAlt } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import InputField from '@/components/InputField';
import SelectField from '@/components/SelectField';
import TextareaField from '@/components/TextareaField';
import KeyValueRow from '@/components/KeyValueRow';
import Divider from '@/components/Divider';
import CheckboxField from '@/components/CheckboxField';
import ImageUploader from '@/components/ImageUploader';
import PdfUploader from '@/components/PdfUploader';
import axios from 'axios';

const page = () => {

  const [file, setFile] = useState(null);
  const [uploadingFile, setUploadingFile] = useState(false);
  const [showPublishedFile, setShowPublishedFile] = useState(false);


  const handleShowPublishedFile = () => {
    setShowPublishedFile(!showPublishedFile);
  };


  const downloadTranscriptFile = async (book_name) => {
    const url = 'http://127.0.0.1:8000/api/get-pdf/';

    try {
      const response = await axios.post(
        url,
        { isbn_number: 9877899981 },
        { responseType: 'blob' }
      );

      const blob = new Blob([response.data], { type: 'application/pdf' });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = `${book_name}_transcript.pdf`;
      link.click();
    } catch (error) {
      console.error('Error downloading transcript PDF:', error);
    }
  };


  const downloadAudioFile = async (book_name) => {
    const url = 'http://127.0.0.1:8000/api/get-audio/';

    try {
      const response = await axios.post(
        url,
        { isbn_number: '9877899981' },
        { responseType: 'blob' } 
      );

      const blob = new Blob([response.data], { type: 'audio/mpeg' });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = `${book_name}_audio.mp3`;
      link.click();
    } catch (error) {
      console.error('Error downloading audio file:', error);
    }
  };


  return (
    <div>

      <section className="grid grid-cols-12 gap-6 mb-5">
        <div className="col-span-12 sm:col-span-6 lg:col-span-4 bg-white rounded-xl shadow px-6 py-4 w-full">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-sm text-gray-400 mb-1">All Users</div>
              <div className="flex items-center space-x-1 font-bold text-xl">
                <span>2,300</span>
                <span className="text-green-600 font-semibold text-base">+5%</span>
              </div>
            </div>
            <div className="flex items-center justify-center bg-orange-600 rounded-lg w-12 h-12">
              <FaGlobe className="text-white" size={22} />
            </div>
          </div>
        </div>

        <div className="col-span-12 sm:col-span-6 lg:col-span-4 bg-white rounded-xl shadow px-6 py-4 w-full">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-sm text-gray-400 mb-1">New Book uploads</div>
              <div className="flex items-center space-x-1 font-bold text-xl">
                <span>+3,052</span>
                <span className="text-red-600 font-semibold text-base">-14%</span>
              </div>
            </div>
            <div className="flex items-center justify-center bg-orange-600 rounded-lg w-12 h-12">
              <FaFileAlt className="text-white" size={22} />
            </div>
          </div>
        </div>

        <div className="col-span-12 sm:col-span-6 lg:col-span-4 bg-white rounded-xl shadow px-6 py-4 w-full">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-sm text-gray-400 mb-1">Total Visitors</div>
              <div className="flex items-center space-x-1 font-bold text-xl">
                <span>173,000</span>
                <span className="text-green-600 font-semibold text-base">+8%</span>
              </div>
            </div>
            <div className="flex items-center justify-center bg-orange-600 rounded-lg w-12 h-12">
              <FaUsers className="text-white" size={22} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-xl shadow p-4 flex justify-between py-8 mb-5 mx-auto">
        <button className="bg-slate-800 text-white rounded px-4 py-1 font-semibold">0 Processing</button>
        <div className="flex gap-3 items-center">
          <button className="bg-slate-800 text-white rounded px-4 py-1 font-semibold">2 Drafts</button>
          <button
            onClick={handleShowPublishedFile}
            className="bg-green-600 text-white rounded px-4 py-1 font-semibold"
          >
            50 Published
          </button>
        </div>
      </section>

      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Upload Book
      </h2>

      <section className="mx-auto bg-gray-100 rounded-xl p-6 grid grid-cols-12 gap-6 mb-5">
        <div className="col-span-8 lg:col-span-8 border-2 border-dashed border-gray-400 rounded-lg flex flex-col items-center justify-center py-14 space-y-4">
          <PdfUploader
            file={file}
            setFile={setFile}
            uploadingFile={uploadingFile}
            setUploadingFile={setUploadingFile}
          />
        </div>

        {uploadingFile ?
          <aside className="col-span-4 flex flex-col h-full bg-white shadow-lg rounded-lg border border-gray-200 p-5">
            <div className="text-lg font-semibold text-gray-600 mb-5">
              Detected Pages
            </div>

            <div className='mb-5'>
              <KeyValueRow labelKey='Pages Uploaded' labelValue='45 of 500' />
              <KeyValueRow labelKey='File Size' labelValue='25.5 MB' />
            </div>

            <Divider />

            <CheckboxField
              name="newsletter"
              label="Create Audio Transcript"
              checked={true}
              onChange={() => { }}
            />
          </aside> :
          <aside className="col-span-4 flex flex-col h-full bg-white shadow-lg rounded-lg border border-gray-200 p-5">
            <div className="text-lg font-semibold text-gray-600 mb-5">
              Detected Pages
            </div>

            <div className='mb-5'>
              <KeyValueRow labelKey='Pages Uploaded' labelValue='45 of 500' />
              <KeyValueRow labelKey='File Size' labelValue='25.5 MB' />
            </div>

            <Divider />
            <KeyValueRow labelKey='Recommended Resolution' labelValue='500 dpi' />
          </aside>
        }
      </section>

      <div className="flex gap-4 pt-2 mb-5">
        <button
          type="button"
          disabled
          className="flex-1 cursor-not-allowed bg-gray-400 text-white rounded px-5 py-4 font-semibold text-sm transition"
        >
          + Upload New Book
        </button>
      </div>

      {showPublishedFile &&


        <section className='grid grid-cols-12 bg-gray-100 rounded-3xl p-4 gap-x-4'>

          <div className="col-span-9 bg-white shadow-lg rounded-lg border border-gray-200 p-5">
            <div className="text-md font-semibold text-gray-600 mb-5">
              Essential Information
            </div>

            <div className="grid grid-cols-12 gap-4 mb-5">
              <div className='col-span-3'>
                <InputField
                  label="Call Number"
                  name="callNumber"
                  type="text"
                  onChange={() => { }}
                  placeholder=""
                />
              </div>

              <div className='col-span-3'>
                <InputField
                  label="Material"
                  name="Material"
                  type="text"
                  onChange={() => { }}
                  placeholder=""
                />
              </div>

              <div className='col-span-3'>
                <SelectField
                  label="Audience"
                  name="Audience"
                  value="Adult"
                  onChange={() => { }}
                  options={
                    [
                      { label: "Children", value: "Children" },
                      { label: "Adult", value: "Adult" },
                    ]
                  }
                />
              </div>

              <div className='col-span-3'>
                <InputField
                  label="ISBN"
                  name="ISBN"
                  type="text"
                  onChange={() => { }}
                  placeholder=""
                />
              </div>
            </div>

            <div className="grid grid-cols-12 gap-4 mb-5">
              <div className='col-span-4'>
                <InputField
                  label="ISBN"
                  name="ISBN"
                  type="text"
                  onChange={() => { }}
                  placeholder=""
                />
              </div>

              <div className='col-span-4'>
                <InputField
                  label="Year of Publication"
                  name="Year of Publication"
                  type="text"
                  onChange={() => { }}
                  placeholder=""
                />
              </div>

              <div className='col-span-4'>
                <InputField
                  label="Publisher"
                  name="Publisher"
                  type="text"
                  onChange={() => { }}
                  placeholder=""
                />
              </div>
            </div>

            <div className="grid grid-cols-12 gap-4 mb-5">
              <div className='col-span-12'>
                <TextareaField
                  label="Overview"
                  name="Overview"
                  // value="This is hardcoded text"
                  onChange={() => { }}
                // error="Description is required."
                // placeholder="Enter a description"
                />
              </div>
            </div>

            <div className="grid grid-cols-12 gap-4 mb-5">
              <div className='col-span-12'>
                <SelectField
                  label="Assign Category"
                  name="Assign Category"
                  value="Adult"
                  onChange={() => { }}
                  options={
                    [
                      { label: "Children", value: "Children" },
                      { label: "Adult", value: "Adult" },
                    ]
                  }
                />
              </div>
            </div>

            <div className="grid grid-cols-12 gap-4 mb-5">
              <div className="col-span-12 w-full">
                <ImageUploader
                  label="Upload cover picture"
                  onChange={() => { }}
                  // error={() => {}}
                  accept="image/png, image/jpeg, image/jpg, image/gif, image/webp"
                />
              </div>
            </div>

            <div className="flex gap-4 pt-2 mb-5">
              <button
                type="button"
                className="flex-1 bg-gray-800 hover:bg-gray-900 text-white rounded px-5 py-2 font-semibold text-sm transition"
              >
                Save as Draft
              </button>
              <button
                type="submit"
                className="flex-1 bg-orange-600 hover:bg-orange-700 rounded px-5 py-2 font-semibold text-sm text-white transition"
              >
                Accept And Publish
              </button>
            </div>
          </div>


          <div className="col-span-3 h-full">
            <div className="flex flex-col h-full bg-white shadow-lg rounded-lg border border-gray-200 p-5">
              <div className="text-md font-semibold text-gray-600 mb-5">
                Detected Pages
              </div>

              <div className='mb-5'>
                <KeyValueRow labelKey='Pages Uploaded' labelValue='500 of 500' />
                <KeyValueRow labelKey='File Size' labelValue='48.6 MB' />
                <KeyValueRow labelKey='Title Detection' labelValue='yes' />
                <KeyValueRow labelKey='Chapter Detection' labelValue='yes' />
              </div>

              <Divider />

              <CheckboxField
                name="newsletter"
                label="Create Audio Transcript"
                checked={true}
                onChange={() => { }}
              />

              <Divider />

              <div className="flex-grow" />

              <Divider />
              <button
                type="button"
                onClick={downloadTranscriptFile}
                className="bg-gray-800 hover:bg-gray-900 cursor-pointer text-white rounded p-2 font-semibold text-sm transition flex items-center gap-2 mb-3 justify-center"
              >
                <FaFileAlt />
                View Transcript
              </button>
              <button
                type="button"
                onClick={downloadAudioFile}
                className="bg-gray-800 hover:bg-gray-900 cursor-pointer text-white rounded p-2 font-semibold text-sm transition flex items-center gap-2 justify-center"
              >
                <FaPlay />
                Play Audio
              </button>
              <Divider />

            </div>
          </div>
        </section>
      }


    </div>
  )
}

export default page
