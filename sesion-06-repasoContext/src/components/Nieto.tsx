import React from 'react'
import { useFamily } from '../hooks/useFamily';

const Nieto = () => {
  const { mensaje, setMensaje }=useFamily();

  return (
    <div className='p-4 max-w-2xl mx-auto'>
      <div className='border-4 border-yellow-500 rounded-lg bg-yellow-50 p-4'>
        <h1>Nieto. Su mensaje del contexto es:</h1>
        <br />
        <strong>{mensaje}</strong>
        <div className='flex gap-2 my-4'>
          <input 
          type="text"
          className='border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
          placeholder='Escribe un nuevo mensaje'
          onChange={(e) => setMensaje(e.target.value)}
          />
        </div>
        <button 
        className='px-4 py-2 rounded-2xl bg-blue-600 hover:bg-blue-900 transition-all text-white'
        onClick={() => setMensaje('hola desde el contexto de la familia')}>
          Resetear mensaje
        </button>
      </div>
    </div>
  )
}

export default Nieto