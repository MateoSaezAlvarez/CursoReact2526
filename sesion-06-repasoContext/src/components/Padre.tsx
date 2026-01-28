import React from 'react'
import Hijo from './Hijo'

const Padre = () => {
  return (
    <div className='p-4 max-w-2xl mx-auto'>
      <div className='border-4 border-red-500 rounded-lg bg-red-50 p-4'>
        <h1>Padre</h1>
        <div className='mt-4 border-4 border-red-200'>
          <Hijo />
        </div>
      </div>
    </div>
  )
}

export default Padre