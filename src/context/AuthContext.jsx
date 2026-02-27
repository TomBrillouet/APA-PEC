import { createContext, useContext, useEffect, useState } from "react" // ← createContext, useContext
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../api/firebase-config"

const AuthContext = createContext() // ← manquait

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      setLoading(false)
    })
    return unsubscribe
  }, [])

  return (
    <AuthContext.Provider value={{ currentUser, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext) // ← manquait
