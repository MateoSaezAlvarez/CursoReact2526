

//Tipos globales van primeros
export interface FamilyState {
  mensaje: string;
  counter: number;
}


//Acciones a realizar
export interface FamilyActions {
  setMensaje: (mensaje: string) => void;
  incrementarContador: () => void;
  decrementarContador: () => void;
}





//Exportar tipos del contexto
export type FamilyContextType = FamilyState & FamilyActions