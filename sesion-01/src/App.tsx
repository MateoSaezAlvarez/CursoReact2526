import React from 'react'

import Header from './components/Header'
import Saludo from './components/Saludo'
import Tarjeta from './components/Tarjeta'
import FormularioUsuario from './components/FormularioUsuario'

const App = () => {
  return (
    <div className='min-h-screen bg-gray-100 '>
      <Header />
      <main className='container bg-gray-100 mx-auto p-4'>
        <Saludo nombre='Mateo' edad={20} />
        <Saludo nombre='Pepo' edad={30} />
        <Saludo nombre='Jose' edad={46} />
        <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6'>
          <Tarjeta 
            title='React 19'
            description='última versión de la librería React para JavaScript'
            image='https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=1170'
            />

          <Tarjeta 
            title='React 19'
            description='última versión de la librería React para JavaScript'
            image='https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=1170'
            favorite={true}
          />


          <Tarjeta 
            title='React 19'
            description='última versión de la librería React para JavaScript'
            favorite={true}
          />

          <Tarjeta 
            title='React 19'
            description='última versión de la librería React para JavaScript'
            image='https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=1170'
          />


        </div>
        <FormularioUsuario />
        </main>
    </div>
    
  )
}

export default App