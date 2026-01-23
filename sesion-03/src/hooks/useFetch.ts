import { useEffect, useState } from "react";

// T ---> Generics 
export function useFetch<T>(url:string){
  //aqui guardamos la data final
  const [data, setData] = useState<T | null>(null)
  //mostrar o no un loop que diga cargando
  const [loading, setLoading] = useState<boolean>(true)
  //por si tenemos errores y fallamos
  const [error, setError] = useState<Error | null>(null)

  //efecto de cuando cargue el componente o renderice por primera vez haremos useEffect
  useEffect(() => {
    setLoading(true)
    setError(null)
    //creamos un mando a distancia para abortar el fetch
    const controller = new AbortController
    //signal es una señal que va por el cable del fetch
    const { signal } = controller;
    const fetchData = async () =>{
      try {
        //hacemos la llamada y pasamos la señal de cancelacion
        const response = await fetch(url, {signal})
        if(!response.ok){
          setError(error as Error)
          throw new Error("Error enn la peticion")
        }
        const result = await response.json()
        setError(null)
        setData(result)
      } catch (error : unknown) {
        setError(error as Error)
      } finally {
        setLoading(false)
      }
    }

    //--- ERROR MUY COMÚN, NO LLAMAR A LA FUNCION DENTRO DE UseEffect()
    fetchData()
  
    // El return se ejecuta cuando se desmonta el componente
    return () => {
      controller.abort()
    }
  }, [url])
  
  return {data, loading, error}
}