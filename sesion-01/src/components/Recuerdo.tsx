// import React from 'react'

// //tipos de datos en TypeScript: TIPADOS
// //let nombre:string = "Pepe";
// //let edad:number = 10;
// //let isAdmin:boolean = false;
// //let nulo:null = null;
// //let indefinido:undefined = undefined;

// //array
// const lenguajes: string[] = ["javascript", "typescript", "python"];
// const numeros: number[] = [1, 2, 3, 4, 5];

// //array de objetos
// const usuarios:{nombre: string, edad: number}[]=[
//   {nombre: "Pepe", edad: 29},
//   {nombre: "Sara", edad: 20},
//   {nombre: "María", edad: 18}
// ]

// //objeto simple tipado
// const persona:{nombre: string, edad: number,admin: boolean}={
//   nombre: "María",
//   edad: 30,
//   admin: true
// }

// //**************** INTERFACES *******************

// interface Usuario{
//   id: number,
//   nombre: string,
//   email: string,
//   edad?: number //edad es opcional. El '?' indica que es opcional
//   activo: boolean
// }

// const usuario1: Usuario = {
//   id: 1,
//   nombre: "mario",
//   email: "mario@gmail.com",
//   activo: true
//   //edad es opcional
// };

// const usuario2: Usuario = {
//   id: 1,
//   nombre: "paula",
//   email: "paula@gmail.com",
//   edad: 18,
//   activo: true
// };

// function sumar(a: number, b: number): number {
//   return a + b;
// }

// function saludar(nombre: string): void {
//   console.log("Hola ", nombre);
// }

// //funciones con parámetros opcionales
// function crearUsuario(nombre: string, edad?: number): Usuario {
//   return {
//     id: Date.now(),
//     nombre,
//     email: `${nombre.toLowerCase()}@gmail.com`,
//     edad,
//     activo: true
//   }
// }

// //unión Types (posibles valores que puede tomar una variable)
// let id: string | number;
// // id = true <-- error, revienta

// type Tamano = "small" | "medium" | "large";

// let talla: Tamano = "small";

// //-------------- cuando usar types y cuando interfaces --------------
// // usar types con primitivos y uniones
// // usar interfaces con objetos
// //Ejemplo:
// type ID = string | number;
// type Estado = "pendiente" | "completado" | "cancelado";

// interface Persona {
//   nombre: string,
//   edad: number
// }

// //extender una interfaz
// interface Empleado extends Persona {
//   puesto: string,
//   salario: number
// }

// const empleado1: Empleado = {
//   nombre: "Manolo",
//   edad: 53,
//   puesto: "Animador deportivo",
//   salario: 50000
// }
// /*
// const Recuerdo = () => {
//   return (
//     <div>Recuerdo</div>
//   )
// }

// export default Recuerdo
// */

// /**
//  * crear una interfaz llamada producto que tenga id, nombre, precio, disponible y opcionalmente categoria.
//  *Implementar una funcion llamada calcularTotal que reciba un array de tipo producto y devuelva un numero que sea la suma de todos los precios de los productos disponibles.
//  *Crear un array de productos con al menos tres productos diferentes.
//  *Probar la función y ver que da.
//  */