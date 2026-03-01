import { useState } from "react"

export const useSelectedBilan = () => {
  const [selectedBilan, setSelectedBilan] = useState(null)

  const handleSelectedBilan = (selectedBilan) => {
    setSelectedBilan(selectedBilan)
  }
  return { selectedBilan, handleSelectedBilan }
}
