import { createContext, useState, type ReactNode } from "react";
import type { FamilyContextType, FamilyState } from "../types";



//1.- crear el contexto con un hook personalizado que se llama createContext
const FamilyContext = createContext<FamilyContextType | null>(null);

//2.- Asignar un estado inicial al contexto
const estadoInicial: FamilyState =  {
  mensaje: 'hola desde el contexto de la familia',
  counter: 0
}

//crear el provider (aquello que envuelve a los componentes que van a consumir el contexto)
export function FamilyProvider({ children }: {children: ReactNode}) {
  //hooks
  const [estado, setEstado] = useState<FamilyState>(estadoInicial);
  //funciones, para cambiar los elementos del contexto, etc HACER SIEMPRE CLONES CON LOS OBJETOS 
const setMensaje = (newMensaje: string) => {
  setEstado(prev =>({
    ...prev,
    mensaje: newMensaje
  }))
}

const incrementarContador = () => {
  setEstado(prev =>({...prev,counter: prev.counter + 1}))
}

const decrementarContador = () => {
  setEstado(prev =>({...prev,counter: prev.counter - 1}))
}

const value:FamilyContextType = {
  ...estado,
  setMensaje,
  incrementarContador,
  decrementarContador
}

  return (
    <FamilyContext value={value}>
      {children}
    </FamilyContext>
  )
}


//exportar el contexto
export default FamilyContext