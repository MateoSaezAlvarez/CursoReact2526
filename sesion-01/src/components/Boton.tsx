//crear un componente llamado Botón (exportable a todos los proyectos) que le pase como props un texto, el tipo de botón y el evento onClick.
//El tipo de botón lo llamaré botonType y tendrá tres tipos: primary, secondary, danger.
// Si es primary, tendrá un background azul 500, y cuando me ponga encima (hover) tendría un background azul 700.
// Si es secondary, tendrá un bg gray 500, y cuando me ponga encima tendría un bg gray 700.
// Si es danger, tendrá un bg rojo 500, y cuando me ponga encima tendría un bg rojo 700.
//Todos tendrán texto blanco.
// Cuarta propiedad: submit (true,false).

import React from 'react'

type TipoBoton = "primary" | "secondary" | "danger";
interface BotonProps {
  text: string,
  type: TipoBoton,
  onClick: () => void,
  submit: boolean
}

const Boton = ({
  text,
  type,
  onClick,
  submit 
}: BotonProps) => {

const estilos = {
  primary: "bg-blue-500 hover:bg-blue-700 text-white",
  secondary: "bg-gray-500 hover:bg-gray-700 text-white",
  danger: "bg-red-500 hover:bg-red-700 text-white"
}

  return (
    <button
    type={submit?"submit":"button"}
    className={`px-4 py-2 rounded font-semibold shadow transition ${estilos[type]}`}
    onClick={onClick}>
      {text}
    </button>
  )
}

export default Boton