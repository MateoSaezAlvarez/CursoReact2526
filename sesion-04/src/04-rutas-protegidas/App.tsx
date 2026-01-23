import { Route, Routes } from "react-router-dom"
import PublicHome from "./pages/PublicHome"
import SecretPage from "./pages/SecretPage"
import { useState } from "react"
import { ProtectedRoute } from "./helpers/Protected"
import NavBar from "./components/NavBar"

const App = () => {
//hooks
const [isAllowed, setIsAllowed] = useState(false)

  return (
    <div className="min-h-screen bg-slate-50">
      <main className="max-w-4xl mx-auto">

        <NavBar/>
        <div className="flex justify-center items-center m-2">
          <button 
          onClick={()=>setIsAllowed(!isAllowed)}
          className={`px-10 py-3 rounded-xl font-black text-xs transition-all uppercase active:scale-95 ${
            isAllowed
              ? "bg-slate-900 text-slate-400 border-slate-700" 
              : "bg-indigo-600 text-white shadow-lg shadow-indigo-400"
          }`}
          >
            {isAllowed? "Sign out": "Sign in"}
          </button>
        </div>

        <Routes>
          <Route path="/" element={<PublicHome />} />
          <Route path="/secret" element={
            <ProtectedRoute isAllowed={isAllowed}>
              <SecretPage />
            </ProtectedRoute>
          }/>
        </Routes>
      </main>
    </div>
  )
}

export default App