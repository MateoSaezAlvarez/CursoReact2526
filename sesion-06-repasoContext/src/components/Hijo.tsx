import React from 'react'
import Nieto from './Nieto'
import { useFamily } from '../hooks/useFamily';

const Hijo = () => {
  const { incrementarContador, decrementarContador }=useFamily();
  return (
    <div className='p-4 max-w-2xl mx-auto'>
      <div className='border-4 border-orange-500 rounded-lg bg-orange-50 p-4'>
        <h1>Hijo</h1>
        <div className='flex flex-row space-x-1'>
          <button 
        className='px-4 py-2 bg-orange-500 font-bold transition-all text-white hover:bg-orange-900 rounded-lg'
        onClick={incrementarContador}>Incrementar contador</button>


        <button 
        onClick={decrementarContador}
        className='px-4 py-2 bg-blue-500 font-bold transition-all text-white hover:bg-blue-900 rounded-lg'>
          Decrementar contador
        </button>
        </div>
        <div className='mt-4 border-4 border-orange-200'>
          <Nieto />
        </div>
      </div>
    </div>
  )
}

export default Hijo