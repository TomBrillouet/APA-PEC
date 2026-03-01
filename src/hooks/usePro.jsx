import { useState } from "react"
import { syncBothPro } from "../api/pro"
import { useAuth } from "../context/AuthContext"

export const usePro = () => {
  const { currentUser } = useAuth()
  const userId = currentUser?.uid
  const [pro, setPro] = useState()

  const proSubmit = (newProInfos) => {
    setPro(newProInfos)
    syncBothPro(userId, newProInfos)
  }
  return {
    proSubmit,
    pro,
    setPro,
  }
}
