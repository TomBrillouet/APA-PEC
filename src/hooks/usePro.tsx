import { useState } from "react"
import { syncBothPro } from "../api/pro"
import { useAuth } from "../context/AuthContext"
import { ProType } from "../types"

export const usePro = () => {
  const { currentUser } = useAuth()
  const userId = currentUser?.uid
  const [pro, setPro] = useState<ProType | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const proSubmit = (newProInfos: ProType) => {
    if (!userId) return
    setPro(newProInfos)
    syncBothPro(userId, newProInfos)
  }

  return {
    proSubmit,
    pro,
    setPro,
    setIsLoading,
    isLoading,
  }
}
