'use client'

import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import React from 'react'

const layout = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="m-2">
        <Sidebar />
      </div>
      <div className="flex flex-col flex-1">
        <div className="m-2">
          <Header />
        </div>
        <main className="flex-1 overflow-auto p-4">
          {children}
        </main>
      </div>
    </div>

  )
}

export default layout
