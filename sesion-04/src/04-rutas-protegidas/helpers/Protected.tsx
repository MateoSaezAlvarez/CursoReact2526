import type { ReactNode } from "react"
import { Navigate } from "react-router-dom"

interface ProtectedRouteProps {
  isAllowed: boolean,
  children: ReactNode
}
export const ProtectedRoute = ({ isAllowed, children }: ProtectedRouteProps) => {

  if (!isAllowed) {
    return <Navigate to="/" replace/> 
    //replace reemplaza las rutas actuales por la que le pasamos en el historial de rutas
  }
  return <>{children}</>
}