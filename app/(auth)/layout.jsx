'use client'

import React from 'react'

const AuthLayout = ({ children }) => {
  return (
    <section className="flex h-screen">
      <div
        className="w-full h-full bg-no-repeat bg-left bg-contain"
        style={{
          backgroundImage: "url('/authLayoutIcon.svg')",
        }}
      >
        <main className="flex justify-center items-center w-full h-full mt-5">
          {children}
        </main>
      </div>
    </section>
  )
}

export default AuthLayout
