import React from 'react'

/**
 * crear una interfaz llamada producto que tenga id, nombre, precio, disponible y opcionalmente categoria.
 *Implementar una funcion llamada calcularTotal que reciba un array de tipo producto y devuelva un numero que sea la suma de todos los precios de los productos disponibles.
 *Crear un array de productos con al menos tres productos diferentes.
 *Probar la función y ver que da.
 */
const Ejercicio1 = () => {
  interface Producto {
    id: number;
    nombre: string;
    precio: number;
    disponible: boolean;
    categoria?: string;
  }

  function calcularTotal(productos: Producto[]): number {
    let total = 0;
    productos.filter((producto) =>
      producto.disponible)
    .forEach((producto) => {
      total += producto.precio
    })
    return total;
  }

  const productos: Producto[] = [
    { id: 1, nombre: "64 GB Memoria RAM DDR5", precio: 1000, disponible: true },
    { id: 2, nombre: "Nvidia RTX 3060", precio: 450, disponible: false },
    { id: 3, nombre: "Ratón Logitech", precio: 60, disponible: true },
  ];

  console.log(calcularTotal(productos));

  return (
    <div></div>
  )
}

export default Ejercicio1