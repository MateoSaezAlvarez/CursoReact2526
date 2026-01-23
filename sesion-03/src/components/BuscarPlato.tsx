import React, { useState } from 'react'

interface buscarPlato {
  buscar: string
}

const BuscarPlato = () => {
  //Crear un componente Buscar que filtre por pulsación de teclado que permita buscar por nombre de plato o por ingrediente
  const [buscarPlato, setBuscarPlato] = useState<buscarPlato>({
    buscar: ''
  })


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBuscarPlato({
      ...buscarPlato,
      [e.target.name]: e.target.value
    })
  }

  //modificar platosList para que se filtre por nombre de plato o por ingrediente de la busqueda
  

  return (
    <div className='max-w-md mx-auto p-6 bg-white rounded-xl shadow'>
      <h3 className='text-xl font-bold mb-4'>Buscador de platos</h3>
      <form className='space-y-4'>
        <div>
          <label className='block text-sm font-medium mb-2'>Buscar por:</label>
          <input
            type='text'
            name='buscar'
            value={buscarPlato.buscar}
            onChange={handleChange}
            className='w-full p-2 border border-gray-300 rounded-md'
          />
        </div>
      </form>
    </div>
  )
}

export default BuscarPlato