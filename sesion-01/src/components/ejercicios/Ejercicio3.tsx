import React, { useState } from 'react'
// USO de formularios con TypeScript

interface Usuario {
  nombre: string,
  edad: number,
  email: string
}



const Ejercicio3 = () => {
  const [usuario, setUsuario] = useState<Usuario>({nombre:"", edad:0, email:""})

  const actualizarCampo = (campo: keyof Usuario, valor: string|number) =>{
    setUsuario({
      ...usuario, 
      [campo]:valor
      //si quiero añadir campos nuevos tengo que hacer destructuring para mantener la estructura y ya cualquier campo nuevo va entre corchetes
    })
  }


  return (
    <>
      <div>Ejercicio3</div>
      <p>Introduce tu nombre: </p>
      <input value={usuario.nombre} onChange={(e)=>{actualizarCampo("nombre",e.target.value)}}/>
    </>
  )
}

export default Ejercicio3