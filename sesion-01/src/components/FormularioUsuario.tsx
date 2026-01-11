//Crear un formulario llamdo FormularioUsuario que gestione el nombre, edad e id
//ejercicio grande: Hacer un formulario que le pase una url (titulo, descripcion y url), y al enviar se crea una card

import React, { useState } from 'react'

interface Usuario{
  nombre: string,
  email: string,
  edad: number
}

const FormularioUsuario = () => {
  const [usuario, setUsuario] = useState<Usuario>({
    nombre:"",
    email:"",
    edad:0
  })

const actualizarCampo = (campo: keyof Usuario, valor: string|number) => {
  setUsuario({
      ...usuario, 
      [campo]:valor
      //si quiero añadir campos nuevos tengo que hacer destructuring para mantener la estructura y ya cualquier campo nuevo va entre corchetes
    })
}

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    //Formulario de datos
    <div className='max-w-md mx-auto p-6 bg-white rounded-xl shadow'>
      <h3 className='text-xl font-bold mb-4'>
        Registro de usuarios: 
      </h3>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label className='block text-sm font-medium mb-2'>Nombre</label>
          <input
            type='text'
            value={usuario.nombre}
            className='w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:ring-blue-500'
            onChange={(e)=>{
              actualizarCampo("nombre",e.target.value)
            }}
            required
          />
        </div>

        <div>
          <label className='block text-sm font-medium mb-2'>email</label>
          <input
            type='email'
            value={usuario.email}
            className='w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:ring-blue-500'
            onChange={(e)=>{
              actualizarCampo("email",e.target.value)
            }}
            required
          />
        </div>

        <div>
          <label className='block text-sm font-medium mb-2'>edad</label>
          <input
            type='number'
            value={usuario.edad}
            className='w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:ring-blue-500'
            onChange={(e)=>{
              actualizarCampo("edad",parseInt(e.target.value))
            }}
            required
          />
        </div>
        <button type='submit'
          className='w-full py-2 bg-green-500 text-white rounded hover:bg-green-900 font-semibold'
        >
          Guardar usuario
        </button>
        {/*Mostrar los datos que tengo actualmente*/}
        <div className='mt-6 mb-6 p-4 bg-gray-100 rounded'>
          <h4 className='font-semibold mb-2'>Datos actuales: </h4>
          <pre className='text-sm'>
            {JSON.stringify(usuario,null,2)}
          </pre>
        </div>
      </form>

    </div>
  )
}
//Guardar el JSON en el localStorage

export default FormularioUsuario

/**
 * Ejercicio1: Crear un componente que gestione una lista de contactos.
 * El usuario debe poder crear y eliminar contactos, para ello los requisitos son:
 * - Crear una interfaz llamada Contacto con el id, nombre, teléfono y email
 * - El componente debe de tener: un formulario con 3 inputs: nombre, teléfono y email, un botón para agregar el contacto,
 *  una lista para mostrar los contactos y un botón para eliminar un contacto.
 * Las funcionalidades deben de ser: 
 * - Agregar un nuevo contacto (generar un id automático con alguna librería npm)
 * - Eliminar un contacto por su id
 * - limpiar el formulario después de agregar
 * - mostrar un mensaje si no hay contactos almacenados
 * 
 * 
 * Ejercicio2 (hacerlo bonito, uso para el examen):
 * Hacer un login de validación básica. Debe de tener dos campos, email y password. 
 * Hay que validar que los campos no estén vacíos
 * Hay que validar alguna expresión regular que el formato del email sea válido
 * Hay que mostrar y ocultar la contraseña con un botón
 * Hay que mostrar mensajes de error personalizados (campos vacíos, email incorrecto, etc)
 * La contraseña tener un mínimo de caracteres
 */