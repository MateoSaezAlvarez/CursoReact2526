import { createContext, use, useState, type ReactNode } from "react"

interface User {
  email: string
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => boolean
  logout: () => void
}

//crear el almacén global que podremos usar en cualquier componente.
const AuthContext = createContext< AuthContextType | null>(null)

//crear el provider que envuelva donde usar el contexto
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  //login
  const login = (email: string, password: string): boolean => {
    if(email==='admin@admin.com' && password === '1234'){
      setUser({email})
      return true
    }
    return false
  }
  //logout
  const logout = () => {
    setUser(null)
  }
  //logout

  const value = {
    user,
    login,
    logout
  }

  return (
    <AuthContext value={value}>
      {children}
    </AuthContext>
  )
}


//creo un hook personalizado
export function useAuth() {
  const context = use(AuthContext)
  if(context === undefined){
    throw new Error("Error al usar el contexto global")
  }
  return context
}
