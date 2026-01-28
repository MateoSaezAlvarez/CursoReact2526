import React from 'react'
import Padre from './Padre'
import { useFamily } from '../hooks/useFamily'

const Abuelo = () => {
  const { counter }= useFamily()
  return (
    <div className='p-4 max-w-2xl mx-auto'>
      <div className='border-4 border-green-500 rounded-lg bg-green-50 p-4'>
        <h1>Abuelo</h1>
        <div className='mt-4 border-4 border-green-200'>
          <p>
            Aqui empieza el arbol genealogico de componentes usando context. El contador vale:
            <br />
            <strong>{counter}</strong>
          </p>
          <Padre />
        </div>
      </div>
    </div>
  )
}

export default Abuelo