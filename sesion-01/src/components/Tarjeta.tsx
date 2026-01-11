import React, { useState } from 'react'
//uso de renderizado condicional en componentes y propiedades
//los paréntesis significan return cuando ya estamos dentros de un return:

interface TarjetaProps {
  title: string,
  description: string,
  image?: string,
  favorite?: boolean
}

const Tarjeta = ({
  title,
  description,
  image,
  favorite = false
}:TarjetaProps) => {


  const [favourite, setFavourite] = useState(favorite)

  return (
    <div onClick={()=>setFavourite(!favourite)}
      className={`rounded-lg shadow-md p-6 ${
        favourite ? 'bg-yellow-100 border-2 border-amber-600' : 'bg-white'
      }`}
    >
      
      {image && (
        <img 
          className='w-full h-48 object-cover rounded-md mb-4' 
          src={image} 
          alt={title} 
        />
      )}
      <h3 className='text-xl font-bold mb-2'>{title}</h3>
      <p className='text-gray-500'>{description}</p>
      {favourite && (
        <span>
          ⭐
        </span>
      )}
{/**
 * return(
 *  whatever
 *  () <-- ESTO SIGNIFICA RETURN
 * )
 */}
    </div>
  )
}

export default Tarjeta


