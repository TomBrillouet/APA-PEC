import { useState } from "react"
import { BilanType } from "../types"

export const useSelectedBilan = () => {
  const [selectedBilan, setSelectedBilan] = useState<BilanType | null>(null)

  const handleSelectedBilan = (selectedBilan: BilanType | null) => {
    setSelectedBilan(selectedBilan)
  }

  const toggleOldBilan = () => {
    setSelectedBilan(null)
  }

  const closeOldBilan = () => {
    setSelectedBilan(null)
  }

  return { selectedBilan, handleSelectedBilan, toggleOldBilan, closeOldBilan }
}
