'use client'

import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import { useState } from 'react'
import React from 'react'

const layout = ({children}) => {
  const [openSidebar, setOpenSidebar] = useState(true);

  return (
    <>
        {/* <Header /> */}
        <Sidebar isOpen={openSidebar} onClose={() => setOpenSidebar(false)} />
        <main className="p-4">
            {children}
        </main>
    </>
  )
}

export default layout
