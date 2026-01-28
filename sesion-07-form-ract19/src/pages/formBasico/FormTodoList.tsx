import { useActionState } from "react";
import type { FormState, TodoData } from "../../types";


//simular guardar en una base de datos
const guardarEnBaseDeDatos = async (todo: TodoData) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  localStorage.setItem("todo", JSON.stringify(todo));
}

//crear una function que ejecuta react al enviar el formulario
const guardarAction = async( 
  _prevValue: FormState,
  formData: FormData //recibe los datos del formulario 
): Promise<FormState> => {
  //extraer todos los datos del formulario
  const nombreTodo = formData.get("nombreTodo") as string;
  const fechaTodo = formData.get("fechaTodo") as string;
  //restriccion
  if(!nombreTodo || !fechaTodo) {
    return {
      error: "Todos los campos son obligatorios",
      success: null,
    };
  }
  try {
    await guardarEnBaseDeDatos({
      nombre: nombreTodo,
      fecha: fechaTodo,
    });
    return {
      error: null,
      success: "👌Todo guardado con exito",
    }
  } catch (error) {
    return {
      error: `❌ Error al guardar el todo: ${error}`,
      success: null,
    }
  }
}

const FormTodoList = () => {
  const [state,formAction,isPending] =useActionState(guardarAction,{
    error: null,
    success: null
  });

  return (
    <div>
      <h1>Formulario de todo</h1>
      <form action={formAction}>
        <input type="text" name="nombreTodo" placeholder="Nombre del todo" />
        {state.error && <p>{state.error}</p>}
        {state.success && <p>{state.success}</p>}
        <input type="date" name="fechaTodo" placeholder="Fecha del todo" disabled={isPending}/>
        <button type="submit" disabled={isPending}>Guardar</button>
      </form>
    </div>
  )
}
  
  export default FormTodoList