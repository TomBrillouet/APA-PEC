import React, { createContext, useContext, useEffect, useState } from "react"
import { onAuthStateChanged, User } from "firebase/auth"
import { auth } from "../api/firebase-config"

type CurrentUserType = User | null

type AuthContextType = {
  currentUser: CurrentUserType
  loading: boolean
}

type AuthProviderType = {
  children: React.ReactNode
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: AuthProviderType) {
  const [currentUser, setCurrentUser] = useState<CurrentUserType>(null)
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

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error("useAuth must be used within an AuthProvider")
  return context
}
