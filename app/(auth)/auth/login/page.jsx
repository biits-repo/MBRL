'use client'

import ToggleButton from '@/components/ToggelButton'
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa'
import React, { useState } from 'react'

const LoginPage = () => {

  const [enabled, setEnabled] = useState(true)

  return (
    <div className="w-full h-full overflow-y-hidden relative flex flex-col items-center gap-10">

      <h1 className="text-orange-500 font-bold text-xl mt-6 mb-20 text-center">
        ADMINISTRATOR PORTAL
      </h1>

      <div className="relative w-full max-w-xl h-full">

        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 z-10 ">
          <div
            className="bg-white border border-gray-200 p-4"
            style={{
              borderRadius: '25px',
              boxShadow: '6px 4px 35.3px 0px #FFE9DF',
            }}
          >
            <img
              src="/registerTopCardContent.svg"
              alt="auth-logo"
              className="w-60 h-36"
            />
          </div>
        </div>

        <div
          className="p-1 bg-white shadow-lg space-y-6 h-full px-16"
          style={{
            borderRadius: '30px 30px 0px 0px',
            background: '#FFF',
          }}
        >
          <div className='mt-36'>
            <label className="block text-gray-600 text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors text-gray-700"
            />
          </div>

          <div>
            <label className="block text-gray-600 text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              placeholder="Your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors text-gray-700"
            />
          </div>

          <ToggleButton
            enabled={enabled}
            setEnabled={setEnabled}
          />

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-orange-600 transition-colors mt-6"
          >
            Submit
          </button>

          <div className="mt-8 text-center">
            <p className="text-gray-600 text-sm mb-4">Register with</p>
            <div className="flex justify-center space-x-4">

              <button className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
                <FaFacebookF className="text-gray-800 w-5 h-5" />
              </button>

              <button className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
                <FaGithub className="text-gray-800 w-5 h-5" />
              </button>

              <button className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
                <FaGoogle className="text-gray-800 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default LoginPage
