import React, { useState } from 'react'

interface Usuario {
  nombre: string,
  edad: number
}

interface Producto {
  id: number,
  nombre: string,
  precio: number
}

type Estado = "pendiente" | "aprobado" | "rechazado";

//modo dios (el primer paso es creérselo)
//voy a crear un type llamado CamposUsuario que tenga como posibles valores las claves de la interfaz Usuario

type CamposUsuario = keyof Usuario;





const Ejercicio2 = () => {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [productos, setProductos] = useState<Producto | null>(null); 
  const [estado, setEstado] = useState<Estado>("pendiente")
  //cuando se vaya a renderizar pordré gestionar el null si hay o no productos
  if(productos === null)
    return <p>Cargando los datos</p>
  else
    <h1>{productos.nombre}</h1>

  let campo: CamposUsuario = "nombre";

  return (
    <div>Ejercicio2</div>
  )
}

export default Ejercicio2