'use client'

import React from 'react'

const KeyValueRow = ({ labelKey, labelValue }) => {
  return (
    <div className='flex justify-between items-center w-full mb-3'>
      <div className='text-sm font-medium text-gray-500'>{labelKey}</div>
      <div className='text-sm font-bold text-gray-600'>{labelValue}</div>
    </div>
  )
}

export default KeyValueRow
